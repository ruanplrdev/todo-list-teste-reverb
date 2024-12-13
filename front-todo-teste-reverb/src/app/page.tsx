"use client";
import * as Yup from "yup";
import { Form } from "@/components/Form";
import { Modal } from "@/components/Modal";
import { useTodoContext } from "@/context/TodoContext";
import { useFormik } from "formik";
import { useEffect } from "react";
import { createTodo, fetchTodos, updateTodo } from "@/api/todoApi";
import { TodoItemProps } from "@/components/TodoItem";

export default function Home() {
  const { listTodo, setListTodo } = useTodoContext();
  const { isModalOpen, setIsModalOpen } = useTodoContext();
  const { editingId, setEditingId } = useTodoContext();
  const {itemToDelete, setItemToDelete} = useTodoContext();
  const {isDeleteModalOpen, setIsDeleteModalOpen} = useTodoContext();
  const {showCompleted, setShowCompleted} = useTodoContext();

  const formik = useFormik({
    initialValues: {
      id: 0,
      title: "",
      description: "",
      complete: false,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Título é obrigatório"),
      description: Yup.string().required("Descrição é obrigatória"),
    }),
    onSubmit: async (values:TodoItemProps) => {
      if (editingId !== null) {
        // Editar item existente
        try {
          const updatedTodo = await updateTodo(editingId, values);
          setListTodo((prevList) =>
            prevList.map((item) =>
              item.id === editingId ? updatedTodo : item
            )
          );
          setEditingId(null);
        } catch (error) {
          console.error("Erro ao atualizar a tarefa:", error);
        }
      } else {
        // Adicionar novo item
        try {
          const newTodo = await createTodo(values);
          setListTodo((prevList) => [...prevList, newTodo]);
        } catch (error) {
          console.error("Erro ao criar a tarefa:", error);
        }
      }
      setIsModalOpen(false);
      formik.resetForm();
    },
  });
  

  const handleDelete = () => {
    if (itemToDelete !== null) {
      setListTodo((prevList) => prevList.filter((item) => item.id !== itemToDelete));
      setItemToDelete(null);
      setIsDeleteModalOpen(false);
    }
  };

  const handleEdit = (id: number) => {
    const itemToEdit = listTodo.find((item) => item.id === id);
    if (itemToEdit) {
      formik.setValues({
        id: itemToEdit.id,
        title: itemToEdit.title,
        description: itemToEdit.description,
        complete: itemToEdit.complete,
      });
      setEditingId(id);
      setIsModalOpen(true);
    }
  };

  const handleToggleComplete = (id: number) => {
    setListTodo((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  };

  const confirmDelete = (id: number) => {
    setItemToDelete(id);
    setIsDeleteModalOpen(true);
  };

  // Separar tarefas completas e pendentes
  const completedTodos = listTodo.filter((todo) => todo.complete);
  const pendingTodos = listTodo.filter((todo) => !todo.complete);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const todos = await fetchTodos();
        setListTodo(todos);
      } catch (error) {
        console.error("Erro ao carregar tarefas:", error);
      }
    };
    loadTodos();
  }, [setListTodo]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 relative">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Gerenciador de Tarefas</h1>

      {/* Lista de Tarefas Pendentes */}
      {pendingTodos.length === 0 ? (
        <p className="text-gray-500 mb-6">Nenhuma tarefa pendente encontrada.</p>
      ) : (
        <ul className="w-full max-w-md bg-white shadow-md rounded-lg p-4 mb-6">
          {pendingTodos.map((value) => (
            <li
              key={value.id}
              className="bg-gray-50 p-4 rounded-lg shadow-sm mb-3 border border-gray-200 flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                  checked={value.complete}
                  onChange={() => handleToggleComplete(value.id)}
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-700">{value.title}</h2>
                  <p className="text-gray-500">{value.description}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  className="text-blue-500 hover:text-blue-700 font-medium"
                  onClick={() => handleEdit(value.id)}
                >
                  Editar
                </button>
                <button
                  className="text-red-500 hover:text-red-700 font-medium"
                  onClick={() => confirmDelete(value.id)}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <button
        className="text-blue-500 hover:underline mb-6"
        onClick={() => setShowCompleted((prev) => !prev)}
      >
        {showCompleted ? "Ocultar Concluídas" : "Ver Concluídas"}
      </button>


      {/* Lista de Tarefas Concluídas */}
      {showCompleted && <>

        {completedTodos.length === 0 ? (
          <p className="text-gray-500">Nenhuma tarefa concluída encontrada.</p>
        ) : (
          <ul className="w-full max-w-md bg-white shadow-md rounded-lg p-4 mb-6">
            {completedTodos.map((value) => (
              <li
                key={value.id}
                className="bg-gray-50 p-4 rounded-lg shadow-sm mb-3 border border-gray-200 flex justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-5 w-5"
                    checked={value.complete}
                    onChange={() => handleToggleComplete(value.id)}
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-700">
                      <s>{value.title}</s>
                    </h2>
                    <p className="text-gray-500">
                      <s>{value.description}</s>
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="text-red-500 hover:text-red-700 font-medium"
                    onClick={() => confirmDelete(value.id)}
                  >
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </>}


      {/* Botão Flutuante */}
      <button
        className="fixed bottom-6 right-6 bg-blue-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition"
        onClick={() => {
          setIsModalOpen(true);
          setEditingId(null); // Adicionar novo item
          // formik.resetForm();
        }}
      >
        <span className="text-2xl font-bold">+</span>
      </button>

      {/* Modal */}
      {isModalOpen && (

        <Modal.Backdrop onClick={() => setIsModalOpen(false)}>
          <Modal.Container>
            <Modal.Header title={editingId !== null ? "Editar Tarefa" : "Nova Tarefa"} />

            <Modal.Body>
              <Form.Root onSubmit={formik.handleSubmit}>
                <Form.Input
                  name="title"
                  placeholder="Título da tarefa"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  errorsTitle={formik.errors.title}
                  touchedTitle={formik.touched.title}
                />
                <Form.Input
                  name="description"
                  placeholder="Descrição da tarefa"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  errorsTitle={formik.errors.description}
                  touchedTitle={formik.touched.description}
                />
              </Form.Root>
            </Modal.Body>
          </Modal.Container>
        </Modal.Backdrop>

      )}

      {/* Modal Confirmação de Exclusão */}
      {isDeleteModalOpen && (
        <Modal.Backdrop onClick={() => setIsDeleteModalOpen(false)} >
          <Modal.Container>
            <Modal.Header title="Confirmar Exclusão" />
            <Modal.Body>{"Tem certeza de que deseja excluir esta tarefa?"}</Modal.Body>
            <Modal.Footer onCancel={() => setIsDeleteModalOpen(false)} onConfirm={handleDelete} />
          </Modal.Container>
        </Modal.Backdrop>
      )}
    </div>
  );
}

"use client"
import { TodoItemProps } from "@/components/TodoItem";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000", // Substitua com o endereço da sua API
});

// Função para pegar todos os itens de tarefas
export const fetchTodos = async () => {
  const response = await api.get("/todos");
  return response.data;
};

// Função para criar uma tarefa
export const createTodo = async (newTodo: TodoItemProps) => {
  const response = await api.post("/todo", newTodo);
  return response.data;
};

// Função para editar uma tarefa
export const updateTodo = async (id: number, updatedTodo: TodoItemProps | undefined) => {
  const response = await api.put(`/todo/${id}`, updatedTodo);
  return response.data;
};

// Função para excluir uma tarefa
export const deleteTodo = async (id: number) => {
  const response = await api.delete(`/todo/${id}`);
  return response.data;
};

export default api;


// export const deleteTodo = async (id: number) => {
//   const response = await axios.delete(`${API_URL}/${id}`);
//   return response.data;
// };
// export const updateTodo = async ({ id, formData }: { id: number; formData: FormData }) => {
//   formData.append('id', `${id}`)
//   const response = await axios.put(`${API_URL}/${id}`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
//   return response.data;
// }

// export const fetchTodoById = async (id: string | undefined) => {
//   const response = await axios.get(`${API_URL}/${id}`);
//   return response.data;
// };

'use client'
// src/context/TodoContext.tsx
import { createContext, useState, ReactNode, useContext } from 'react';
import { TodoItemProps } from '../components/TodoItem';

// Definir o tipo do Contexto
interface TodoContextType {
  listTodo: TodoItemProps[];
  setListTodo: React.Dispatch<React.SetStateAction<TodoItemProps[]>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editingId: number | null;
  setEditingId: React.Dispatch<React.SetStateAction<number | null>>;
  itemToDelete: number | null;
  setItemToDelete: React.Dispatch<React.SetStateAction<number | null>>;
  isDeleteModalOpen: boolean;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showCompleted: boolean;
  setShowCompleted: React.Dispatch<React.SetStateAction<boolean>>;

}

// Criar o Contexto
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Provedor de Contexto
export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [listTodo, setListTodo] = useState<TodoItemProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<number | null>(0);
  const [itemToDelete, setItemToDelete] = useState<number | null>(0);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);


  return (
    <TodoContext.Provider
      value={{
        listTodo,
        setListTodo,
        isModalOpen,
        setIsModalOpen,
        editingId,
        setEditingId,
        itemToDelete,
        setItemToDelete,
        isDeleteModalOpen, 
        setIsDeleteModalOpen,
        showCompleted, 
        setShowCompleted
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

// Hook para acessar o Contexto
export const useTodoContext = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};

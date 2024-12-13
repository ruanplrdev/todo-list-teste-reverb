"use client"
import { TodoItemProps } from "@/components/TodoItem";
import axios from "axios";

const API_URL = "http://localhost:4000";

// Função para pegar todos os itens de tarefas
export const fetchTodos = async () => {
  const response = await axios.get(`${API_URL}/todos`);
  return response.data;
};

// Função para criar uma tarefa
export const createTodo = async (newTodo: TodoItemProps) => {
  const response = await axios.post(`${API_URL}/todo`, {
    title: newTodo.title,
    description: newTodo.description,
    complete: newTodo.complete
  });
  return response.data;
};

// Função para editar uma tarefa
export const updateTodo = async (id: number, updatedTodo: TodoItemProps) => {
  const response = await axios.put(`${API_URL}/todo/${id}`, updatedTodo);
  return response.data;
};

// Função para excluir uma tarefa
export const deleteTodo = async (id: number) => {
  const response = await axios.delete(`${API_URL}/todo/${id}`);
  return response.data;
};

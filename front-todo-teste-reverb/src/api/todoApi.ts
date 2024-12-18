"use client"
import { TodoItemProps } from "@/components/TodoItem";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
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

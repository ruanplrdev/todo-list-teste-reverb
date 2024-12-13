"use client"
import { useTodoContext } from "@/context/TodoContext";
import { HtmlHTMLAttributes, ReactNode } from "react";


interface FormProps extends HtmlHTMLAttributes<HTMLFormElement> {
    children: ReactNode
} 

export const FormRoot = ({children, ...rest}:FormProps) => {

    const {setIsModalOpen} = useTodoContext();
    const {editingId} = useTodoContext();

    return (
        <form {...rest}>
           {children}

            <div className="flex justify-end gap-4">
                <button
                    type="button"
                    className="h-10 px-4 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                    onClick={() => setIsModalOpen(false)}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="h-10 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    {editingId !== null ? "Salvar" : "Adicionar"}
                </button>
            </div>
        </form>
    )
}
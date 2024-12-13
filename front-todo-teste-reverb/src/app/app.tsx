"use client"
import { TodoProvider } from "@/context/TodoContext"
import React, { ReactNode } from "react"

interface PageProviderProps {
    children: ReactNode
}
export const PageProvider = ({ children }: PageProviderProps) => {
    return (<>
        <TodoProvider>
                {children}
        </TodoProvider >
    </>
    )
}
"use client"
import { TodoProvider } from "@/context/TodoContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React, { ReactNode } from "react"

interface PageProviderProps {
    children: ReactNode
}
export const PageProvider = ({ children }: PageProviderProps) => {
    const [queryClient] = React.useState(() => new QueryClient())
    return (<>
        <TodoProvider>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </TodoProvider >

    </>
    )

}
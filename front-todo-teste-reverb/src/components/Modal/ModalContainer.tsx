
import { ReactNode } from "react";

interface ModalContainerProps {
    children: ReactNode
}

export const ModalContainer = ({ children }: ModalContainerProps) => (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">{children}</div>
);

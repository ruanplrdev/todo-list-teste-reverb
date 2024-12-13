

import { ReactNode } from "react";

// ModalBody: Corpo do modal
interface ModalBodyProps {
    children: ReactNode
}
export const ModalBody = ({ children }:ModalBodyProps) => <div className="text-gray-600 mb-6">{children}</div>;


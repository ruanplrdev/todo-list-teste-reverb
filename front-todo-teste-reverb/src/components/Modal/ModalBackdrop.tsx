"use client";
import { ReactNode } from "react";

interface ModalBackdropProps {
    onClick: () => void,
    children: ReactNode
}
export const ModalBackdrop = ({ onClick, children }: ModalBackdropProps) => (
    <>
        <div className="fixed top-48 flex w-full z-10  items-center justify-center">{children}</div>
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-0"
            onClick={onClick}
        >
        </div>
    </>

);  
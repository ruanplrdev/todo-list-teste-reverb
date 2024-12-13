"use client";

interface ModalFooterInterface{
    onCancel: ()=> void,
    onConfirm: ()=>void 
}

export const ModalFooter = ({ onCancel, onConfirm }: ModalFooterInterface) => (
    <div className="flex justify-end gap-4">
        <button
            className="h-10 px-4 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
            onClick={onCancel}
        >
            Cancelar
        </button>
        <button
            className="h-10 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            onClick={onConfirm}
        >
            Excluir
        </button>
    </div>
);
interface ModalHeaderProps {
    title: string
}
export const ModalHeader = ({ title }: ModalHeaderProps) => (
    <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
);

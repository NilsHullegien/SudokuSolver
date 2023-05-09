interface PrintBlockProps {
    children: React.ReactNode;
}
export default function PrintBlock({children}: PrintBlockProps) {
    return <div><pre>{children}</pre></div>
}
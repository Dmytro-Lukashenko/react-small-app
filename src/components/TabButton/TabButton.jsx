export default function TabButton({ children, onClick }) {
    function handleClick() {
        console.log('click')
    }

    return (
        <li>
            <button onClick={onClick}>{children}</button>
        </li>
    )
}
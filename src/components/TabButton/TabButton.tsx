export default function TabButton({children, onTabSelect}: any) {

    return (
    <li>
        <button onClick={onTabSelect}>
            {children}
        </button>
    </li>
    )
}
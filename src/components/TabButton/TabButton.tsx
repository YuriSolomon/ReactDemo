export default function TabButton({children, onTabSelect, isSelected}: any) {

    return (
    <li>
        <button className={isSelected ? 'active' : ''} onClick={onTabSelect}>
            {children}
        </button>
    </li>
    )
}
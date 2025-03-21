export default function TabButton({children, isSelected, ...props}: any) {

    return (
    <li>
        <button className={isSelected ? 'active' : ''} {...props}>
            {children}
        </button>
    </li>
    )
}
export default function TabButton({children}: any) {
    function handleClick() {
        console.log('test');
    }

    return (
    <li>
        <button onClick={handleClick}>
            {children}
        </button>
    </li>
    )
}
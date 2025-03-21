export default function Tabs({ children, buttons }: any) {
    return (
        <>
            <menu>
                {buttons}
            </menu>
            {children}
        </>
    )
}
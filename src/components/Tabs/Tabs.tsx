export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }: any) { //ButtonsContianer must be upper case
    // const ButtonContainer = buttonContainer;  //can be used instead if prop starts with lower case
    
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}
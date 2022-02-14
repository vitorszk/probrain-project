import { Button, FormControl} from "@mui/material"
import styled from "styled-components"

export const FormContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    `

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 34vw;
    box-sizing: border-box;
`

export const StyledFormControl = styled(FormControl)`
    width: 100%;
`

export const StyledButton = styled(Button)`
    width: 100%;
    align-self: center;   
    color: red; 
`
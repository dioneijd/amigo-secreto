import styled from 'styled-components'

const Input = styled.input`
   background-color: white;
   border: none;
   border-bottom: 1px solid black;  
   height: 30px;
`



export default function Component(props){
    return (
        <Input type="text" placeholder={props.placeholder} value={props.value} ></Input>
    )
}
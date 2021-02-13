import styled from 'styled-components'
import Person from '../Person'
import { useState, useEffect } from 'react'
import api from  '../../services/api.js'
import { List } from '@material-ui/core';



const Input = styled.input`
   background-color: white;
   border: none;
   border-bottom: 1px solid black;  
   height: 30px;
`



export default function Component(props){

    const { data, WhenDeletePerson } = props


    return (

        <List dense={true}>
            {
                data.map((person, i) => 
                    <Person data={person} index={i} WhenDeletePerson={WhenDeletePerson}></Person>
                )
            }
        </List>
    )
}
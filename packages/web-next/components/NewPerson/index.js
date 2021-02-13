import { useState } from 'react'

import { TextField, IconButton } from '@material-ui/core'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'



export default function Component(props){

    const [personName, setPersonName] = useState('')

    const { WhenAddPerson } = props


    function HandleAddParticipant(e){
        e.preventDefault()

        const person = {
            _id: '',
            name: personName.toString()
        }
        
        setPersonName('')
        WhenAddPerson(person)
    }



    return (

        <form onSubmit={HandleAddParticipant} >
            <TextField label="Digite o participante" onChange={(e)=>setPersonName(e.target.value)} value={personName}/>

            <IconButton type="submit" aria-label="search">
                <ArrowForwardIos />
            </IconButton>

        </form>

    )


}


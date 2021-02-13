import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
//import InputText from '../TextInput'

import { Delete, ArrowForwardIos } from '@material-ui/icons'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'


import {useState, useEffect} from 'react'

const Row = styled.div`
    display: flex;
    flex-direction: row;
`



export default function Component( props ){

    const { data, index } = props


    const [personName, setPersonName] = useState(data.name)



    return (
        <ListItem>
            <h5>{index + 1}</h5>
            {/* <ListItemText primary={seqNum} /> */}

            
            <ListItemIcon>
                <ArrowForwardIos />
            </ListItemIcon>
            <ListItemText primary={personName} />


            <Tooltip title="Delete">
                <IconButton aria-label="delete" onClick={props.WhenDeletePerson} >
                    <Delete />
                </IconButton>
            </Tooltip>

        </ListItem>
    )
}
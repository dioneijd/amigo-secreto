import styled from 'styled-components'

import PeopleList from '../components/PeopleList'
import NewPerson from '../components/NewPerson'


import { useState } from 'react'

const BackgroudBox = styled.div`
  background-color: white;
  min-height: 500px;
  min-width:700px;
  margin: auto;

  
`




export default function Home() {

  const [ people, setPeople] = useState([])


  function HandleAddPerson(person){
    const newPeopleArray = [...people, person]
    setPeople(newPeopleArray)
  }

  
  function HandleDeletePerson(e){

    console.log(e)

    const newPeopleArray = people.slice(e.target.index, 1)
    setPeople(newPeopleArray)
  }

  return (


    <BackgroudBox>
      <NewPerson WhenAddPerson={HandleAddPerson}/>

      <PeopleList data={people} WhenDeletePerson={HandleDeletePerson}></PeopleList>

    </BackgroudBox>
  )
}

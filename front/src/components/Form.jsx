import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../utils/constants";

function Form(){
  const [groupName, setGroupName] = useState("");
  const [peoples, setPeoples] = useState([]);
  const [people, setPeople] = useState("");
  const [personObj, setPersonObj] = useState({});
  const [personAfterCreate, setPersonAfterCreate] = useState({});

  const handleSetPeople = (event) => {
    event.preventDefault();
    setPeoples([...peoples, people]);
    setPeople("");
    const campo = document.querySelectorAll(".group-name-input")[1];
    campo.focus();
  };

  const transformData = () => {
    const personTransform = peoples.map(info => ({ "name" : info}));
    setPersonObj(personTransform);
  };

  const saveGroup = async (event) => {
    event.preventDefault();
    transformData();

    const data = {
      "name" : groupName,
      "people" : personObj
    };

    const ret = await axios.post(`${BASE_URL}/groups`, data);
    console.log(ret);
  };
 
  return (
    <form className="drawForm">
      <div>
        <label>Nome do grupo:</label>
        <input className="group-name-input" onChange={(event) => setGroupName(event.target.value)} />
      </div>
      <div>
        <div className="participants-form">
          <label>Adicione um participante</label>
          <input className="group-name-input" onChange={(event) => setPeople(event.target.value)} value={people} />
          <button type="submit" className="btnFormListAdd" onClick={handleSetPeople}>Adicionar</button>
        </div>
      </div>
      <div>
        <h1 className="list-title">Lista de participantes</h1>
        {peoples.map(people =>
        <div className="participants-list-align">
          <div className="participants-list-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5L9 4.5V3.5L0 3.5L0 4.5Z" fill="#666666"/>
            </svg>
          </div>
          <p className="participants-list-name">{people}</p>
        </div>
        )}
      </div>

      <div className="btnDrawFormAlign">
        <button type="submit" className="draw-btn" onClick={saveGroup}>Realizar Sorteio</button>
      </div>
    </form>
  )
}

export default Form;
import React, {useState} from "react";
import "../assets/css/App.css";
import Header from "../components/Header";
import Main from "../components/Main";

function HomePage(){
  
  document.title = "Sorteio de Amigo Secreto";

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default HomePage;
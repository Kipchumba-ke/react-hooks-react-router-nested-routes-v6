import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
function App() {
  const[users, setUsers]=useState([])
  useEffect(()=>{
    fetch()
    .then(res =>res.json())
    .then(data => setUsers(data))
    .catch(error =>console.error(error));
  }, [])
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <Outlet context={users}/>
    </>
  );
};

export default App;

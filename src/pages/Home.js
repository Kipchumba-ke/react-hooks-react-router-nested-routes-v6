import { Outlet, useOutletContext } from "react-router-dom";
//import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
//import NavBar from "../components/NavBar";

function Home() {
  const users = useOutletContext()
  
  const userList = users.map(user =>{
    return <UserCard key={user.id} user={user}/>;
  });

  return (
    <>
      <main>
        <h1>Home!</h1>
        <Outlet context={users}/>
        {userList}
      </main>
    </>
  );
};

export default Home;
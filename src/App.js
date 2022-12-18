import React, {useState} from "react";

import AddUser from "./components/Users/AddUser";

import UsersList from "./components/Users/UsersList";


function App() {
  const [usersList, setUsersList] = useState([]);


  // This code is if we want to create object in AddUser itself and pass it here in the App:

  // const addUserHandler = (userData) =>{
  //   setUsersList((prevUsersList) =>{
  //     // return [...prevUsersList, {name: uName, age:uAge}];
  //     return [userData,...prevUsersList];
  //   })
  // }




  // If we want to create object here only in the App.JS file then: 

  const addUserHandler = (uName, uAge) => {

      setUsersList((prevUsersList) =>{
        return [...prevUsersList, {id: Math.random().toString(), name:uName, age:uAge}];
      })
  };   


  return (

    <>
      <AddUser onAddUser={addUserHandler}></AddUser>
 
      <UsersList users={usersList}></UsersList>
    </>

  );
}

export default App;

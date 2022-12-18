import Card from "../UI/Card";

import styles from "./AddUser.module.css";

// import styled from "styled-components";

import Button from "../UI/Button";
import { useState, useRef } from "react";

import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";



function AddUser(props) {

  const nameInputRef = useRef();
  const ageInputRef = useRef();



  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");

  const [error, setError] = useState('');



  // const usernameChangeHandler = (e) => {
  //   // console.log(e.target.value)
  //   setEnteredUsername(e.target.value);
  // };

  // const ageChangeHandler = (e) => {
  //   // console.log(e.target.value)
  //   setEnteredAge(e.target.value);
  // };


  //to dismiss the error: 
  const errorHandler = () =>{
    setError(null)
  }


  const addUserHandler = (event) => {
    event.preventDefault();

    // console.log(nameInputRef.current.value);
    const enteredName = nameInputRef.current.value; 
    const enteredUserAge = ageInputRef.current.value

    //Validation for usename and age:
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      
      setError({
        title: 'Invalid Input', 
        message: 'Please Enter a valid Name and Age'
      })  

      return;
    }

    if (+enteredUserAge < 1) {

        setError({
            title: 'Invalid Input', 
            message: 'Please Enter a valid Age (Age > 1)'
        })  

      return;
    }

    // console.log(enteredUsername, enteredAge)

    // const data = {
    //  name: enteredUsername,
    //  age: enteredAge,
    // };
    // props.onAddUser(data);

    // console.log(data);

    props.onAddUser(enteredName, enteredUserAge);

    //Resetting the state:
    // setEnteredUsername("");
    // setEnteredAge("");

    //Resetting the state using ref: 
    nameInputRef.current.value = ""; 
    ageInputRef.current.value = "";
  };



  return (

    <Wrapper> 

      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}

      <Card className={styles.input}>


        <form onSubmit={addUserHandler}>
        
          <label htmlFor="username">Username</label>
          <input type="text" id="username" // value={enteredUsername} // onChange={usernameChangeHandler} 
          ref={nameInputRef}
          />

          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" // value={enteredAge} // onChange={ageChangeHandler} 
          ref={ageInputRef}
          />

          {/* <button type="submit">Add User</button> */}

          <Button type="submit">Add User</Button>

        </form>

      </Card>

    </Wrapper>
  );
}

export default AddUser;

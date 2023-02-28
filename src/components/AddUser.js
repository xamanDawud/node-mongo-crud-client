import React from "react";
import { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({ name: "Default", email: "de@gmail.com" });

  const handleAddUser = (event) => {
    event.preventDefault();
    // console.log(user);

    fetch("http://localhost:5000/users", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const blurInputHandler = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
    // console.log(value, field);
  };
  return (
    <div>
      <h3>Please add user</h3>
      <form onSubmit={handleAddUser}>
        <input
          onBlur={blurInputHandler}
          type="text"
          name="name"
          placeholder="Enter your name"
        />{" "}
        <br />
        <input
          type="email"
          onBlur={blurInputHandler}
          name="email"
          placeholder="Enter your email"
          id=""
        />
        <br />
        <input onClick={handleAddUser} type="button" value="Add" />
      </form>
    </div>
  );
};

export default AddUser;

import React, {useState} from 'react'
import styles from '../styles/Home.module.css'
import Axios from "axios";
import { useRouter } from "next/router";

function login() {
  const [states, setStates] = useState({
    email: "",
    password: "",
  });

  const location = useRouter();

  function handleOnChange(e) {
    const { name, value } = e.target;
    setStates({ ...states, [name]: value });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    // console.log("submitted Bhai");
    Axios.post("http://localhost:5000/login", {
      email: states.email,
      password: states.password,
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    location.push("/");
  }

  return (
    <div>
      <strong
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          marginLeft: "40px",
        }}
      >
        Login
      </strong>
      <form action="" className={styles.signupForm} onSubmit={handleOnSubmit}>
        Email:{" "}
        <input
          type="email"
          name="email"
          id="email"
          value={states.email}
          onChange={(e) => handleOnChange(e)}
        />
        Password:{" "}
        <input
          type="password"
          name="password"
          id="password"
          value={states.password}
          onChange={(e) => handleOnChange(e)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default login
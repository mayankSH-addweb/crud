import React,{useState} from 'react'
import Axios from 'axios'
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

function signup() {
  const [states, setStates] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const location = useRouter();
  //   console.log(location);

  function handleOnChange(e) {
    const { name, value } = e.target;
    setStates({ ...states, [name]: value });
  }

  //   var loginRedirect = <Link href="/login"></Link>;
  function handleOnSubmit(e) {
    e.preventDefault();
    Axios.post("http://localhost:5000/signup", {
      firstName: states.firstName,
      lastName: states.lastName,
      email: states.email,
      password: states.password,
    }).then((res) => console.log(res.data));
    location.push("/login");
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
        Sign Up Here
      </strong>
      <form className={styles.signupForm} onSubmit={handleOnSubmit}>
        First Name:{" "}
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={states.firstName}
          onChange={(e) => handleOnChange(e)}
        />
        Last Name:{" "}
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={states.lastName}
          onChange={(e) => handleOnChange(e)}
        />
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

export default signup
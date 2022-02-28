import React, {useState} from 'react'
import styles from '../styles/Home.module.css'

function login() {
  return (
    <div>
        <strong style={{display: "flex", justifyContent:"center", fontSize: "30px", marginLeft:"40px"}}>Login</strong>
        <form action="" className={styles.signupForm}>
            Email: <input type="email" name="email" id="email" />
            Password: <input type="password" name="password" id="password" />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default login
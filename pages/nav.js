import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function nav() {
  return (
    <div>
      <ul className={styles.navUl}>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/signup">
          <li>Sign Up</li>
        </Link>
        <Link href="/login">
          <li>Login </li>
        </Link>
        <Link href="/tvshows">
          <li>TV Shows </li>
        </Link>
      </ul>
    </div>
  );
}

export default nav
// import Head from 'next/head'
// import Image from 'next/image'\
import React, { useEffect, useState } from "react";
import Axios from "axios";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [name, setName] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:5000/data")
      .then((res) => setName(res.data.firstName))
      .catch((err) => console.log(err));
  });

  return (
    <div className={styles.main}>
      This Is Home Page {name !== "" && <p>{`Hello ${name}`}</p>}
    </div>
  );
}

import { debounce } from 'lodash';
import Head from 'next/head'
import { useRef, useState } from 'react';
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

// ##LODASH- Install Lodash by yarn add lodash
// A modern JavaScript utility library delivering modularity, performance & extras.


import Response from "./Response.json";
export default function Home() {
  // State for Input
  // const [input, setInput] = useState('');

  // ref for input
  const inputRef = useRef(null);

  // Crate a function to fetch API and is Called on input
  // to use DEBOUNCE we simply WRAP() the  EVENT inside DEBOUNCE(), it takes Dependency which is TIME in ms i. 1000 = 1Sec
  const fetchExpensiveAPI = debounce((event) => {
    const currentInput = event.target.value;
    // setInput(currentInput);

    // We can Optimize the input field more by ADDING a if Condition i.e if the input field is empty do nothing
    if(!currentInput) {
      return;
    }
    console.log(currentInput)
  }, 500);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Using LODASH, Create a input fieldwith a state and map the Value of input field onChange  */}
      {/* One-Way to use the Value onChange={ (event) => (event.target.value)} */}
      {/* Here we will use a function */}
      <input ref={inputRef} 
             onChange={fetchExpensiveAPI} 
             type="text" 
             placeholder="Search" />
      
    </div>
  )
}

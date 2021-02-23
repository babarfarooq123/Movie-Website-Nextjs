import Head from 'next/head'
import React,{useState} from 'react';
// import movieDetail from '../styles/movieDetail.module.css';
import MovieNav from "../components/movieNav";

export default function Home() {
  let [darkMode, setDarkMode] = useState(true);
  
  return (
    <div>
      <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={darkMode?'App rootmain':'App rootmain1'} >
            <MovieNav darkMode={darkMode}/>
      </div>
    </div>
  )
}

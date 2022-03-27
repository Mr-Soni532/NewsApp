
import React, { useState } from "react";
import LoadingBar from 'react-top-loading-bar'                // install - npm i react-top-loading-bar
import NavBar from "./component/NavBar";
import { Routes, Route } from "react-router-dom";
import CategoryPage from './component/Category_Page/CategoryPage'
import Home from "./component/Home";

export default function App() {

  const country = 'us';
  const APiKey =  "e3a9b4844d7946ceae70566be8231ddd";
  const [progress, setProgressVal] = useState(0)

  const setProgress = (val) => {
    setProgressVal(val)
  }
 
    return (
      <>
        <NavBar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
          <Routes>
              <Route path="/" element={<Home setProgress={setProgress} key="Home" country={country} apiKey={APiKey}/>}/>
              <Route path="/business" element={<CategoryPage setProgress={setProgress} key="Business" country={country} category="business" apiKey={APiKey}/>}/>
              <Route path="/entertainment" element={<CategoryPage setProgress={setProgress} key="Entertainment" country={country} category="entertainment" apiKey={APiKey}/>}/>
              <Route path="/general" element={<CategoryPage setProgress={setProgress} key="General" country={country} category="general" apiKey={APiKey}/>}/>
              <Route path="/health" element={<CategoryPage setProgress={setProgress} key="Health" country={country} category="health" apiKey={APiKey}/>}/>
              <Route path="/science" element={<CategoryPage setProgress={setProgress} key="Science" country={country} category="science" apiKey={APiKey}/>}/>
              <Route path="/sports" element={<CategoryPage setProgress={setProgress} key="Sports" country={country} category="sport" apiKey={APiKey}/>}/>
              <Route path="/technology" element={<CategoryPage setProgress={setProgress} key="Technology" country={country} category="technology" apiKey={APiKey}/>}/>
        </Routes>
      </>
    );
  }


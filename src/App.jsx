import React from "react";
import Home from "./Pages/home";
import { Route, Routes } from "react-router-dom";

function App() {







  return (


<main className=" overflow-x-hidden">

    <Routes>




      <Route path="/" element={<Home/>}/>
</Routes>


</main>



  );
};

export default App;

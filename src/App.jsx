import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import AppRouter from "./Router/AppRouter"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import feather from "feather-icons";
import { useEffect } from "react";




function App() {


 useEffect(() => {
    feather.replace(); // feather icons activate
  }, []);


  return (
    
    <>
    
    <Navbar/>
    <Sidebar/>
    <AppRouter/>
    </>

    
  )
}

export default App

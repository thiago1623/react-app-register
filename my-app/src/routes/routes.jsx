import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignIn from '../components/login/Login'
import NoteContainerView from '../views/noteContainerView'
import SidebarView from '../views/sidebarView';


const MainRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn/>} />
                <Route path="/note-conatiner" element={<NoteContainerView/>}/>
                <Route path="/sidebar" element={<SidebarView/>}/>
            </Routes>
        </Router>
    )
}

export default MainRoutes
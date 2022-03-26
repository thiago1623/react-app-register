import React, { useState } from "react";

import Sidebar from "../components/sidebar/Sidebar";

const SidebarView = (props) => {
    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem("notes-app")) || []
    );
    const addNote = (color) => {
        const tempNotes = [...notes];
        tempNotes.push({
          id: Date.now() + "" + Math.floor(Math.random() * 78),
          text: "",
          time: Date.now(),
          color,
        });
        setNotes(tempNotes);
      };
    return (
        <>
            <Sidebar addNote={addNote}/>
        </>
    );
}

export default SidebarView;
import React from "react";
import NotesList from "../components/NotesList";

export default function Dashboard({notes}){
    return (
        <div>
            <h1>List of Notes:</h1>
            <NotesList notes={notes}/>
        </div>
    )
}

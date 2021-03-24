import React from "react";

export default function NoteDetail({note}){
    return (
        <div>
            <h1>{note.title}</h1>
            <div>{note.body}</div>
        </div>
    )
}

import React from "react";
import {Link} from "react-router-dom";

export default function NotesList({notes}) {
    return (
        <div>
            {notes.map(note => {
               return (
                    <div>
                        <Link to={`/notes/${note._id}`}><h2>{note.title}</h2></Link>
                    </div>
                )
            })}
        </div>
    )
}

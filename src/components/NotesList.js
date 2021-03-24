import React from "react";

export default function NotesList({notes}) {
    return (
        <div>
            {notes.map(note => {
               return (
                    <div>
                        <h2>{note.title}</h2>
                    </div>
                )
            })}
        </div>
    )
}

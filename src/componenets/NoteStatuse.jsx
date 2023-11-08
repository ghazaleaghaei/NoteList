import React from "react";

function NoteStatuse({ notes }) {
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  const openNotes = allNotes - completedNotes;
  if (!allNotes) return  <h3>no notes has already been added.</h3>
 
  return (
    <div className="container mt-2 mb-0">
      <ul className="row justify-content-end">
        <li className="col ">
          All<span className="badge rounded-pill bg-info text-dark m-1">{allNotes}</span>
        </li>
        <li className="col">
          Completed
          <span className="badge rounded-pill bg-info text-dark m-1">{completedNotes}</span>
        </li>
        <li className="col">
          Open
          <span className="badge rounded-pill bg-info text-dark m-1">{openNotes}</span>
        </li>
      </ul>
    </div>
  );
}

export default NoteStatuse;

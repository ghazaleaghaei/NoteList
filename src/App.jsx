import'./app.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import AddNewNote from './componenets/AddNewNote';
import NoteList from './componenets/NoteList';
import { useState } from "react";
import NoteStatuse from './componenets/NoteStatuse';
import NoteHeader from './componenets/NoteHeader';


function App() {

  const[notes , setNotes] = useState([])
  const addNoteHandler = (newNote)=>{
    setNotes((prevNotes)=>[...prevNotes , newNote])
  }
  const deleteHandler = (id) => {
    const filteredNote = notes.filter( (n) => n.id != id );
    setNotes(filteredNote)
  }
  const completedHandler=(e)=>{
    const noteID=Number(e.target.value)
    const newNotes=notes.map((note)=>note.id==noteID?{...note,completed:!note.completed}:note);
    setNotes(newNotes)
  }
  const[sortBy,setSortBy]=useState("")
  return (
    <div className="container">
      <div className="justify-content-center">
    <nav className="navbar navbar-light bg-light text-center m-2 border-bottom  border-info">
      <div className="container-fluid">
        <NoteHeader notes={notes} sortBy={sortBy} onSort={(e)=>{setSortBy(e.target.value)}}/>
      </div>
    </nav>
    </div>
    <div className="row m-2 justify-content-center">
    <div className="col-md-4 text-center">
      <AddNewNote onAddNote={addNoteHandler}/>
    </div>
    <div className="col-md-7 text-center">
      <NoteStatuse notes={notes}/>
      <NoteList notes={notes} sortBy={sortBy} onDelete={deleteHandler} onCompleted={completedHandler}/>
    </div>
    
  </div>
    </div>
  )
}

export default App

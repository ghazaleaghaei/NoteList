import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";

function AddNewNote({ onAddNote }) {
  const [title, setTilte] = useState("");
  const [description, setDescription] = useState("");

  const titleChangeHandler = (e) => {
    setTilte(e.target.value);
  };
  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };
  const submitHandler = (e) => {
    if (title == "" || description == "") {
      return null;
    }
    e.preventDefault();
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createAt: new Date().toISOString(),
    };

    console.log(newNote);
    setTilte("");
    setDescription("");
    onAddNote(newNote);
  };
  return (
    <div>
      <h2>add new note</h2>
      <form onSubmit={submitHandler}>
        <div className="mb-3 card">
          <input
            value={title}
            onChange={titleChangeHandler}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Note Title"
          />
        </div>
        <div className="mb-3 card">
          <textarea
            value={description}
            onChange={descriptionChangeHandler}
            type="text"
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Note Description"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-outline-info w-100">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;

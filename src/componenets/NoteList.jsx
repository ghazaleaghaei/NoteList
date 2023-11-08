import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
function NoteList({ notes, onDelete, onCompleted,sortBy }) {
    let sortedNotes=notes
    if (sortBy=="earliest") {
        sortedNotes=[...notes].sort((a,b)=>new Date(a.createAt) - new Date(b.createAt))
    }
    if (sortBy=="latest") {
        sortedNotes=[...notes].sort((a,b)=>new Date(b.createAt) - new Date(a.createAt))
    }
    if (sortBy=="completed") {
        sortedNotes=[...notes].sort((a,b)=> Number(b.completed) - Number(a.completed))
    }
  return (
    <div>
      {sortedNotes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onCompleted={onCompleted}
        />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note, onDelete, onCompleted }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="card m-3 overflow-hidden">
      <div className="card-header row">
        <div className={`col-9 text-start ${note.completed ? "line" : ""} `}>
          <p>{note.title}</p>
          <p>{note.description}</p>
        </div>
        <div className="col-3 row justify-content-center align-items-center">
          <button className="col-5 m-2 btn" onClick={() => onDelete(note.id)}>
            <i className="bi bi-trash"></i>
          </button>
          <input
            className="form-check-input mt-0 p-2 col-6"
            onChange={onCompleted}
            type="checkbox"
            value={note.id}
            checked={note.onCompleted}
            aria-label="Checkbox for following text input"
          />
        </div>
      </div>
      <div className="card-body ">
        <footer className="blockquote-footer justify-content-center align-items-center">
          {new Date(note.createAt).toLocaleDateString("en-us", options)}
        </footer>
      </div>
    </div>
  );
}

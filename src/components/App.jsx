import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);

  function handleAdd(note) {
    setNoteList((prevList) => {
      return [...prevList, note];
    });
  }
  function deleteNotes(id) {
    setNoteList((prevNotes) => {
      return prevNotes.filter((ele, index) => id !== index);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd} />
      {noteList.map((props, index) => (
        <Note
          key={index}
          id={index}
          title={props.title}
          content={props.content}
          delete={deleteNotes}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

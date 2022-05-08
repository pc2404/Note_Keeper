import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [Expand, setExpand] = useState(false);

  function expandTab() {
    setExpand(true);
  }

  const [note, setNote] = useState({
    title: " ",
    content: " "
  });

  function handleInput(event) {
    const { name, value } = event.target; //destructured

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function addButton(event) {
    props.onAdd(note);

    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {Expand && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleInput}
            value={note.title}
          />
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          onClick={expandTab}
          rows={Expand ? "3" : "1"}
          onChange={handleInput}
          value={note.content}
        />
        <Zoom in={Expand ? true : false}>
          <Fab onClick={addButton}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

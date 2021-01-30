/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import UserContext from "./UserContext";

const EditContext = createContext();

export default EditContext;

export function EditProvider(props) {
  const { token } = useContext(UserContext);

  const [editing, setEditing] = useState(false);
  const [textEdit, setTextEdit] = useState("");
  const [postId, setPostId] = useState(0);
  const [modified, setModified] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function editClick() {
    editing ? setEditing(false) : setEditing(true);
  }

  function postEdit() {
    const req = axios.put(
      `https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${postId}`,
      { text: textEdit },
      token
    );
    req
      .then(() => {
        setModified(true);
        setEditing(false);
        setDisabled(false);
      })
      .catch(() => {
        setDisabled(false);
        alert("Não foi possível realizar as alterações desejadas.");
      });
  }

  return (
    <EditContext.Provider
      value={{
        postEdit,
        editClick,
        editing,
        setEditing,
        textEdit,
        setTextEdit,
        postId,
        setPostId,
        modified,
        setModified,
        disabled,
        setDisabled,
      }}
    >
      {props.children}
    </EditContext.Provider>
  );
}

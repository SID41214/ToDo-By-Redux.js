

import React, { useState } from "react";
import "./Reduxtodo.css";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, deletetodo, edittodo } from "./Store/Slice";

const Reduxtodo = () => {
  const dispatch = useDispatch();
  const [indata, setIndata] = useState("");
  const [edit, setEdit] = useState("");
  const [empty, setEmpty] = useState(null);

  // Access state from the store
  const { data } = useSelector((state) => state.data);

  const handleChange = (e) => {
    setEdit(e.target.value);
  };

  const handleSave = (id) => {
    dispatch(edittodo({ id, todo: edit }));
    setEmpty(null);
  };

  return (
    <div>
      <div className="header">
        <h1>To Do List</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center", background: "PaleTurquoise" }}>
        <div className="b-container">
          <div className="b-in">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Items to Add"
              onChange={(e) => setIndata(e.target.value)}
            />
            <button type="submit" onClick={() => dispatch(addtodo(indata))}>
              ADD
            </button>
          </div>
          <div className="list-container">
            <div className="list">
              <ul>
                {data.map((item) => (
                  <li key={item.id}>
                    {empty !== item.id ? (
                      <>
                        <span>{item.todo}</span>
                        <button onClick={() => setEmpty(item.id)}>Edit</button>
                      </>
                    ) : (
                      <>
                        <input onChange={handleChange} />
                        <button onClick={() => handleSave(item.id)}>Save</button>
                      </>
                    )}
                    <button onClick={() => dispatch(deletetodo(item.id))}>Delete</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reduxtodo;

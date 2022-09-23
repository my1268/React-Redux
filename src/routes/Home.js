import React, { useState } from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={onChange} type="text" />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <Todo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state }; // props로 가져옴
}

function mapDispatchToProps(dispatch) {
  return { addToDo: (text) => dispatch(actionCreators.addToDo(text)) }; //props로 가져오고 submit
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); //store에서 state로 가져와줌

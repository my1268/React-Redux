import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

function Todo({ text, deleteToDo, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={deleteToDo}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return { deleteToDo: () => dispatch(actionCreators.deleteToDo(ownProps.id)) };
}

export default connect(null, mapDispatchToProps)(Todo); // dispatch가 connect의 두번째라 null필요

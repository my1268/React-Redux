import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Detail({ toDos }) {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const myId = useParams().id;
  const toDosId = toDos.find((toDo) => toDo.id === parseInt(myId));
  return (
    <>
      Input Value: {toDosId?.text}, ID: {toDosId?.id}
      <form onSubmit={onSubmit}>
        <button onClick={() => navigate(-1)}>BACK</button>
      </form>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}
export default connect(mapStateToProps)(Detail);

import { useDispatch, useSelector } from "react-redux";

function App() {

  const like = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button
        type="button"
        class="btn btn-light"
        onClick={() => {
          dispatch({ type: "increase" });
          console.log(like)
        }}
      >좋아요
      </button>
    </div>
  );
}

export default App;

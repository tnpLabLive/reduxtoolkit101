import { useDispatch } from "react-redux";
import { descCount } from "./store/features/CountSlice";

function About() {
  const dispatch = useDispatch();
  return (
    <div>
      About
      <button onClick={() => dispatch(descCount(1))}>Redux Mult 1</button>
      <button
        onClick={() =>
          dispatch(
            descCount({
              value: 10,
              name: "Deepak",
            })
          )
        }
      >
        Redux Mult 10
      </button>
    </div>
  );
}

export default About;
import React, { useReducer, useState } from "react";
import "./styles.css";

import box from "./images/box.png";
import boxLid from "./images/box-lid.png";
import kuku from "./images/jump-character.png";
// import ConfettiGenerator from "./CanvasConfetti";
import Confetti from "./confetti/Confetti";
import "./abc.css";
const init_state = {
  move: "move",
  jump: "",
  rotated: "",
  rotating: "",
};
export default function GiftBoxAnimation() {
  const [state, setState] = useReducer(
    (state, new_state) => ({
      ...state,
      ...new_state,
    }),
    init_state
  );
  const [open, setOpen] = useState(true);
  const { move, rotating, rotated, jump } = state;

  function animate() {
    let isDone = rotated === "rotated" ? true : false;

    if (!isDone) {
      setState({ rotating: "rotating" });
      setTimeout(() => {
        setState({ jump: "jump" });
      }, 300);
      setTimeout(() => {
        setState({ rotated: "rotated" });
      }, 1000);
    } else {
      setState(init_state);
    }
    let moving = move === "move" ? "" : "move";
    setState({ move: moving });
    setTimeout(() => {
      setOpen(!open);
    }, 2000);
  }

  return (
    <div className="App">
      {open ? (
        <>
          <Confetti open={jump === "jump"} />
          <div className="img-container">
            <img className={`kuku ${jump}`} src={kuku} alt="kuku" />
            <button className="box" onClick={() => animate()}>
              <img src={box} alt="box" />
            </button>
            <img
              className={`lid ${move} ${rotating} ${rotated}`}
              src={boxLid}
              alt="box-lid"
            />
          </div>
        </>
      ) : (
        <>
          <div className="container" style={{ height: "900px" }}>
            <div className="balloon">
              <div>
                <span>H</span>
              </div>
              <div>
                <span>A</span>
              </div>
              <div>
                <span>P</span>
              </div>
              <div>
                <span>P</span>
              </div>
              <div>
                <span>Y</span>
              </div>
              <div>
                <span>B</span>
              </div>
              <div>
                <span>I</span>
              </div>
              <div>
                <span>R</span>
              </div>
              <div>
                <span>T</span>
              </div>
              <div>
                <span>H</span>
              </div>
              <div>
                <span>D</span>
              </div>
              <div>
                <span>A</span>
              </div>
              <div>
                <span>Y</span>
              </div>
            </div>
            <div className="avatar">
              <img
                src="https://cdn.glitch.global/c4b9924d-b979-4d5f-8fbd-92c3991dcecd/MyAvatar.png?v=1666011381563"
                alt=""
                className="avatar__img"
              />
              <h1 className="avatar__title">Thy Đình</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

"use client";
import React, { useRef, useState } from "react";

let data = ["", "", "", "", "", "", "", "", ""];

function Page() {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef<HTMLHeadingElement | null>(null);
  const toggle = (e: any, num: any) => {
    if (lock) {
      return 0;
    }
    if (count % 2 == 0) {
      e.target.innerHTML = "X";
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = "O";
      data[num] = "o";
      setCount(++count);
    }
    checkWin();
  };

  const checkWin = () => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        won(data[a]);
        break; // หยุดการวนลูปหากพบชนะ
      }
    }
  };

  const won = (data: string) => {
    setLock(true);
    if (titleRef.current !== null) {
      if (data === "x") {
        titleRef.current.innerHTML = `Congratulations X`;
      } else if (data === "o") {
        titleRef.current.innerHTML = `Congratulations O`;
      }
    }
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    if (titleRef.current !== null) {
      titleRef.current.innerHTML = "Tic Tac Toe Game";
    }
    // Reset display of X and O in grid
    const boxes = document.querySelectorAll(".de");
    boxes.forEach((box) => {
      box.innerHTML = "";
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <div className="my-10 text-4xl">
          <h1 ref={titleRef}>Tic Tac Toe Game</h1>
        </div>
        <div className="board2">
          <div>
            <div
              className="flex h-44 w-44 bg-cyan-600 border-4 border-solid border-gray-800
              rounded-xl cursor-pointer text-8xl items-center justify-center de"
              onClick={(e) => {
                toggle(e, 0);
              }}
            ></div>
            <div
              className="flex h-44 w-44 bg-cyan-600 border-4 border-solid border-gray-800
              rounded-xl cursor-pointer text-8xl items-center justify-center de"
              onClick={(e) => {
                toggle(e, 1);
              }}
            ></div>
            <div
              className="flex h-44 w-44 bg-cyan-600 border-4 border-solid border-gray-800
              rounded-xl cursor-pointer text-8xl items-center justify-center de"
              onClick={(e) => {
                toggle(e, 2);
              }}
            ></div>
          </div>
          <div>
            <div
              className="flex h-44 w-44 bg-cyan-600 border-4 border-solid border-gray-800
              rounded-xl cursor-pointer text-8xl items-center justify-center de"
              onClick={(e) => {
                toggle(e, 3);
              }}
            ></div>
            <div
              className="flex h-44 w-44 bg-cyan-600 border-4 border-solid border-gray-800
              rounded-xl cursor-pointer text-8xl items-center justify-center de"
              onClick={(e) => {
                toggle(e, 4);
              }}
            ></div>
            <div
              className="flex h-44 w-44 bg-cyan-600 border-4 border-solid border-gray-800
              rounded-xl cursor-pointer text-8xl items-center justify-center de"
              onClick={(e) => {
                toggle(e, 5);
              }}
            ></div>
          </div>
          <div>
            <div
              className="flex h-44 w-44 bg-cyan-600 border-4 border-solid border-gray-800
              rounded-xl cursor-pointer text-8xl items-center justify-center de"
              onClick={(e) => {
                toggle(e, 6);
              }}
            ></div>
            <div
              className="flex h-44 w-44 bg-cyan-600 border-4 border-solid border-gray-800
              rounded-xl cursor-pointer text-8xl items-center justify-center de"
              onClick={(e) => {
                toggle(e, 7);
              }}
            ></div>
            <div
              className="flex h-44 w-44 bg-cyan-600 border-4 border-solid border-gray-800
              rounded-xl cursor-pointer text-8xl items-center justify-center de"
              onClick={(e) => {
                toggle(e, 8);
              }}
            ></div>
          </div>
        </div>
        <div>
          <button
            className="bg-red-400 rounded py-2 px-3 mt-10 text-lg outline-none"
            onClick={() => {
              reset();
            }}
          >
            Click here
          </button>
        </div>
      </div>
    </>
  );
}

export default Page;

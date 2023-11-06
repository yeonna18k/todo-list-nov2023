import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [queryTitle, setQueryTitle] = useState(""); // input을 위한 value
  const [queryBody, setQueryBody] = useState("");
  const [count, setCount] = useState(0);

  const [toDo, setToDo] = useState([]);

  // console.log(toDo);

  function onSumbitHandler() {
    const query = {
      id: count,
      title: queryTitle,
      body: queryBody,
    };
    setCount(count + 1);
    const newToDo = [...toDo, query]; // 불변성
    setToDo(newToDo);

    // setToDo = toDo.map(function (e) {
    //   e.title = setQueryTitle;
    //   e.body = setQueryBody;
    // });
    // setToDo(...setQ ueryTitle, ...setQueryBody);
    // console.log(setToDo);
  }
  function onClickDelete(e) {
    console.log(toDo);
    console.log(e.target.parentElement.parentElement);
    // let deleteToDo = toDo.filter( (e) => (e.id !== 클릭한 div의 아이디));
  }

  return (
    <div className="App">
      <header className="header">
        <span>My Todo List</span>
        <span>React</span>
      </header>
      <div className="content-wrapper">
        <form>
          <div className="content">
            <span>제목</span>
            <input
              value={queryTitle}
              onChange={function (e) {
                setQueryTitle(e.target.value);
              }}
            />
            <span>내용</span>
            <input
              value={queryBody}
              onChange={function (e) {
                setQueryBody(e.target.value);
              }}
            />
          </div>
          <button type="button" onClick={onSumbitHandler}>
            추가하기
          </button>
        </form>
      </div>
      <div className="working">
        <p>Working🔥</p>
        <div>
          {toDo.map((e) => (
            <div id={e.count} className="working_todo">
              <h3>{e.title}</h3>
              <p>{e.body}</p>
              <div className="working_btn">
                <button
                  onClick={function () {
                    console.log(e.id);
                    let deleteToDo = toDo.filter(function (target) {
                      return target.id !== e.id;
                    });
                    console.log(deleteToDo);
                    setToDo(deleteToDo);
                  }}
                >
                  삭제하기
                </button>
                <button>완료</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="done">
        <p>Done🎉</p>
      </div>
    </div>
  );
}

export default App;

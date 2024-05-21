import React, { createRef, useRef, useState } from "react";
import useDebounce from "./hooks/useDebounce";
import { useDispatch, useSelector } from "react-redux";
import todo, { addTodo, deleteTodo } from "../../store/features/todo";
import { MdDeleteForever } from "react-icons/md";

const status = {
  TODO: "TODO",
  IN_PROGRESS: "INPROGRESS",
  REVIEW: "REVIEW",
  COMPLETED: "COMPLETED",
};

function Mc3() {
  const [value, setValue] = useState("");
  const [isDraging, setDraging] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const todosRef = useRef([]);

  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleSubmit() {
    dispatch(
      addTodo({
        name: value,
        status: status.TODO,
      })
    );
    setValue("");
  }

  function removeTodo(index) {
    dispatch(
      deleteTodo({
        id: index,
      })
    );
  }

  function handleMouseDown(e, index) {
    setDraging(true);

    const currTodosRef = todosRef.current[index].current;
    const rect = currTodosRef.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const handleMouseMove = (e) => {
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;

      let maxX = window.innerWidth - rect.width-25;
      let maxY= window.innerHeight - rect.height;

      maxX = Math.min(Math.max(newX,0),maxX);
      maxY = Math.min(Math.max(newY,0),maxY);

      currTodosRef.style.left = `${maxX}px`;
      currTodosRef.style.top = `${maxY}px`;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);

      const finalRect = currTodosRef.getBoundingClientRect();
      const newPosition = { x: finalRect.left, y: finalRect.top };

      // if (checkForOverlap(id)) {
      //   // check for overlap
      //   todosRef.style.left = `${startPos.x}px`;
      //   todosRef.style.top = `${startPos.y}px`;
      // } else {
      //   updateNotePosition(id, newPosition);
      // }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }

  function handleMove(e, index) {
    if (!isDraging) return;
    const x = e.clientX;
    const y = e.clientY;

    const targetElement = todosRef.current[index];
    console.log(
      targetElement.current.offsetLeft,
      "ss",
      x,
      targetElement.current.offsetWidth
    );
    targetElement.current.style.width = `${targetElement.current.offsetWidth}px`;
    targetElement.current.style.left = `${
      x - (x - targetElement.current.offsetLeft)
    }px`;
    //targetElement.current.style.top = `${y}px`
  }

  function handleMouseLeave() {
    setDraging(false);
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "1rem",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <input
          type="text"
          placeholder="Enter your schedule"
          style={{
            width: "400px",
            padding: "0.5rem 0.5rem",
            outline: "none",
            border: "1px solid #3F51B5",
          }}
          value={value}
          onChange={handleChange}
        />
        <button
          style={{
            width: "150px",
            padding: "0.5rem 0.5rem",
            outline: "none",
            border: "1px solid #eee",
            cursor: "pointer",
            borderRadius: "0.5rem",
          }}
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, auto))",
          gridTemplateRows: "repeat(4, minmax(400px, auto))",
          gap: "10px",
          padding: "0.5rem 0.5rem",
        }}
      >
        <div
          style={{ border: "1px solid #4CAF50", height: "100%", width: "100%" }}
        >
          <h5
            style={{
              textAlign: "center",
              background: "yellow",
              padding: "0.5rem 0.5rem",
            }}
          >
            TODO
          </h5>
          {todos.map((todo, index) => {
            if (todo.status === status.TODO) {
              return (
                <div
                  onMouseDown={(e) => handleMouseDown(e, index)}
                  // onMouseMove={(e) =>handleMove(e,index)}
                  // onMouseLeave={handleMouseLeave}
                  key={index}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderRadius: "0.5rem",
                      padding: "0.5rem 0.5rem",
                      margin: "0.5rem 0.5rem",
                      backgroundColor: "blanchedalmond",
                      cursor: "grab",
                      position: "absolute",
                      width: "400px",
                    }}
                    ref={
                      todosRef.current[index]
                        ? todosRef.current[index]
                        : (todosRef.current[index] = createRef())
                    }
                  >
                    <p>{todo.name}</p>
                    <MdDeleteForever
                      style={{ cursor: "pointer" }}
                      onClick={() => removeTodo(index)}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div
          style={{ border: "1px solid #4CAF50", height: "100%", width: "100%" }}
        >
          <h5
            style={{
              textAlign: "center",
              background: "orange",
              padding: "0.5rem 0.5rem",
            }}
          >
            InProgress
          </h5>
          {todos.map((todo, index) => {
            if (todo.status === status.IN_PROGRESS) {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderRadius: "0.5rem",
                    padding: "0.5rem 0.5rem",
                    margin: "0.5rem 0.5rem",
                    backgroundColor: "blanchedalmond",
                    cursor: "grab",
                  }}
                >
                  <p>{todo.name}</p>
                  <MdDeleteForever
                    style={{ cursor: "pointer" }}
                    onClick={() => removeTodo(index)}
                  />
                </div>
              );
            }
          })}
        </div>
        <div
          style={{ border: "1px solid #4CAF50", height: "100%", width: "100%" }}
        >
          <h5
            style={{
              textAlign: "center",
              background: "red",
              padding: "0.5rem 0.5rem",
            }}
          >
            Review
          </h5>
          {todos.map((todo, index) => {
            if (todo.status === status.REVIEW) {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderRadius: "0.5rem",
                    padding: "0.5rem 0.5rem",
                    margin: "0.5rem 0.5rem",
                    backgroundColor: "blanchedalmond",
                    cursor: "grab",
                  }}
                >
                  <p>{todo.name}</p>
                  <MdDeleteForever
                    style={{ cursor: "pointer" }}
                    onClick={() => removeTodo(index)}
                  />
                </div>
              );
            }
          })}
        </div>
        <div
          style={{ border: "1px solid #4CAF50", height: "100%", width: "100%" }}
        >
          <h5
            style={{
              textAlign: "center",
              background: "green",
              padding: "0.5rem 0.5rem",
            }}
          >
            Completed
          </h5>
          {todos.map((todo, index) => {
            if (todo.status === status.COMPLETED) {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderRadius: "0.5rem",
                    padding: "0.5rem 0.5rem",
                    margin: "0.5rem 0.5rem",
                    backgroundColor: "blanchedalmond",
                    cursor: "grab",
                  }}
                >
                  <p>{todo.name}</p>
                  <MdDeleteForever
                    style={{ cursor: "pointer" }}
                    onClick={() => removeTodo(index)}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Mc3;

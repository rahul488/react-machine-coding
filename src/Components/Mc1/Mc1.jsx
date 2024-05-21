import React, { useEffect, useState } from "react";

function Mc1() {
  const [cricles, setCircles] = useState([]);

  function createCricle(e) {
    if (e.target.classList.contains("circle")) return;
    setCircles((prev) => [
      ...prev,
      {
        background: "",
        clicked: false,
      },
    ]);
  }
  function updateCircle(index) {
    const updatedCircle = cricles.map((circle, ci) => {
      if (ci == index) {
        if (circle.clicked) {
          circle.background = "";
          circle.clicked = false;
        } else {
          circle.background = "black";
          circle.clicked = true;
        }
      }
      return circle;
    });
    setCircles(updatedCircle);
  }

  useEffect(() => {
    window.addEventListener("click", createCricle);

    return () => window.removeEventListener("click", createCricle);
  }, []);

  return (
    <div style={{ padding: "1rem 1rem" }}>
      <h2>
        Clicked circle count:{cricles.filter((circle) => circle.clicked).length}
      </h2>
      {cricles.map((circle, index) => (
        <div
          className="circle"
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            border: "1px solid red",
            background: `${circle.clicked ? circle.background : ""}`,
            marginBottom: "0.5rem",
          }}
          key={index}
          onClick={() => updateCircle(index)}
        ></div>
      ))}
    </div>
  );
}

export default Mc1;

import React, { useEffect, useState } from "react";

function Mc2() {
  const [circles, setCircles] = useState([]);
  const [isInterSected, setInterSected] = useState(false);
  const circleRadius = 25;

  function handleClick(e) {
    let x = e.clientX;
    let y = e.clientY;

    if (x < circleRadius) {
      x = x + (circleRadius - x);
    }
    if (y < circleRadius) {
      y = y + (circleRadius - y);
    }

    if (x + circleRadius >= window.innerWidth) {
      x = window.innerWidth - circleRadius;
    }

    if (y + circleRadius >= window.innerHeight) {
      y = window.innerHeight - circleRadius;
    }

    if (circles.length == 1) {
      checkInterSection(
        circles[0].left,
        circles[0].top,
        x - circleRadius,
        y - circleRadius
      );
    }

    if (circles.length < 2) {
      setCircles((prev) => [
        ...prev,
        {
          left: x - circleRadius,
          top: y - circleRadius,
        },
      ]);
    }
  }

  function checkInterSection(x1, y1, x2, y2) {
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    if (distance < circleRadius * 2) {
      setInterSected(true);
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [circles]);

  return (
    <div
      style={{
        padding: "1rem 1rem",
      }}
    >
      {isInterSected && <h4>Circles are intersecting each other</h4>}
      {circles.map((circle, index) => (
        <div
          style={{
            height: `${circleRadius * 2}px`,
            width: `${circleRadius * 2}px`,
            border: "1px solid red",
            borderRadius: "50%",
            position: "fixed",
            left: `${circle.left}px`,
            top: `${circle.top}px`,
          }}
          key={index}
        ></div>
      ))}
    </div>
  );
}

export default Mc2;

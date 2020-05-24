import React, { useState } from "react";

function SwitchButton() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn(!isOn);
  }

  return (
    <button
      style={{
        backgroundColor: isOn ? "red" : "green",
        color: "white",
        padding: "10px",
        borderRadius: "10px"
      }}
      onClick={handleClick}
    >
      TURN {isOn ? "OFF" : "ON"}
    </button>
  );
}

export default function() {
    return <SwitchButton />;
  }
  
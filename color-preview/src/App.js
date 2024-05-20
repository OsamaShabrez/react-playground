import { useState } from "react";

const App = () => {
  const handleColorChange = (e) => {
    const input = e.target.value;
    setColor(input);
  };

  const [color, setColor] = useState("");
  return (
    <div className="App">
      <canvas style={{ backgroundColor: color }}></canvas>
      <input
        type="text"
        placeholder="Enter a color name or hex code"
        value={color}
        onChange={(e) => handleColorChange(e)}
      />
    </div>
  );
};

export default App;

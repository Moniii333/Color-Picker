import { useState } from "react";
import classNames from "classnames";


const App = () => {
  const [selectedColor, setSelectedColor] = useState('')

  const Color = ({ color }) => {
    // using classnames to conditionally add class
    const colorClass = classNames(color, {
      selected: color === selectedColor,
    })
    
    return <div
      className={ colorClass }
      onClick={() => {
        setSelectedColor(color)
      }}></div>
      
  }

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={ selectedColor }>{ selectedColor }</div>
      </div>
      <div id="colors-list">
        <Color color='red' selectedColor={ setSelectedColor } />
        <Color color='violet' selectedColor={ setSelectedColor } />
        <Color color='blue' selectedColor={ setSelectedColor } />
        <Color color='green' selectedColor={ setSelectedColor } />
        <Color color='teal' selectedColor={ setSelectedColor } />
      </div>
    </div>
  );
};

export default App;

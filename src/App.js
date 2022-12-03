import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const generateArray = (len) => {
    setCompleted(false);
    setSorting(false);
    setSortedIndex([]);

    const randomArray = Array.from(Array(len + 1).keys()).slice(1);

    for (let i = randomArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i - 1));
      const temp = randomArray[i];

      randomArray[i] = randomArray[randomIndex];
      randomArray[randomIndex] = temp;
    }

    setBlocks(randomArray);

    // for (let i = 0; i < randomArray.length; i++) {
    //   console.log(randomArray[i]);
    // }
  };
  const [algo, setAlgo] = useState("bubbleSort");
  const [len, setLength] = useState(20);
  const [blocks, setBlocks] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [completed, setCompleted] = useState(true);
  const [speed, setSpeed] = useState(250);
  const [compare, setCompare] = useState([]);
  const [swap, setSwap] = useState([]);
  const [sortedIndex, setSortedIndex] = useState([]);

  useEffect(() => {
    generateArray(len);
  }, [len, algo]);

  const handleAlgo = (event) => {
    setAlgo(event.target.value);
  };

  const handleLength = (event) => {
    setLength(Number(event.target.value));
  };

  const handleSpeed = (event) => {
    setSpeed(Math.ceil(400 / Number(event.target.value)));
  };
  const handleSort = () => {};

  useEffect(() => {
    generateArray(len);
  }, [len, algo]);

  return (
    <div className="App">
      <Navbar
        generateRandomArray={() => generateArray(len)}
        handleLength={handleLength}
        handleSpeed={handleSpeed}
        handleAlgo={handleAlgo}
        handleSort={handleSort}
        sorting={sorting}
        completed={completed}
        len={len}
        speed={speed}
        algo={algo}
      />
    </div>
  );
};

export default App;

import { useState, useEffect } from "react";
import NameForm from "./NameForm";
import Board from "./Board";

const Game = () => {
  // console.log("rendering Game component");
  const clicksToWin = 10;
  const cpuTimeBetweenClick = 1000;

  const [humanName, setHumanName] = useState("");
  const [started, setStarted] = useState(false);

  const [humanClicks, setHumanClicks] = useState(0);
  const [cpuClicks, setCpuClicks] = useState(0);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    checkForWinner();
  }, [humanClicks, cpuClicks]);
  
  useEffect(() => {
    cpuClicked();
  }, [started, cpuClicks]);

  function humanClicked() {
    setHumanClicks(humanClicks + 1);
  }

  function cpuClicked() {    
    if (!started || winner || cpuClicks >= clicksToWin) return;

    setTimeout( () => {
      setCpuClicks(cpuClicks + 1);
    }, cpuTimeBetweenClick);
  }

  function checkForWinner() {
    if (humanClicks === clicksToWin) setWinner("human");
    if (cpuClicks === clicksToWin) setWinner("cpu");
  }

  function restartGame() {
    setStarted(false);
    setHumanClicks(0);
    setCpuClicks(0);
    setWinner(false);
    setStarted(true);
  }

  if (started) {
    return <Board
              clicksToWin={clicksToWin}
              winner={winner}
              humanName={humanName}
              humanClicked={humanClicked}
              humanClicks={humanClicks}
              cpuClicks={cpuClicks}
              restartGame={restartGame}
            />;
  } else {
    return <NameForm humanName={humanName} setHumanName={setHumanName} setStarted={setStarted} />    
  }
  // return <NameForm />
};

export default Game;

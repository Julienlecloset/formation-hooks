import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Game = () => {
  console.log("rendering Game component");
  const router = useRouter();
  const playerName = router.query.name;
  console.log("query name is: ", router.query.name);
  const clicksToWin = 2;

  const [playerClicks, setPlayerClicks] = useState(0);
  const [cpuClicks, setCpuClicks] = useState(0);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    checkForWinner();
  }, [playerClicks, cpuClicks]);

  function playerClick() {
    console.log("player click");
    setPlayerClicks(playerClicks + 1);
    // checkForWinner();
    console.log({ playerClicks });
  }

  function checkForWinner() {
    console.log("check for winner");
    if (playerClicks === clicksToWin) setWinner("player");
    if (cpuClicks === clicksToWin) setWinner("cpu");
  }

  return (
    <div>
      {winner ? <h1>Click to win!</h1> : <p>bla</p>}
      <button onClick={playerClick} disabled={winner}>
        Click here
      </button>
      <p>Goal: {clicksToWin}</p>
      <p>
        {playerName}: {playerClicks}
      </p>
      <p>CPU: {cpuClicks}</p>
    </div>
  );
};

export default Game;

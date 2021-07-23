import Score from "./Score";
import Button from "../Button";

const Playing = ({ clicksToWin, winner, humanName, humanClicked, humanClicks, cpuClicks, restartGame }) => {
//console.log("rendering Playing");

  return (
    <div className="board">
      {winner ? <h1>{winner === "human" ? humanName : "CPU"} won!</h1> : <h1>Click to win!</h1> }
      <Button onClick={humanClicked} disabled={winner} style={{ width: "100%", height: "48px", fontSize: "24px" }}>
        Click here
      </Button>
      <p>Goal: {clicksToWin}</p>
      <Score playerName={humanName} playerClicks={humanClicks} />
      <Score playerName="CPU" playerClicks={cpuClicks} />
      {winner && (
        <Button style={{ width: "100%", height: "48px", fontSize: "24px" }} onClick={restartGame}>Try again!</Button>
      )}
    </div>    
  )
}

export default Playing;
const Score = ({ playerName, playerClicks }) => {
  console.log("render Score for", playerName);
  
  return (
    <p>
      {playerName}: {playerClicks}
    </p>
  )
}

export default Score;

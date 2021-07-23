import Button from "../Button";

const StartForm = ({ humanName, setHumanName, setStarted }) => {
  // console.log("rendering StartForm");

  return (
    <div>
      <h1>Type your name</h1>
      <form onSubmit={() => setStarted(true)}>
        <input
          type="text"
          value={humanName}
          onChange={(e) => setHumanName(e.target.value)}
        />
        <Button>Start</Button>
      </form>
    </div>
  )
}

export default StartForm;
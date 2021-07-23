import Button from "../Button";

const NameForm = ({ humanName, setHumanName, setStarted }) => {
  // console.log("rendering NameForm");

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

export default NameForm;
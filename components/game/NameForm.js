import Button from "../Button";

const NameForm = ({ }) => {
  // console.log("rendering NameForm");

  return (
    <div>
      <h1>Type your name</h1>
      <form>
        <input
          type="text"
        />
        <Button>Start</Button>
      </form>
    </div>
  )
}

export default NameForm;
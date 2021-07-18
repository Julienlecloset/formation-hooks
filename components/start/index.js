import { useState } from "react";
import { useRouter } from "next/router";

const Start = () => {
  console.log("rendering Start component");
  const router = useRouter();
  const [name, setName] = useState("");

  function goToGame(e) {
    e.preventDefault();

    router.push(`/game?name=${name}`);
  }

  return (
    <div>
      <h1>Type your name</h1>
      <form onSubmit={goToGame}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Start</button>
      </form>
    </div>
  );
};

export default Start;

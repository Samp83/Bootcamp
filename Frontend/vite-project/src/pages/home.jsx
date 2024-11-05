import usecreateGame from "../hooks/usecreategame";
export default function Home() {
    const {createGame} = usecreateGame();
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => createGame()}>Create Game</button>
    </>
  );
}
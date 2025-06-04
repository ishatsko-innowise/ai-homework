import { Link } from "react-router";

function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-screen h-screen text-3xl">
      <Link to="/task1">Task 1</Link>
      <Link to="/task2">Task 2</Link>
      <Link to="/task3">Task 3</Link>
    </div>
  );
}

export default App;

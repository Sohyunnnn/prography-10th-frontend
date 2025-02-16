import { Outlet } from "react-router";

function App() {
  return (
    <div className="flex flex-col">
      <Outlet />
    </div>
  );
}

export default App;

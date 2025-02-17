import Header from "@components/Header";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="flex h-full flex-col bg-black text-white">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

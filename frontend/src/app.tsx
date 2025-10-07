import { Home } from "./components/home";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <div className="grid grid-cols-[minmax(250px,_1fr)_3fr] h-screen">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;

import "./App.css";
import { Dashboard, Sidebar } from "./components/__organism";

function App() {
  return (
    <main className="w-full min-h-screen flex flex-col lg:flex-row lg:items-stretch">
      <Sidebar />
      <Dashboard />
    </main>
  );
}

export default App;

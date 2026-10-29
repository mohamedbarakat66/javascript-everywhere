
import Footer from "./components/Footer";
import TaskStats from "./components/TaskStats";

function App() {
  return (
    <div className="app-container">
      <h1>TaskFlow</h1>

      <main>
        <TaskStats />
      </main>

      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import TodosView from './components/TodosView';
import CounterPage from './pages/CounterPage';

function App() {
  return (
    <div className="App">
      <CounterPage />
      <TodosView />
    </div>
  );
}

export default App;

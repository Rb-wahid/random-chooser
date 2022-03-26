import "./App.css";
import Header from "./components/Header/Header";
import QnA from "./components/QnA/QnA";
import UI from "./components/UI/UI";

function App() {
  return (
    <div className="App">
      <Header/>
      <UI />
      <QnA/>
    </div>
  );
}

export default App;

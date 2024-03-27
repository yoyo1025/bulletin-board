import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Top } from './components/Top';
import { CreateNewThread } from "./components/CreateNewThread";

function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <Routes>
          <Route path="/" element={<Top />}></Route>
          <Route path="/thread/new" element={<CreateNewThread />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

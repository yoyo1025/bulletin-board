import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Top } from './components/Top';
import { CreateNewThread } from "./components/CreateNewThread";
import { useState } from "react";
import { Thread } from "./components/Thread";

function App() {
  const [threadList, setThreadList] = useState([{id: "", title: ""}]);
  const [newThreadTitle, setNewThreadTitle] = useState("");
  return (
    <BrowserRouter>
      <div className="App"> 
        <Routes>
          <Route path="/" element={<Top threadList={threadList} setThreadList={setThreadList}/>}></Route>
          <Route path="/thread/new" element={<CreateNewThread newThreadTitle={newThreadTitle} setNewThreadTitle={setNewThreadTitle} />}></Route>
          {threadList.map((thread) => {
            return (
              <Route key={thread.id} path={`/thread/${thread.id}`} element={<Thread threadTitle={thread.title}/>}></Route>
            )
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

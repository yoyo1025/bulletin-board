import { Header } from "./Header"
import axios from "axios";
import { useState, useEffect } from "react";

export const Thread = ({ threadTitle, threadId }) => {
  // スレッドの投稿内容を格納するためのステート
  const [contents, setContents] = useState([]);
  // 新しい投稿のテキストを管理するためのステート
  const [newPostText, setNewPostText] = useState("");

  useEffect(() => {
    axios.get(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`)
        .then(res => {
          console.log(res.data);
          setContents(res.data.posts); 
        });
  }, []);

  const sendNewContent = (event) => {
    event.preventDefault();
    axios.post(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`, { post: newPostText })
      .then(response => {
        console.log(response.data);
        setContents([...contents, response.data]);
        setNewPostText("");
      })
      .catch(error => console.error(error));
  }

  return (
    <>
      <Header />
      <h2>{threadTitle}</h2> 
      <hr/>
      {contents.map((content, index) => (
        <ul key={index}>
          <li>{content.post}</li>
        </ul>
      ))}
      <hr/>
      <form className="create-new-content" onSubmit={sendNewContent}>
        <div className="thread-input-container">
          <input 
            value={newPostText} 
            type="text" 
            placeholder="投稿内容" 
            onChange={e => setNewPostText(e.target.value)}
          />
          <button type="submit">投稿</button>
        </div>
      </form>
      <a href="/">Topに戻る</a>
    </>
  );
};

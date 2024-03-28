import { Header } from "./Header";
import { useState, useEffect } from "react";
import axios from 'axios';
import "../App.css";

export const CreateNewThread = ({newThreadTitle, setNewThreadTitle}) => {

    const sendNewThread = (event) => {
        event.preventDefault(); 
        axios.post('https://railway.bulletinboard.techtrain.dev/threads', { title: newThreadTitle })
        .then(response => console.log(response.data))
        .then(setNewThreadTitle(newThreadTitle === ""))
        .catch(error => console.error(error));
    }
    
    return (
        <>
            <Header />
            <h2>スレッドの新規作成</h2>
            <form className="create-new-thread" onSubmit={sendNewThread}>
                <div className="thread-input-container">
                    <input 
                        value={newThreadTitle} 
                        type="text" 
                        placeholder="スレッドタイトル" 
                        onChange={e => setNewThreadTitle(e.target.value)}
                    />
                    <button type="submit">作成</button>
                </div>
                <a href="/">Topに戻る</a>
            </form>
        </>
    );
}

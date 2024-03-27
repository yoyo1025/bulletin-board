import { useState, useEffect } from "react";
import "../App.css";
import axios from 'axios';
import { Header } from "./Header";

export const Top = () => {
    const [threadList, setThreadList] = useState([{id: "", title: ""}]);

    useEffect(() => {
        axios.get('https://railway.bulletinboard.techtrain.dev/threads')
            .then(res => {
                setThreadList(res.data);
            })
    }, []);

    return (
        <>
            <Header />
            <h2>新着スレッド</h2>
            {threadList.map((thread) => (
                <ul key={thread.id}>
                    <li>{thread.title}</li>
                </ul>
            ))}
        </>
    );
}

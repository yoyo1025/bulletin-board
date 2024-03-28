import { useState, useEffect } from "react";
import "../App.css";
import axios from 'axios';
import { Header } from "./Header";

export const Top = ({threadList, setThreadList}) => {
    
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
                    <li><a href={`/thread/${thread.id}`} >{thread.title}</a></li>
                </ul>
            ))}
        </>
    );
}

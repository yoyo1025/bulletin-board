import { useState, useEffect } from "react";
import axios from 'axios';

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
            <h2>新着スレッド</h2>
            {threadList.map((thread) => (
                <ul key={thread.id}>
                    <li>{thread.title}</li>
                </ul>
            ))}
        </>
    );
}

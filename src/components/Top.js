import { Link } from "react-router-dom"; 
import { Header } from "./Header";
import { useEffect } from "react";
import  axios  from "axios";

export const Top = ({ threadList, setThreadList }) => {
    useEffect(() => {
        axios.get('https://railway.bulletinboard.techtrain.dev/threads')
            .then(res => {
                setThreadList(res.data);
            });
    }, []);

    return (
        <>
            <Header />
            <h2>新着スレッド</h2>
            {threadList.map((thread) => (
                <ul key={thread.id}>
                    <li><Link to={`/thread/${thread.id}`}>{thread.title}</Link></li>
                </ul>
            ))}
        </>
    );
};

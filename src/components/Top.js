import { useState, useEffect } from "react";

export const Top = () => {

    // const [threadList, setThreadList] = useState([{id: "", title: ""}]) ;

    // useEffect(
    //     () => {
    //         fetch("railway.bulletinboard.techtrain.dev/threads")
    //             .then(res => res.json())
    //             .then(
    //                 (result) => {
    //                     setThreadList(Object.keys(result.id));
    //                     setThreadList(Object.values(result.title));
    //                 }
    //             )
    //     },[]);

    const threadList = [{
        id: 1, title: "推しについて語るスレ"
    },{
        id: 2, title: "今期覇権アニメ"
    },{
        id: 3, title: "TechTrainってどうなの？"
    },{
        id: 4, title: "暇な人雑談しませんか"
    },{
        id: 5, title: "Rustについて語るスレ"
    },{
        id: 6, title: "自宅警備員だけどなんか質問ある"
    },{
        id: 7, title: "大阪でおすすめのラーメン屋教えて"
    }]

    return (
        <>
            <h2>新着スレッド</h2>
            {threadList.map((thread) => {
            return (
                <ul>
                    <li key={thread.id}>{thread.title}</li>
                </ul>
            )
            })}
        </>
    )
}
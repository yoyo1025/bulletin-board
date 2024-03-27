import { Header } from "./Header";
import "../App.css";

export const CreateNewThread = () => {
    return (
        <>
            <Header />
            <h2>スレッドの新規作成</h2>
            <form className="create-new-thread">
                <div className="thread-input-container">
                    <input type="text" placeholder="スレッドタイトル" />
                    <button type="submit">作成</button>
                </div>
                <a href="/">Topに戻る</a>
            </form>
        </>
    )
}
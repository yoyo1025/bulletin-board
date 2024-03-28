import { Header } from "./Header"

export const Thread = ({ threadTitle }) => {
  return (
    <>
      <Header />
      <h2>{threadTitle}</h2> 
      <hr/>
    </>
  );
};

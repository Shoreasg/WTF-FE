import Header from "./components/header";
import Ticker from "./components/ticker";

export default function Home() {
  return (
    <>
      <Header />
      <Ticker />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

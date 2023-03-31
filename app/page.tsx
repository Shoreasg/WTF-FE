import Header from "./components/header";
import Ticker from "./components/ticker";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-[783px] 2xl:h-[647.31px] w-screen bg-gradient-to-b from-[#85D0D0] via-[#A4D2D1_60%] to-[#4DBBBA]">
      <Ticker />
      </div>
    </>
  );
}

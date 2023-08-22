import { Suspense } from "react";
import Header from "./components/Header";
import News from "./news/page";
import Loading from "./loading";
// import PlayGround from "./components/PlayGround";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        {/* <PlayGround /> */}
        <Header />
        <News />
      </Suspense>
    </main>
  )
}

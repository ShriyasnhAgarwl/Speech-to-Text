import { Suspense } from "react";
import "./App.css";
import { SpeechToText } from "./pages";
function App() {
  return (
    <div className="font-['poppins']">
      <Page page={<SpeechToText />} />
    </div>
  );
}
function Page(props) {
  return (
    <Suspense
      fallback={
        <div role="status" className="text-center">
          <div className="right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2">
            <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-28 w-28"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      }
    >
      {props.page}
    </Suspense>
  );
}
export default App;

import { useRef } from "react";
import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import SoundSection from "./components/SoundSection";
import Webgiviewer from "./components/Webgiviewer";
import Loader from "./components/Loader";

function App() {

  const webgiViewerRef = useRef();
  const contentRef = useRef()

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  }

  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id="content" className="">
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <Webgiviewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;

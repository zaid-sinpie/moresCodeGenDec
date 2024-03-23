import "./App.css";
import Section from "./components/Section.jsx";
import Content from "./components/Content.jsx";

import { useRef, useState } from "react";

function App() {
  const [currGenerateText, setCurrGenerateText] = useState('')
  const [currDecodeText, setCurrDecodeText] = useState('')
  const generateMorse = useRef();
  const decodeMorse = useRef();

  function handleGenerate(){
    setCurrGenerateText(generateMorse.current.value);
  }

  function handleDecode(){
    setCurrDecodeText(decodeMorse.current.value);
  }

  return (
    <>
    <h1 className="text-center font-bold text-4xl uppercase mt-4 text-stone-100">Code Decode Morse</h1>
      <Section>
        <Content generateValue={currGenerateText} onSelect={handleGenerate} ref={generateMorse} title={'Generate Morse Code'} btnTitle={'Generate'}/>
        <Content generateValue={currDecodeText} onSelect={handleDecode} ref={decodeMorse} title={'Decode Morse Code'} btnTitle={'Decode'}/>
      </Section>
    </>
  );
}

export default App;

import "./App.css";
import Section from "./components/Section.jsx";
import Content from "./components/Content.jsx";

function App() {
  return (
    <>
    <h1 className="text-center font-bold text-4xl uppercase mt-4 text-stone-100">Code Decode Morse</h1>
      <Section>
        <Content title={'Generate Morse Code'} btnTitle={'Generate'}/>
        <Content title={'Decode Morse Code'} btnTitle={'Decode'}/>
      </Section>
    </>
  );
}

export default App;

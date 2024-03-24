import { forwardRef, useState, useEffect } from "react";
import morseCode from "../data.js";

const Content = forwardRef(function Content(
  { title, btnTitle, onSelect, generateValue, id },
  ref
) {
  const [currContentValue, setCurrContentValue] = useState("");
  const [currDecodeValue, setDecodeValue] = useState('');

  useEffect(() => {
    // Function to encode text to Morse code
    function encodeToMorse(text) {
      return text
        .toUpperCase()
        .split("")
        .map((char) => morseCode[char] || " ")
        .join(" ");
    }

    // Function to decode Morse code to text
    function decodeFromMorse(code) {
      return code
        .split(" ")
        .map((char) => reverseMorseCode[char] || " ")
        .join("");
    }

    // Reverse the Morse code dictionary to get a decoding dictionary
    const reverseMorseCode = {};
    for (let char in morseCode) {
      reverseMorseCode[morseCode[char]] = char;
    }

    // Perform decoding or encoding based on input
    if (id === "encode") {
      setCurrContentValue(encodeToMorse(generateValue));
    }
    if (id === "decode") {
      setDecodeValue(decodeFromMorse(generateValue));
    }
  }, [generateValue]);

  //Function to copy output to clipboard
  let textToCopy;

  function copyTextToClipboard() {
    if(id === 'encode'){
      textToCopy = currContentValue;
    }else{
      textToCopy = currDecodeValue;
    }

    navigator.clipboard
      .writeText(textToCopy)
      .catch((err) => alert("Could not copy text: ", err));
  }

  return (
    <div className="flex flex-col items-center gap-3 m-[3rem] py-[4rem] h-auto border-sky-400 border-2 rounded-md justify-around w-full bg-slate-600">
      <h1 className="text-2xl uppercase text-stone-200 text-center font-bold bg-slate-500 px-2 py-2 rounded-md">
        {title}
      </h1>
      <div className="flex flex-col gap-2 items-start justify-around">
        <textarea
          ref={ref}
          placeholder="Enter text here."
          className="rounded-md outline-none p-5 font-bold text-slate-500 resize-none"
          id=""
          cols="30"
          rows="5"
        ></textarea>
        <h2>
          <strong className="uppercase font-bold text-sky-950">output</strong>
        </h2>
        <textarea
          className="rounded-md outline-none p-5 font-bold text-slate-500 resize-none"
          cols="30"
          rows="2"
          id="output"
          type="text"
          value={id === 'encode'? currContentValue : currDecodeValue}
        />
      </div>
      <div className="flex gap-2">
        <button
          onClick={onSelect}
          className="text-sky-800 p-2 bg-slate-800 uppercase rounded-md font-bold w-[10rem] hover:text-stone-100 hover:bg-slate-900 transition-all"
        >
          {btnTitle}
        </button>
        <button
          onClick={copyTextToClipboard}
          className="text-sky-800 p-2 bg-slate-800 uppercase rounded-md font-bold w-[10rem] hover:text-stone-100 hover:bg-slate-900 transition-all"
        >
          COPY
        </button>
      </div>
    </div>
  );
});

export default Content;

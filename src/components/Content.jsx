import { forwardRef, useState, useEffect } from "react";
import morseCode from "../data.js";

const morseToAlphabet = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  // Add more mappings as needed
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  ".----.": "'",
  "-.-.--": "!",
  "-..-.": "/",
  "-.--.": "(",
  "-.--.-": ")",
  ".-...": "&",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  ".-.-.": "+",
  "-....-": "-",
  "..--.-": "_",
  ".-..-.": '"',
  "...-..-": "$",
  ".--.-.": "@",
  "": " ", // space
};

const Content = forwardRef(function Content(
  { title, btnTitle, onSelect, generateValue },
  ref
) {
  const [currContentValue, setCurrContentValue] = useState('');
  const [outputText, setOutputText] = useState('');

  useEffect(() => {
    // Function to check if a string is Morse code
    function isMorseCode(str) {
      const regex = /^[.-\/\s]*$/;
      return regex.test(str);
    }

    // Function to decode Morse code into text
    function decodeMorseCode(morse) {
      const morseCharacters = morse.trim().split(" ");
      const text = morseCharacters
        .map((morseChar) => morseToAlphabet[morseChar] || "")
        .join("");
      return text;
    }
    

    // Function to encode text into Morse code
    function textToMorse(text) {
      return text
        ? text.toUpperCase().split("").map((char) => morseCode[char] || "").join(" ")
        : '';
    }

    // Perform decoding or encoding based on input
    if (isMorseCode(generateValue)) {
      setOutputText(decodeMorseCode(generateValue));
    } else {
      setCurrContentValue(textToMorse(generateValue));
    }
  }, [generateValue]);

  return (
    <div className="flex flex-col items-center gap-3 mb-[3rem] border-sky-400 border-2 rounded-md h-[calc(60%)] justify-around w-full bg-slate-600">
      <h1 className="text-2xl uppercase text-stone-200 text-center font-bold bg-slate-500 px-2 py-2 rounded-md">
        {title}
      </h1>
      <div className="flex gap-4 items-start justify-around">
        <textarea
          ref={ref}
          placeholder="Enter text here."
          className="rounded-md outline-none p-5 font-bold text-slate-500 resize-none"
          id=""
          cols="30"
          rows="5"
        ></textarea>
        <p
          id="output"
          className="font-bold text-xl text-stone-200 bg-slate-500 px-1 py-1 rounded-md"
        >
          {currContentValue ? currContentValue : outputText}
        </p>
      </div>
      <button
        onClick={onSelect}
        className="text-sky-800 p-2 bg-slate-800 uppercase rounded-md font-bold w-[10rem] hover:text-stone-100 hover:bg-slate-900 transition-all"
      >
        {btnTitle}
      </button>
    </div>
  );
});

export default Content;

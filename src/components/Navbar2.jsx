import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { useState } from "react";

export default function Navbar2() {
  const state = useSelector((state) => state.handleCart);

  const [textToCopy, setTextToCopy] = useState();

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="mike-content" >
        {transcript}
      </div>
      <button className="btn-mike" onClick={startListening}>
        
      </button>
    </>
  );
}

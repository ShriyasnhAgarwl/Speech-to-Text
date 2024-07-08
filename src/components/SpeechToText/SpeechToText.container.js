import React, { useState } from "react";
import axios from "axios";
import SpeechToTextView from "./SpeechToText.view";

const SpeechToTextContainer = () => {
  const [transcription, setTranscription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("audio", file);

    setIsLoading(true);
    setError("");
    setTranscription("");

    try {
      const response = await axios.post(
        "http://localhost:5000/speech-to-text",
        formData
      );
      console.log(response);
      setTranscription(response.data.transcription);
    } catch (err) {
      setError("Error processing audio file");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(transcription);
  };

  return (
    <SpeechToTextView
      onDrop={handleDrop}
      transcription={transcription}
      isLoading={isLoading}
      error={setError}
      onCopy={handleCopy}
    />
  );
};

export default SpeechToTextContainer;

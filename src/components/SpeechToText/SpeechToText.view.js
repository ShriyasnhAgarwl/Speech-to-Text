import React from "react";
import { useDropzone } from "react-dropzone";

const SpeechToTextView = ({
  onDrop,
  transcription,
  isLoading,
  error,
  onCopy,
}) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "audio/*",
  });

  return (
    <div className="flex flex-col justify-center h-screen bg-red-100 w-full">
      <div className="max-w-lg mx-auto">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed p-6 rounded-lg text-center ${
            isDragActive ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop an audio file here, or click to select one</p>
          )}
        </div>
        <div className="mt-4">
          <textarea
            value={transcription}
            readOnly
            className="w-full p-4 border rounded-lg h-40"
            placeholder="Transcription will appear here..."
            disabled={isLoading}
          />
          {isLoading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {transcription && (
            <button
              onClick={onCopy}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Copy to Clipboard
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeechToTextView;

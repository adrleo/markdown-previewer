import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("markdown");

  return (
    <div className="markdown-container">
      <textarea id="editor" value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
      <ReactMarkdown children={markdown} id="preview" className="markdown-preview"></ReactMarkdown>
    </div>
  );
}

export default App;

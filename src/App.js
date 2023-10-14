import "./App.css";
import React, { useEffect, useState } from "react";
import { marked } from "marked";

const App = () => {
  const [code, setCode] = useState(
    localStorage.getItem("code") ? localStorage.getItem("code") : ""
  );
  const [compiled, setCompiled] = useState(
    localStorage.getItem("compiled") ? localStorage.getItem("compiled") : ""
  );
  const [docs, setDocs] = useState("");
  const [hide, hidePreview] = useState(true);
  const [hideD, hideDocs] = useState(true);

  useEffect(() => {
    // Fetching the data is here
  }, []);

  const openMD = () => {
    console.log(0);
    hidePreview(true);
    hideDocs(true);
  };

  const openPreview = () => {
    console.log(0);
    hidePreview(false);
    hideDocs(true);
  };

  const openDocs = () => {
    hidePreview(true);
    hideDocs(false);
  };

  const handleChange = (e) => {
    localStorage.setItem("code", e.target.value);
    localStorage.setItem("compiled", marked.parse(e.target.value));
    setCode(e.target.value);
    setCompiled(marked.parse(e.target.value));
  };

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className="btn">
            MarkDown
          </button>
          <button onClick={openPreview}>Preview</button>
          <button onClick={openDocs}>Docs</button>
        </div>
        {hide && hideD ? (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        ) : !hide && hideD ? (
          <div>
            <textarea value={compiled} />
          </div>
        ) : (
          <div>
            <textarea value={docs} />
          </div>
        )}
      </div>
    </>
  );
};

export default App;

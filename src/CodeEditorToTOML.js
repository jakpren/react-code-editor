import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';


const CodeEditorToTOML = () => {
  const [code, setCode] = useState(`[owner]
name = "Tom Preston-Werner"
dob = 1979-05-27T07:32:00Z`);

  // Function to download the content as a .toml file
  const handleDownloadTOML = () => {
    const blob = new Blob([code], { type: 'text/toml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content.toml';  // Set the filename for the download
    a.click();
    URL.revokeObjectURL(url);  // Clean up the URL object
  };

  return (
    <div style={{ margin:'1rem', padding:'1rem', overflow: 'auto' }}>
    <h4>Code Editor</h4>
      <MonacoEditor
        height="500px"
        language="toml"  // Set the language to TOML for syntax highlighting
        theme="vs-dark" 
        value={code}
        onChange={(newValue) => setCode(newValue)}  // Update the code state on change
      />
      <button onClick={handleDownloadTOML} style={{ marginTop: '10px', background: 'blueviolet', color: 'white', padding: '10px',borderColor: 'blueviolet', cursor: 'pointer', float: 'right'}}>
        Download as TOML
      </button>
    </div>
  );
};

export default CodeEditorToTOML;

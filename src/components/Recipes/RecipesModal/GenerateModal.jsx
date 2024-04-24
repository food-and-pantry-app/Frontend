// GptModal.jsx
import React, { useState } from 'react';

const GptModal = ({ onClose, onGenerate }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(prompt);
    onClose(); // Close modal after submission
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h2>Generate Recipe</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="gptPrompt">Recipe Prompt:</label>
          <input
            id="gptPrompt"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />
          <button type="submit">Generate</button>
        </form>
      </div>
    </div>
  );
};

export default GptModal;

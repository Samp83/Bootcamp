/* eslint-disable react/prop-types */
import { useState } from 'react';

function Input({ addItem }) {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      addItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ajouter une tâche"
      />
      <button onClick={handleAdd}>Ajouter</button>
    </div>
  );
}

export default Input;

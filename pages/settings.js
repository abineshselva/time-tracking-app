import { useState } from 'react';

const Settings = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSave = () => {
    localStorage.setItem('customProductName', name);
    // Optionally trigger a reload or state update
    window.location.reload(); // Simple reload to apply changes
  };

  return (
    <div>
      <h1>Settings</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter new product name"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Settings;

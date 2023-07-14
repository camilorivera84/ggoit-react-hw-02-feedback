import React, { useState } from 'react';
import FeedbackWidget from './FeedbackWidget';

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="App">
      <FeedbackWidget selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;

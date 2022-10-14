import React, { useState, useCallback } from 'react';

import Input from './Input';

const App = () => {
  const [value, setValue] = useState();

  const onChange = (e) => setValue(e.target.value);
  // BEGIN (write your solution here)
  const memoizedOnChange = useCallback(onChange, [])
  // END

  return (
    <div className="App">
      <div data-testid="input">
        <h3>Компонент без мемоизации:</h3>
        <Input onChange={onChange} />
      </div>

      <div data-testid="input">
        <h3>Компонент с мемоизацией:</h3>
        <Input onChange={memoizedOnChange} />
      </div>

      <p>
        {`Значение: ${value}`}
      </p>
    </div>
  );
};

export default App;

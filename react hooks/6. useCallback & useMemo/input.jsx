import React, { memo, useRef } from 'react';

const Input = memo(({ onChange }) => { // eslint-disable-line
  const componentRerenderedTimes = useRef(null);
  componentRerenderedTimes.current += 1;

  return (
    <>
      <input onChange={onChange} />
      <p>
        {`Количество отрисовок компонента: ${componentRerenderedTimes.current}`}
      </p>
    </>
  );
});

export default Input;

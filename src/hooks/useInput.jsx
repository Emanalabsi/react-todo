import { useState } from 'react';

const KEY_ENTER = 13;

const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const changeInput = (event) => {
    setValue(event.target.value);
  };

  const clearInput = () => {
    setValue('');
  };

 const handleInputKeyPress = (event, callback) => {
    if (event.which === KEY_ENTER || event.keyCode === KEY_ENTER) {
      callback(value);
      return true;
    }

    return false;
  };

  return { value, changeInput, clearInput, handleInputKeyPress };
};

export default useInput;

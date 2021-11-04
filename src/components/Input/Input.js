import { useState } from 'react';
import { fnDefault } from 'helpers';

export default function Input({
  value,
  placeholder,
  icon,
  onChange = fnDefault,
  onInput = fnDefault
}) {
  const [_value, setValue] = useState(value);

  function _onInput(e) {
    setValue(e.target.value);
    onInput && onInput(e.target.value);
  }

  function _onBlur(e) {
    _onChange(e.target.value);
  }

  function _onKeyPress(e) {
    if (e.key === 'Enter') {
      _onChange(e.target.value);
    }
  }

  function _onChange(newValue) {
    onChange && onChange(newValue);
  }

  return (
    <div className="mt-1 relative rounded-md shadow-sm">
      {icon && (
        <div className="absolute top-2 left-2 w-6 h-6">
          <img src={icon} alt="" />
        </div>
      )}
      <input
        type="text"
        className={
          'w-full h-10 rounded-lg border-grey-border py-3 pr-3 text-12px ' +
          (icon ? 'pl-10' : 'pl-3')
        }
        value={_value}
        placeholder={placeholder}
        onBlur={_onBlur}
        onInput={_onInput}
        onKeyPress={_onKeyPress}
      />
    </div>
  );
}

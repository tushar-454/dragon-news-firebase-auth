import PropTypes from 'prop-types';
import { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
const Input = ({
  id,
  displayName,
  type,
  name,
  placeholder,
  toggle = false,
  error,
  value,
  handleChange,
}) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className='flex flex-col gap-2 mb-6 relative'>
      <label htmlFor={id} className='text-xl font-semibold'>
        {displayName}
      </label>
      <input
        type={isShow ? 'text' : type}
        id={id}
        name={name}
        placeholder={placeholder}
        required
        value={value}
        onChange={handleChange}
        className={`w-full bg-[#F3F3F3] text-[#9F9F9F] p-5 outline-1 outline-[#9F9F9F] ${
          toggle && 'pr-14'
        }`}
      />
      {error && <p className='text-red-500 italic'>{error}</p>}
      {toggle && (
        <p className='absolute bottom-4 right-3'>
          {isShow ? (
            <HiEyeOff
              onClick={() => setIsShow(!isShow)}
              className='text-3xl text-[#9F9F9F] cursor-pointer select-none'
            />
          ) : (
            <HiEye
              onClick={() => setIsShow(!isShow)}
              className='text-3xl text-[#9F9F9F] cursor-pointer select-none'
            />
          )}
        </p>
      )}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  toggle: PropTypes.bool.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Input;

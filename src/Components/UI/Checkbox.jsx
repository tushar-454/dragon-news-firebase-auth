import PropTypes from 'prop-types';

const Checkbox = ({ name, displayName, checked, handleChange, error }) => {
  return (
    <div className='flex items-center gap-2 mb-5'>
      <input
        type='checkbox'
        id={name}
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      <label
        htmlFor={name}
        className={error ? 'text-red-600 italic' : 'text-[#9F9F9F]'}
      >
        {displayName}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  handleChange: PropTypes.func,
  error: PropTypes.bool,
};

export default Checkbox;

import PropTypes from 'prop-types';

const Button = ({ type, bg, color, displayName, handleClick, isBlock }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`w-full text-xl ${bg ?? 'bg-[#403F3F]'} ${
        color ?? 'text-white'
      } px-6 py-3 ${isBlock && 'block'} text-center`}
    >
      {displayName}
    </button>
  );
};
Button.propTypes = {
  displayName: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  bg: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  isBlock: PropTypes.bool,
};
Button.propTypes = {};

export default Button;

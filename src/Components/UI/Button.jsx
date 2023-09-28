import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({
  path,
  state,
  bg,
  color,
  displayName,
  handleClick,
  isBlock,
}) => {
  return (
    <div>
      <Link
        to={path}
        state={state}
        onClick={handleClick}
        className={`text-xl ${bg ?? 'bg-[#403F3F]'} ${
          color ?? 'text-white'
        } px-6 py-3 ${isBlock && 'block'} text-center`}
      >
        {displayName}
      </Link>
    </div>
  );
};
Button.propTypes = {
  displayName: PropTypes.string.isRequired,
  path: PropTypes.string,
  state: PropTypes.string,
  handleClick: PropTypes.func,
  bg: PropTypes.string,
  color: PropTypes.string,
  isBlock: PropTypes.bool,
};
Button.propTypes = {};

export default Button;

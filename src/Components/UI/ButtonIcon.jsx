import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const ButtonIcon = ({ name, icon, path, state, bg, color }) => {
  return (
    <div className='flex items-center gap-3 relative'>
      {icon}
      <Link
        to={path}
        state={state}
        className={`${bg ?? 'bg-[#403F3F]'} text-xl ${
          color ?? 'text-white'
        } font-semibold px-6 py-2 pl-14`}
      >
        {name}
      </Link>
    </div>
  );
};

ButtonIcon.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element,
  path: PropTypes.string,
  state: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
};

export default ButtonIcon;

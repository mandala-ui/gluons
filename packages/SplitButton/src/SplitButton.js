import React from 'react';
import PropTypes from 'prop-types';
import clamp from 'lodash/clamp';

const SplitButton = ({
  backgroundColor,
  disabled,
  isOn,
  offColor,
  onClick,
  onColor,
  pill,
  radius,
  showLabels,
}) => {
  const isDisabled = `${disabled ? 'o-60' : 'pointer'}`;
  return (
    <div className="split-button">
      <div
        className={`b--gray ba
            ${pill ? 'br-pill' : `br${clamp(radius, 0, 4)}`} flex h2 overflow-hidden w4`}
      >
        <button
          className={`bn w-50
              ${isDisabled}
              ${isOn ? `bg-${backgroundColor} shadow-2 z-1` : `bg-${offColor}`}`}
          disabled={disabled ? 'disabled' : null}
          onClick={onClick}
        >
          <span className={`f7 tracked-light ttu ${isOn ? 'gray' : 'white'} `}>
            { showLabels ? 'off' : null }
          </span>
        </button>
        <button
          className={`bn w-50
              ${isDisabled}
              ${isOn ? `bg-${onColor} gray` : `bg-${backgroundColor} shadow-2`}`}
          disabled={disabled ? 'disabled' : null}
          onClick={onClick}
        >
          <span className={`f7 tracked-light ttu ${isOn ? 'white' : 'gray'}`}>
            { showLabels ? 'on' : null}
          </span>
        </button>
      </div>
    </div>
  );
};


SplitButton.propTypes = {
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  isOn: PropTypes.bool,
  offColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onColor: PropTypes.string,
  pill: PropTypes.bool,
  radius: PropTypes.number,
  showLabels: PropTypes.bool,
};

SplitButton.defaultProps = {
  backgroundColor: 'white',
  disabled: false,
  isOn: false,
  offColor: 'dark-red',
  onColor: 'green',
  pill: false,
  radius: 0,
  showLabels: true,
};

export default SplitButton;

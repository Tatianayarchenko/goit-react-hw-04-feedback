import PropTypes from 'prop-types';

import { ButtonsItem, ButtonsList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonsList>
    {options.map(option => (
      <ButtonsItem key={option}>
        <button type="button" name={option} onClick={onLeaveFeedback}>
          {option[0].toUpperCase() + option.slice(1)}
        </button>
      </ButtonsItem>
    ))}
  </ButtonsList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

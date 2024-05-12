import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';


const FeedbackOptions = props => {
    const { options, onLeaveFeedback } = props;

    return(
<ul className={css.container}>     
{options.map((option, index) => {
    return(
    <li key={index} >
<button 
    className={css.button}
    type="button"
    name={option}
    onClick={ onLeaveFeedback }>   
        {option}
        </button>
    </li>
    ); 
    })}
</ul>
);
};

FeedbackOptions.propTypes = {
options: PropTypes.object.isRequired,
onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
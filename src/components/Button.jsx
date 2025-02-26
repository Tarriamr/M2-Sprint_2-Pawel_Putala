import styles from '/src/styles/Button.module.css'
import styleQuestion from '/src/styles/Question.module.css'
import styleSummary from '/src/styles/Summary.module.css'
import classNames from "classnames";

function Button({title, elementClass, onClick}) {


    let classes;
    switch (elementClass) {
        case 'styleQuestion':
            classes = classNames(styles.generalButton, styleQuestion.buttonQuestion);
            break;
        case 'styleSummary':
            classes = classNames(styles.generalButton, styleSummary.buttonReturn);
            break;
        default:
            classes = styles.generalButton;
    }

    return (<button className={classes} onClick={onClick}>{title}</button>);
}

export default Button;

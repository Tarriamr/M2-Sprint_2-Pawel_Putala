import Button from "/src/components/Button.jsx";
import styles from '/src/styles/Question.module.css';

function Question({question, onAnswer}) {

    const handleClick = (answer) => {
        onAnswer(question.id, answer.text);
    };

    return (
        <div className={styles.container}>
            <h3>Pytanie {question.id}: {question.text}</h3>
            {question.answers.map((answer, index) => (
                <Button key={index} elementClass="styleQuestion" title={answer.text}
                        onClick={() => handleClick(answer)}></Button>
            ))}
        </div>
    );
}

export default Question;

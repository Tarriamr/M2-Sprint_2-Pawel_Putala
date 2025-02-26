import styles from "/src/styles/Summary.module.css";
import {useState} from "react";
import Button from "./Button.jsx";

function Summary({questions, answers, onRestart}) {

    const [numberCorrectAnswers] = useState(answers.filter(answer => answer.isCorrect).length)
    const [percentageResult] = useState(Math.round(numberCorrectAnswers * 10))
    const [passing] = useState(percentageResult >= 80)

    const elementClass = passing ? styles.correct : styles.incorrect

    return (<div className={styles.container}>
        <h1 className={elementClass}>{passing ? "Gratulacje! Quiz zaliczony!" : "Niestety, Quiz niezaliczony"}</h1>
        <h2>Twój wynik to: <span className={elementClass}>{percentageResult}%</span> ({numberCorrectAnswers} z 10
            poprawnych odpowiedzi)</h2>
        {questions.map((question) => {
            const userAnswer = answers.find((answer) => answer.questionId === question.id);
            return (<div key={question.id} className={styles.container}>
                <h3>Pytanie {question.id}: {question.text}</h3>
                <h4>
                    Twoja odpowiedź: <span
                    className={userAnswer.isCorrect ? styles.correct : styles.incorrect}>{userAnswer.answer}</span>
                </h4>
            </div>);
        })}
        <Button onClick={onRestart} title={"Powrót do startu"} elementClass={"styleSummary"}></Button>
    </div>);
}

export default Summary;

import {useState} from "react";
import Title from "/src/components/Title.jsx";
import Question from "/src/components/Question.jsx";
import Summary from "/src/components/Summary.jsx";
import styles from '/src/styles/Quiz.module.css';
import questions from "/src/assets/quizQuestions.js"

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState([])
    const [quizStarted, setQuizStarted] = useState(false)
    const [showSummary, setShowSummary] = useState(false);

    const handleAnswer = (questionId, answer) => {
        const question = questions.find((q) => q.id === questionId);
        const isCorrect = question.answers.find((a) => a.text === answer).isCorrect;

        const existingAnswerIndex = answers.findIndex(
            (ans) => ans.questionId === questionId
        );

        const newAnswer = {questionId, answer, isCorrect};

        if (existingAnswerIndex !== -1) {
            const updatedAnswers = [...answers];
            updatedAnswers[existingAnswerIndex] = newAnswer;
            setAnswers(updatedAnswers);
        } else {
            setAnswers([...answers, newAnswer]);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowSummary(true);
        }
    };

    const handleStartQuiz = () => {
        setQuizStarted(true);
    };

    const handleRestart = () => {
        setAnswers([]);
        setCurrentQuestion(0);
        setShowSummary(false);
        setQuizStarted(false);
    };

    return (
        <div className={styles.container}>
            {!quizStarted ? (
                <Title onStartQuiz={handleStartQuiz}/>
            ) : !showSummary ? (
                <Question question={questions[currentQuestion]} onAnswer={handleAnswer}/>
            ) : (
                <Summary questions={questions} answers={answers} onRestart={handleRestart}/>
            )}
        </div>
    )
}

export default Quiz

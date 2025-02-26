import Button from "/src/components/Button.jsx";
import styles from "/src/styles/Title.module.css";

function TitleScreen({onStartQuiz}) {
    return (
        <div className={styles.titleContainer}>
            <h1>JavaScript Quiz</h1>
            <Button onClick={onStartQuiz} title={"Rozpocznij quiz"}></Button>
        </div>
    );
}

export default TitleScreen;

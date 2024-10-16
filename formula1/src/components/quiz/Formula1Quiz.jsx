import { useState } from "react";

// Easy quiz with react bootstrap alert included
const Formula1Quiz = () => {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
  });
  const [score, setScore] = useState(null);

  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let quizScore = 0;
    if (answers.question1.trim().toLowerCase() === "lewis hamilton") {
      quizScore++;
    }
    if (answers.question2.trim().toLowerCase() === "lando norris") {
      quizScore++;
    }

    if (answers.question3.trim().toLowerCase() === "charles leclerc") {
      quizScore++;
    }

    setScore(quizScore);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-danger">
        Quiz - How well do you know Formula 1? Let's find out!
      </h2>
      <p className="h6">
        Are you really a fan of the sport? By taking this test you can find out
        how big of a F1 fan you are. Good luck!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="question1" className="mt-5">
            Who is the current Formula 1 World Champion?
          </label>
          <select
            className="form-control"
            id="question1"
            name="question1"
            value={answers.question1}
            onChange={handleAnswerChange}
            required
          >
            <option value="">Select an answer</option>
            <option value="Lewis Hamilton">Lewis Hamilton</option>
            <option value="Max Verstappen">Max Verstappen</option>
            <option value="Valtteri Bottas">Valtteri Bottas</option>
          </select>
        </div>

        <div className="form-group mt-5">
          <label htmlFor="question2">
            Who got the lowest score this season?
          </label>
          <select
            className="form-control"
            id="question2"
            name="question2"
            value={answers.question2}
            onChange={handleAnswerChange}
            required
          >
            <option value="">Select an answer</option>
            <option value="Lewis Hamilton">Lewis Hamilton</option>
            <option value="Sebastian Vettel">Sebastian Vettel</option>
            <option value="Max Verstappen">Max Verstappen</option>
            <option value="Lando Norris">Lando Norris</option>
          </select>
        </div>

        <div className="form-group mt-5">
          <label htmlFor="question3">Who won last year?</label>
          <select
            className="form-control"
            id="question3"
            name="question3"
            value={answers.question3}
            onChange={handleAnswerChange}
            required
          >
            <option value="">Select an answer</option>
            <option value="Sebastian Vettel">Sebastian Vettel</option>
            <option value="Max Verstappen">Max Verstappen</option>
            <option value="Charles Leclerc">Charles Leclerc</option>
            <option value="Lando Norris">Lando Norris</option>
          </select>
        </div>
        <button type="submit" className="btn btn-danger mt-2">
          Submit
        </button>
      </form>
      {score !== null && (
        <div className="alert alert-info mt-3">
          Your score is {score} out of 3.
        </div>
      )}
    </div>
  );
};

export default Formula1Quiz;

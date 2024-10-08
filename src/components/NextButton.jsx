const NextButton = ({ dispatch, answer, index, numQuestions }) => {
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className="block text-right text-xl bg-black text-white cursor-pointer p-3 rounded-lg"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="block text-right text-xl bg-black text-white cursor-pointer p-3 rounded-lg"
        onClick={() => dispatch({ type: "finished" })}
      >
      Finished
      </button>
    );
};

export default NextButton;

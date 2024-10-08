const Option = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;
  return (
    <div>
      <div className={"flex flex-col gap-3 mb-6 items-center"}>
        {question.options.map((item, index) => (
          <button
            disabled = {hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            key={index}
            className={`btn-option btn-bg-darkest text-xl text-black cursor-pointer p-3 rounded-full transition w-[45%] text-left border-2 border-dark 
             ${index === answer ? "answer" :""}
              ${
                hasAnswered ?
                index === question.correctOption
                  ? "bg-blue-500"
                  : "bg-orange-400"
                  :""
              }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Option;

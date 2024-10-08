import Option from "./components/Option";

const Question = ({ question, dispatch, answer }) => {
  return (
    <div>
      <h4 className="text-2xl font-bold mb-6 text-center">{question.question}</h4>
      <Option  question = {question} dispatch = {dispatch} answer = {answer}/>
    </div>
  );
};

export default Question;

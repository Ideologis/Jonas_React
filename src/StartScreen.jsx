function StartScreen({ numQuestion, dispatchs }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl mb-4 ">Welcome to the react quiz</h2>
      <h3 className="font-bold text-2xl mb-3 ">
        {numQuestion} question to test your react Mastery
      </h3>
      <button
        onClick={() => dispatchs({ type: "start" })}
        className="block  text-xl bg-black text-white cursor-pointer p-3 rounded-lg transition "
      >
        Lets Start
      </button>
    </div>
  );
}

export default StartScreen;

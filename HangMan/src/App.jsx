import { useEffect, useState } from "react";
import "./App.css";
import { Data } from "./components/Data";

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "Ğ",
  "H",
  "I",
  "İ",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "Ö",
  "P",
  "R",
  "S",
  "Ş",
  "T",
  "U",
  "Ü",
  "V",
  "Y",
  "Z",
];
function App() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [answerArray, setAnswerArray] = useState([]);
  const [keywords, setKeywords] = useState([]);
  //HARFLERİN AKRIŞIK OLMASINI SAĞLADIK
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const setKeyword = (keyword) => {
    if (keywords.length < answer.length) {
      keywords.push(keyword);
      setKeywords([...keywords]);
    }
  };

  useEffect(() => {
    const answer = Data[index].answer.toLowerCase();
    setAnswer(answer);
    setQuestion(Data[index].question);
    const stringToArray = answer.split("");
    stringToArray.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    stringToArray.push(alphabet[Math.floor(Math.random() * alphabet.length)]);

    stringToArray.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    const alphabetLowerData = stringToArray.map((answer) =>
      answer.toLowerCase()
    );
    setAnswerArray(shuffle(alphabetLowerData));
    console.log(shuffle(alphabetLowerData));
  }, []);
  const removeKeyword = (index) => {
    keywords.splice(index, 1);
    setKeywords([...keywords]);
  };
  return (
    <>
      <div className="app">
        <span>{question}</span>
      </div>
      <div>
        {keywords.map((item, index) => (
          <span key={index} onClick={() => removeKeyword(index)}>
            {item}
          </span>
        ))}
      </div>
      <div>
        {answerArray.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setKeyword(item);
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;

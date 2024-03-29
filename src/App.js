import { useState, useEffect } from "react";

import Test from "./Test";
import GetAPI from "./GetAPI";
import "./styles/Body.scss";
import "./styles/Header.scss";
import "./styles/Scores.scss";
import "./styles/Main.scss";

function App() {
  const initialRight =
    JSON.parse(window.localStorage.getItem("countRight")) || 0;
  const initialWrong =
    JSON.parse(window.localStorage.getItem("countWrong")) || 0;
  const [countRight, setCountRight] = useState(initialRight);
  const [countWrong, setCountWrong] = useState(initialWrong);

  const [capitalGuess, setCapitalGuess] = useState("");
  const [theCapital, setTheCapital] = useState("");
  const [theCapitalNormalCase, setTheCapitalNormalCase] = useState("");
  const [lastCapitalNormalCase, setLastCapitalNormalCase] = useState("");
  const [theCountry, setTheCountry] = useState("Paraguay");
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("countRight", JSON.stringify(countRight));
  }, [countRight]);

  useEffect(() => {
    window.localStorage.setItem("countWrong", JSON.stringify(countWrong));
  }, [countWrong]);

  let places = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cape Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Democratic Republic of the Congo",
    "Republic of the Congo",
    "Cook Islands",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Ivory Coast",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Vatican City",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "North Korea",
    "South Korea",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn Islands",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "São Tomé and Príncipe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom of Great Britain and Northern Ireland",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Virgin Islands",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands",
  ];

  function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  let getRandomCountry;

  function addCapital(correctCapital) {
    setTheCapital(correctCapital);
    console.log(theCapital);
  }

  function addCapitalNormalCase(capitalNormalCase) {
    let x = capitalNormalCase;
    setTheCapitalNormalCase(x);
  }

  useEffect(() => {
    function keepCapitalNormalCaseRight(theCapitalNormalCase) {
      setLastCapitalNormalCase(theCapitalNormalCase);
    }
    keepCapitalNormalCaseRight(theCapitalNormalCase);
  }, [countRight]);

  useEffect(() => {
    function keepCapitalNormalCaseWrong(theCapitalNormalCase) {
      setLastCapitalNormalCase(theCapitalNormalCase);
    }
    keepCapitalNormalCaseWrong(theCapitalNormalCase);
  }, [countWrong]);

  function handleResetScores() {
    setCountRight(0);
    setCountWrong(0);
    setCorrectAnswer(false);
    setWrongAnswer(false);
  }

  function handleResetCountry() {
    let getRandomCountry = randomItem(places);
    let newCountry = getRandomCountry;

    setTheCountry(newCountry);
  }

  function handleChange(evt) {
    setCapitalGuess(evt.target.value);
  }

  function countRightAdd() {
    setCountRight(countRight + 1);
    setCorrectAnswer(true);
    setWrongAnswer(false);
  }

  function countWrongAdd() {
    setCountWrong(countWrong + 1);
    setWrongAnswer(true);
    setCorrectAnswer(false);
  }

  function guessChecker(guess) {
    let guessUppercase = guess
      .toUpperCase()
      .replace(/\.|\,|\'/g, "")
      .replace(/\_|\-/g, " ");
    console.log(guessUppercase);

    if (guessUppercase === theCapital) countRightAdd();
    else countWrongAdd();
    setCapitalGuess("");
    handleResetCountry();
  }

  function handleSubmit(evt) {
    if (capitalGuess.length > 1) guessChecker(capitalGuess);
    else alert("Input must be at least two characters.");
  }

  return (
    <div className="App-container">
      <header className="App-title">
        <h1>GUESS THE CAPITAL</h1>
      </header>
      <div className="App-count-container">
        <div>
          <div className="App-count">
            Right Guesses: {countRight}{" "}
            <p className={`App-count-right-answer${correctAnswer}`}>
              Yes, it is {lastCapitalNormalCase}
            </p>
          </div>{" "}
        </div>

        <div>
          {" "}
          <div className="App-count">
            {" "}
            Wrong Guesses: {countWrong}{" "}
            <p className={`App-count-wrong-answer${wrongAnswer}`}>
              No, it is {lastCapitalNormalCase}
            </p>
          </div>
        </div>

        <div className="App-reset-container">
          <button className="App-button-reset" onClick={handleResetScores}>
            Reset Scores
          </button>
        </div>
      </div>

      <div className="App-main">
        <GetAPI
          place={theCountry}
          addCapital={addCapital}
          addCapitalNormalCase={addCapitalNormalCase}
        />

        <div className="App-main-guess">
          <div className="App-main-guess-question">
            <p className="App-main-guess-p">
              What is the capital of {theCountry}?
            </p>
          </div>
          <div className="App-main-guess-input">
            <input
              type="text"
              autoComplete="off"
              placeholder="Guess the Capital..."
              value={capitalGuess}
              onChange={handleChange}
              className="App-guess-input"
              onKeyDown={(e) => {
                let x = e.code;
                if (x === "Enter") {
                  handleSubmit();
                }
              }}
            ></input>
            <button
              className="App-guess-button"
              onClick={(e) => {
                handleSubmit();
              }}
            >
              Submit
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

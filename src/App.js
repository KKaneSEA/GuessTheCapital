import { useState } from "react";
//import "./App.css";
import Test from "./Test";
import GetAPI from "./GetAPI";
import "./styles/Body.scss";
import "./styles/Header.scss";
import "./styles/Scores.scss";
import "./styles/Main.scss";

function App() {
  const [countRight, setCountRight] = useState(0);
  const [countWrong, setCountWrong] = useState(0);
  const [capitalGuess, setCapitalGuess] = useState("");
  const [theCapital, setTheCapital] = useState("");
  const [theCountry, setTheCountry] = useState("Australia");

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

    // this.setState(
    //   { friends: [...this.state.friends, newFriend] },
    //   this.syncLocalStorage
    // );
  }
  function handleResetScores() {
    setCountRight(0);
    setCountWrong(0);
  }

  function handleResetCountry() {
    let getRandomCountry = randomItem(places);
    let newCountry = getRandomCountry;
    console.log(newCountry);
    setTheCountry(newCountry);
  }

  function handleChange(evt) {
    setCapitalGuess(evt.target.value);
  }

  function test(guess) {
    console.log(guess);

    setCountRight(countRight + 1);
  }

  function guessChecker(guess) {
    console.log("in guess checker");
    console.log(guess);
    let guessUppercase = guess.toUpperCase();
    console.log(guessUppercase);
    if (guessUppercase === theCapital) setCountRight(countRight + 1);
    else setCountWrong(countWrong + 1);
    setCapitalGuess("");
    handleResetCountry();
  }

  function handleSubmit(evt) {
    // evt.preventDefault();
    if (capitalGuess.length > 1)
      // test(capitalGuess)
      guessChecker(capitalGuess);
    else alert("Input must be at least two characters.");
    console.log("inHandle Submit");
  }

  return (
    <div className="App-container">
      {/* <Test countWrong={countWrong} /> */}
      <div className="App-title">
        <h1>GUESS THE CAPITAL</h1>
      </div>
      <div className="App-count-container">
        <p className="App-count">Right Guesses: {countRight} </p>
        <p className="App-count"> Wrong Guesses: {countWrong}</p>
        <div className="App-reset-container">
          <button className="App-button-reset" onClick={handleResetScores}>
            reset scores
          </button>
        </div>
      </div>

      <div className="App-main">
        <GetAPI place={theCountry} addCapital={addCapital} />

        <div className="App-main-guess">
          <div className="App-main-guess-question">
            <p>What is the capital of {theCountry}?</p>
          </div>
          <div className="App-main-guess-input">
            <input
              type="text"
              placeholder="guess the Capital..."
              value={capitalGuess}
              // name="capitalInput"
              onChange={handleChange}
              className="App-guess-input"
              onKeyDown={(e) => {
                let x = e.code;
                if (x === "Enter") {
                  console.log("enter submitted");
                  console.log(capitalGuess);

                  handleSubmit();
                  //handleResetCountry();
                }
              }}
            ></input>
            <button
              className="App-guess-button"
              onClick={(e) => {
                handleSubmit();

                // handleResetCountry();
              }}

              // onClick={handleSubmit}
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

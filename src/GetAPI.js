import React, { Component, useState, useEffect } from "react";
import axios from "axios";

function GetAPI(props) {
  const [placeProp, setPlaceProp] = useState("");
  const [correctCapital, setCorrectCapital] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const url = await axios.get(
          `https://restcountries.com/v3.1/name/${props.place}?fullText=true`
        );

        let response = url;
        let capital = response.data[0].capital[0];
        let capitalUppercase = capital.toUpperCase();

        console.log(capitalUppercase);
        setCorrectCapital(capitalUppercase);

        props.addCapital(capitalUppercase);
        props.addCapitalNormalCase(capital);
      } catch (err) {
        alert("The server of this API is down");
      }
    }

    getData();
  }, [props.place]);

  return <div></div>;
}

export default GetAPI;

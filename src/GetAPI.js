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

        // let response = url;
        // let capital = response.data[0].capital[0];

        let capital = url.data[0].capital[0];

        console.log(url.data[0].capital[0]);
        // console.log(response.data[0].capital[0]);
        let capitalUppercase = capital
          .toUpperCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/\.|\,|\'/g, "")
          .replace(/\_|\-/g, " ");

        setCorrectCapital(capitalUppercase);

        props.addCapital(capitalUppercase);
        props.addCapitalNormalCase(capital);
      } catch (err) {
        alert("The API used in this project is down");
      }
    }

    getData();
  }, [props.place]);

  return <div></div>;
}

export default GetAPI;

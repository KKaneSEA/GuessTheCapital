import React, { Component, useState, useEffect } from "react";
import axios from "axios";

function GetAPI(props) {
  const [placeProp, setPlaceProp] = useState("");
  const [correctCapital, setCorrectCapital] = useState("");

  useEffect(() => {
    async function getData() {
      const url = await axios.get(
        `https://restcountries.com/v3.1/name/${props.place}?fullText=true`
      );
      let response = url;
      let capital = response.data[0].capital[0];
      let capitalUppercase = capital.toUpperCase();
      console.log(response.data[0].capital[0]);
      console.log(capital);
      console.log(capitalUppercase);
      setCorrectCapital(capitalUppercase);
      //this.setState({ correctCapital: capitalUppercase });
      props.addCapital(capitalUppercase);
      props.addCapitalNormalCase(capital);
    }
    getData();
  }, [props.place]);

  return <div></div>;
}

export default GetAPI;

import React, { useState, useEffect } from "react";
import "./App.css";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import MainCardHolder from "./MainCardHolder";
import MainFilter from "./MainFilter";
import Pagination from "./Pagination";

const Opacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const MainHeader = styled.img`
  margin: 60px auto;
  height: 140px;
  animation: ${Opacity} 10s;
`;

const App = () => {
  const [characters, setChararacter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchresults, setSearchResults] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const pageForward = () => {
    setPageNumber(pageNumber + 1);
  }

  const pageBackkWard = () => {
    setPageNumber(pageNumber - 1);
  }

  const charFilter = event => {
    setSearchTerm(event.target.value);
  };

  //loading page
  useEffect(() => {
    axios
      .get(`https://swapi.py4e.com/api/people/?page=${pageNumber}`)
      .then(response => {
        setChararacter(response.data.results);
      })
      .catch(error => console.log(error));
      console.log(characters)

      axios.get(`https://swapi.py4e.com/api/people/?search=${searchTerm}`)
      .then(response => {
        setChararacter(response.data.results);
      })
      .catch(error => console.log(error));
  }, [searchTerm, pageNumber]);

  //search functionality
  useEffect(() => {
    const results = characters.filter(character => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  }, [characters, searchTerm]);

  return (
    <div className="App">
      <MainHeader
        src="https://www.freepnglogos.com/uploads/star-wars-logo-png-8.png"
        alt="Logo Star Wars"
      />
      <Pagination 
        pageForward={pageForward}
        pageBackkWard={pageBackkWard}
      />
      <MainFilter charFilter={charFilter} />
      <MainCardHolder 
        characters={characters}
        searchresults= {searchresults} 
      />
    </div>
  );
}

export default App;
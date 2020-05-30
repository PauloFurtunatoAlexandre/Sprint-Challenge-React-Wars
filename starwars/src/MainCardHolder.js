import React from "react";
import styled from "styled-components";

const CardHolder = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Card = styled.div`
  padding: 40px;
  margin: 30px auto;
  background-color: #eee;
  width: 25%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const Name = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
`;

const Data = styled.p`
  margin-top: 6px;
`;

const MainCardHolder = (props) => {
  
  const { characters, setChararacter, searchTerm, setSearchTerm, searchresults, setSearchResults } = props;

    return (
        <CardHolder>
        {searchresults.map((character, index) => {
          return (
            <Card key={index}>
              <Name>{character.name}</Name>
              <Data>Height: {character.height}</Data>
              <Data>Mass: {character.mass}</Data>
              <Data>Hair Color: {character.hair_color}</Data>
              <Data>Skin Color: {character.skin_color}</Data>
              <Data>Eye Color: {character.eye_color}</Data>
              <Data>Birth Year: {character.birth_year}</Data>
              <Data>Gender: {character.gender}</Data>
              <Data>
                Homeworld:{" "}
                <a href={character.homeworld} target="_blank">
                  Click Here
                </a>
              </Data>
            </Card>
          );
        })}
      </CardHolder>
    );
}

export default MainCardHolder;
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

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const Name = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
`;

const Data = styled.p`
  margin-top: 6px;
`;

const MainCardHolder = (props) => {
  
  const { searchresults } = props;

    return (
        <CardHolder>
        {searchresults.map((character, index) => {
          return (
            <Card key={index}>
              <Name>{character.name}</Name>
              <Data><strong>Height:</strong> {character.height}</Data>
              <Data><strong>Mass:</strong> {character.mass}</Data>
              <Data><strong>Hair Color:</strong> {character.hair_color}</Data>
              <Data><strong>Skin Color:</strong> {character.skin_color}</Data>
              <Data><strong>Eye Color:</strong> {character.eye_color}</Data>
              <Data><strong>Birth Year:</strong> {character.birth_year}</Data>
              <Data><strong>Gender:</strong> {character.gender}</Data>
              <Data>
              <strong>Homeworld:</strong>{" "}
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
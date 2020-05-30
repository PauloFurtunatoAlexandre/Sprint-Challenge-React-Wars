import React from "react";
import styled from "styled-components";

const Filter = styled.input`
  margin: 0 auto;
  display: block;
  padding: 8px;
  width: 20%;
  color: #363636;
  background-color: #eee;
  border-radius: 4px;
  font-size: 1rem;
`;

const MainFilter = (props) => {
    
    const { charFilter, searchTerm } = props;

    return <Filter 
        searchTerm={searchTerm}
        onChange={e => charFilter(e)}
        type="text"
        placeholder="Search the name..."
    />
}

export default MainFilter;
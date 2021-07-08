import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 0 0 40px;
`;

const PaginationButton = styled.button`
    width: 200px;
    font-size: 1.2rem;
    cursor: pointer;
    background: orange;
    height: 60px;
    color: black;
`;

const Pagination = (props) => {
    
    const { pageForward, pageBackkWard } = props;
    
    return(
        <PaginationContainer>
            <PaginationButton onClick={() => pageBackkWard()}>Previous Page</PaginationButton>
            <PaginationButton onClick={() => pageForward()}>Next Page</PaginationButton>
        </PaginationContainer>
    );
}

export default Pagination;
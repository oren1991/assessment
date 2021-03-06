import styled from "styled-components";

export const PaginatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PaginatorNavigator = styled.div`
    height: 100px;
    width: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 450px) {
        width: 80%;
    }
`;

export const PaginatorButton = styled.button`
    display: block;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    :hover {
        background-color: white;
        cursor: pointer;
    }
`;

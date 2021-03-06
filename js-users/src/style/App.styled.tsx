import styled from "styled-components";

export const AppContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-flow: column;
    background: linear-gradient(
        0deg,
        rgba(175, 254, 255, 0.25) 0%,
        rgba(220, 249, 213, 0.34) 47%,
        rgba(255, 243, 218, 0.41) 100%
    );
`;

export const AppNavBar = styled.nav`
    min-height: 50px;
    display: flex;
    background-color: rgba(255, 255, 255, 0);
    width: 100vw;
    align-items: center;
    box-shadow: 0 1px 25px 0 rgba(0, 0, 0, 0.2);
`;

export const AppNavLinks = styled.ul`
    padding: 0;
    display: flex;
    width: 100%;
    margin: 0;
    justify-content: space-around;
    align-items: center;
`;

export const AppNavLink = styled.li`
    display: block;
    a {
        text-decoration: none;
        color: black;
        align-items: center;
        padding: 5px 10px 5px 10px;
        border-radius: 2px;
        font-weight: 800;
        :hover {
            background-color: white;
        }
    }
`;

export const AppBody = styled.div`
    overflow: scroll;
    padding-top: 18px;
`;

import styled from "styled-components";

export const AppContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-flow: column;
    background: linear-gradient(
        45deg,
        rgba(56, 253, 255, 1) 0%,
        rgba(213, 255, 203, 1) 31%,
        rgba(255, 255, 185, 1) 31%,
        rgb(218, 255, 230) 57%,
        rgb(193, 253, 191) 57%,
        rgb(197, 241, 255) 86%,
        rgba(150, 255, 236, 1) 86%
    );
`;

export const AppNavBar = styled.nav`
    min-height: 50px;
    display: flex;
    background-color: rgba(255, 255, 255, 0);
    width: 100vw;
    align-items: center;
    box-shadow: 0 1px 25px 0 rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
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
        align-items: center;
        padding: 5px 10px 5px 10px;
        border-radius: 2px;
        font-weight: 800;
        color: rgba(0, 0, 0, 0.753);

        :hover {
            background-color: white;
        }
    }
`;

export const AppBody = styled.div`
    overflow: scroll;
    padding-top: 18px;
    height: calc(100vh - 50px);
`;

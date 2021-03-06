import styled from "styled-components";

export const UserListItemContainer = styled.div`
    width: 400px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 6px 12px 6px 12px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    :hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        background-color: rgba(255, 255, 255, 0.9);
    }
    @media (max-width: 450px) {
        width: 80%;
    }
`;

export const UserListItemInfo = styled.div`
    display: flex;
    flex: 2 0 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
`;

export const UserListItemTitle = styled.div`
    flex-shrink: 1;
    font-size: 1.5em;
    font-weight: 700;
    max-width: 250px;
    color: #555;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const UserListItemDate = styled.div`
    font-size: 0.8em;
    color: #aaa;
`;

export const UserListItemButton = styled.button`
    display: block;
    height: 50px;
    width: 50px;
    border-radius: 1px;
    :hover {
        background-color: white;
        cursor: pointer;
    }
`;

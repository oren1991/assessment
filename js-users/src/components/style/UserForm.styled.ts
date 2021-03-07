import styled from "styled-components";

export const UserFormForm = styled.form`
    min-width: 400px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 6px 12px 6px 12px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin: 6px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    font-size: 1.5em;
    font-weight: 700;
    max-width: 250px;
    color: #555;
    @media (max-width: 450px) {
        width: 80%;
        min-width: 80%;
    }
`;

export const UserFormInputContainer = styled.div`
    display: flex;
    flex: 2 0 0;
    flex-direction: column;
    align-items: flex-start;
`;

export const UserFormLabel = styled.label`
    margin-bottom: 5px;
    margin-top: 5px;
`;

export const UserFormInput = styled.input<{ invalid?: boolean }>`
    margin-bottom: 10px;
    width: 300px;
    height: 20px;
    font-size: 0.7em;
    border-radius: 5px;
    ${(props) => (props.invalid ? "border: 2px solid red;" : "")}
    color: black;
    padding: 5px;
    @media (max-width: 450px) {
        width: 80%;
    }
`;

export const UserFormSaveButton = styled.button`
    display: block;
    height: 50px;
    width: 50px;
    border-radius: 1px;
    :hover {
        background-color: white;
        cursor: pointer;
    }
`;

import axios from "axios";

export const getUsers = () =>
    axios.get("http://js-assessment-backend.herokuapp.com/users.json");

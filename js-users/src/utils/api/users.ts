import axios from "axios";
import { User } from "../../custom";
export const getUsers = () =>
    axios.get("http://js-assessment-backend.herokuapp.com/users.json");

export const updateUser = (user: User) => axios.put(user.url, user);

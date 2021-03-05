import axios from "axios";
import { User } from "../../custom";
export const getUsers = () =>
    axios.get("http://js-assessment-backend.herokuapp.com/users.json");
export const getUser = (userId: string) =>
    axios.get(
        `http://js-assessment-backend.herokuapp.com/users/${userId}.json`
    );
export const updateUser = (user: Partial<User>) =>
    axios.put(
        `http://js-assessment-backend.herokuapp.com/users/${user.id}.json`,
        user
    );
export const createUser = (user: User) =>
    axios.post("http://js-assessment-backend.herokuapp.com/users.json", user);

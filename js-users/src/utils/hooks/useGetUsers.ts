import { getUsers } from "./../api/users";
import { useQuery } from "react-query";

const get = () => async () => {
    const { data } = await getUsers();
    return data;
};

export const useGetUsers = () => {
    return useQuery<User[] | null>("users", get());
};

import { getUsers } from "./../api/users";
import { useQuery } from "react-query";
import { User } from "../../custom";

const get = () => async () => {
    const { data } = await getUsers();
    return data.sort((a: User, b: User) => {
        if (a.first_name < b.first_name) {
            return -1;
        }
        if (a.first_name > b.first_name) {
            return 1;
        }
        return 0;
    });
};

export const useGetUsers = () => {
    return useQuery<User[] | null>("users", get());
};

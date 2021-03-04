import { getUser } from "../api/users";
import { useQuery } from "react-query";
import { User } from "../../custom";

const get = (userId: string) => async () => {
    const { data } = await getUser(userId);
    return data;
};

export const useGetUser = (userId: string) => {
    return useQuery<User | null>(`user_${userId}`, get(userId));
};

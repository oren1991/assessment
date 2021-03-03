import { createUser } from "./../api/users";
import { useMutation } from "react-query";
import { User } from "../../custom";
import { useQueryClient } from "react-query";

const create = async (user: User) => {
    const { data } = await createUser(user);
    return data;
};
export const useCreateUser = () => {
    const queryClient = useQueryClient();
    return useMutation<User, Error, any>((user: User) => create(user), {
        retry: false,
        onSuccess: () => queryClient.invalidateQueries("users"),
    });
};

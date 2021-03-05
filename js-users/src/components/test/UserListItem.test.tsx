import { fireEvent, render, screen } from "@testing-library/react";
import { UserListItem } from "../UserListItem";
import { QueryClient, QueryClientProvider } from "react-query";
import { useUpdateUser } from "../../utils/hooks/useUpdateUser";
const queryClient = new QueryClient();
const mockApiCall = jest.fn();
jest.mock("../../utils/hooks/useUpdateUser", () => {
    return {
        useUpdateUser: (id: number) => ({
            isLoading: false,
            mutate: mockApiCall,
        }),
    };
});
describe("<UserListItem />", () => {
    beforeEach(() => {
        render(
            <QueryClientProvider client={queryClient}>
                <UserListItem
                    user={{
                        first_name: "this is a random first name",
                        last_name: "this is a random last name",
                        status: "active",
                    }}
                ></UserListItem>
            </QueryClientProvider>
        );
    });
    it("should render props", async () => {
        const firstName = await screen.findByText(/First name/);
        const lastName = await screen.findByText(/Last name/);
        const createdAt = await screen.findByText(/Created at/);

        expect(firstName).toBeInTheDocument();
        expect(lastName).toBeInTheDocument();
        expect(createdAt).toBeInTheDocument();
    });

    it("should render activate/lock button", async () => {
        const button = await screen.findByText(/Lock/);
        fireEvent.click(button);
        expect(button).toBeInTheDocument();
        expect(mockApiCall).toBeCalled();
    });
});

import { fireEvent, render, screen } from "@testing-library/react";
import { UserListItem } from "../UserListItem";
import { QueryClient, QueryClientProvider } from "react-query";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
const queryClient = new QueryClient();
const mockApiCall = jest.fn();
const history = createMemoryHistory();
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
            <Router history={history}>
                <QueryClientProvider client={queryClient}>
                    <UserListItem
                        user={{
                            first_name: "this is a random first name",
                            last_name: "this is a random last name",
                            status: "active",
                            id: 2,
                        }}
                    ></UserListItem>
                </QueryClientProvider>
            </Router>
        );
    });
    it("should render props", async () => {
        const firstName = await screen.findByText(/this is a random first /);
        const lastName = await screen.findByText(/this is a random last name/);
        const createdAt = await screen.findByText(/Created at/);

        expect(firstName).toBeInTheDocument();
        expect(lastName).toBeInTheDocument();
        expect(createdAt).toBeInTheDocument();
    });

    it("should render activate/lock button", async () => {
        const button = await screen.findByTestId("lock-icon");
        fireEvent.click(button);
        expect(button).toBeInTheDocument();
        expect(mockApiCall).toBeCalled();
    });

    it("should redirect to edit", async () => {
        const button = await screen.findByTestId("user-edit");
        fireEvent.click(button);
        expect(button).toBeInTheDocument();
        expect(history.location.pathname).toBe("/edit/2");
    });
});

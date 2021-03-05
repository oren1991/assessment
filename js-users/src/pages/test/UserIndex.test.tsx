import { fireEvent, render, screen } from "@testing-library/react";
import { UserIndex } from "../UserIndex";
import { QueryClient, QueryClientProvider } from "react-query";
import { Router } from "react-router-dom";
import { useGetUsers } from "../../utils/hooks/useGetUsers";
import { User } from "../../custom";
import { createMemoryHistory } from "history";

const queryClient = new QueryClient();

jest.mock("../../utils/hooks/useGetUsers", () => ({
    useGetUsers: jest.fn(),
}));

const numberOfUsersInDB = 200;
const userFactory = (id: number) => {
    let user: User = {
        first_name: `user ${id}`,
        last_name: "dummy",
        id: id,
    };
    return user;
};
const history = createMemoryHistory();

let dummyUsers = Array.from(Array(numberOfUsersInDB).keys()).map(userFactory);

describe("<UserIndex />", () => {
    it("should render UserItemList 10 times even if having more users", async () => {
        (useGetUsers as jest.Mock).mockImplementation(() => ({
            data: dummyUsers,
        }));
        render(
            <QueryClientProvider client={queryClient}>
                <Router history={history}>
                    <UserIndex />
                </Router>
            </QueryClientProvider>
        );
        const userListItems = screen.queryAllByTestId("user-list-item");
        expect(userListItems.length).toBe(10);
    });

    it("should be able to paginate by 10 users", async () => {
        (useGetUsers as jest.Mock).mockImplementation(() => ({
            data: dummyUsers,
        }));
        history.push("/?page=1");
        render(
            <QueryClientProvider client={queryClient}>
                <Router history={history}>
                    <UserIndex />
                </Router>
            </QueryClientProvider>
        );
        let nextPageButton = await screen.findByTestId("next-page");
        fireEvent.click(nextPageButton);

        let eleventhUser = await screen.findByText(/user 11/);
        expect(eleventhUser).toBeInTheDocument();

        fireEvent.click(nextPageButton);
        let twentiethUser: HTMLElement | null = await screen.findByText(
            /user 20/
        );

        expect(eleventhUser).not.toBeInTheDocument();
        expect(twentiethUser).toBeInTheDocument();

        let prevPageButton = await screen.findByTestId("prev-page");
        fireEvent.click(prevPageButton);

        eleventhUser = await screen.findByText(/user 11/);
        twentiethUser = screen.queryByText(/user 20/);

        expect(twentiethUser).not.toBeInTheDocument();
        expect(eleventhUser).toBeInTheDocument();
    });
});

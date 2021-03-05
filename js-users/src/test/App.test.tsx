import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { createMemoryHistory } from "history";
import { Router, MemoryRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { useGetUser } from "../utils/hooks/useGetUser";
const queryClient = new QueryClient();
jest.mock("react-router-dom", () => {
    const originalModule = jest.requireActual("react-router-dom");

    return {
        __esModule: true,
        ...originalModule,
        BrowserRouter: ({ children }: { children: any }) => (
            <div>{children}</div>
        ),
        useHistory: jest.fn(),
    };
});
jest.mock("../utils/hooks/useGetUser");

describe("<App />", () => {
    test("renders App", () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        const index = screen.getByTestId("user-index");
        expect(index).toBeInTheDocument();
    });

    it("should navigate correctly", () => {
        const history = createMemoryHistory();
        (useGetUser as jest.Mock).mockImplementation(() => ({
            data: {},
        }));

        render(
            <QueryClientProvider client={queryClient}>
                <Router history={history}>
                    <App />
                </Router>
            </QueryClientProvider>
        );

        history.push("/new");
        const userNewForm = screen.getByTestId("user-new-form");
        expect(userNewForm).toBeInTheDocument();

        history.push("/edit/1");
        const userEditForm = screen.getByTestId("user-edit-form");
        expect(userEditForm).toBeInTheDocument();
    });

    it("should redirect to index if wrong route", () => {
        const history = createMemoryHistory();

        render(
            <Router history={history}>
                <App />
            </Router>
        );

        history.push("/non-existing-route");
        const userIndex = screen.getByTestId("user-index");
        expect(userIndex).toBeInTheDocument();
    });
});

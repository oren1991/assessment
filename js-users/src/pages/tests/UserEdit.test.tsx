import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { User } from "../../custom";
import { UserEdit } from "../UserEdit";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
import { useGetUser } from "../../utils/hooks/useGetUser";

const queryClient = new QueryClient();
const dummyUser: User = {
    id: 1,
    first_name: "Dummyfirstname",
    last_name: "Dummylastname",
    status: "active",
};
jest.mock("../../utils/hooks/useGetUser", () => ({
    useGetUser: jest.fn(),
}));

describe("<UserEdit />", () => {
    beforeEach(() => {});
    it("should render the userform if there is user", async () => {
        (useGetUser as jest.Mock).mockImplementation(() => ({
            data: dummyUser,
        }));
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <UserEdit></UserEdit>
                </MemoryRouter>
            </QueryClientProvider>
        );
        const form = await screen.findByTestId("user-form");
        expect(form).toBeInTheDocument();
    });

    it("should not render the userform if there is NO user", async () => {
        (useGetUser as jest.Mock).mockImplementation(() => ({
            data: null,
        }));
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <UserEdit></UserEdit>
                </MemoryRouter>
            </QueryClientProvider>
        );
        const form = screen.queryByTestId("user-form");
        expect(form).toBeNull();
    });

    it("should render field first_name and last_name with values", async () => {
        (useGetUser as jest.Mock).mockImplementation(() => ({
            data: dummyUser,
        }));
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <UserEdit></UserEdit>
                </MemoryRouter>
            </QueryClientProvider>
        );
        const form = await screen.findByTestId("user-form");

        expect(form).toHaveFormValues({
            first_name: dummyUser.first_name,
            last_name: dummyUser.last_name,
        });
    });
});

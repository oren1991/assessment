import React from "react";
import { render, screen } from "@testing-library/react";
import { User } from "../../custom";
import { UserNew } from "../UserNew";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
import { useGetUser } from "../../utils/hooks/useGetUser";

const queryClient = new QueryClient();

describe("<UserNew />", () => {
    it("should render the userform if there is user", async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <UserNew></UserNew>
                </MemoryRouter>
            </QueryClientProvider>
        );
        const form = await screen.findByTestId("user-form");
        expect(form).toBeInTheDocument();
    });

    it("should render field first_name and last_name with values", async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <UserNew></UserNew>
                </MemoryRouter>
            </QueryClientProvider>
        );
        const form = await screen.findByTestId("user-form");

        expect(form).toHaveFormValues({
            first_name: "",
            last_name: "",
        });
    });
});

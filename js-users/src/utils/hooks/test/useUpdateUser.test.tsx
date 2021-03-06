import { renderHook } from "@testing-library/react-hooks";
import React from "react";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import { useUpdateUser } from "../useUpdateUser";
import axios from "axios";
import { Router, useLocation } from "react-router";
import { createMemoryHistory } from "history";

jest.mock("axios");
describe("useUpdateUser", () => {
    it("should be successful with the mutation if 200 response", async () => {
        const queryClient = new QueryClient();
        const history = createMemoryHistory();
        history.push("/edit/1");
        const wrapper: React.FC = ({ children }) => (
            <Router history={history}>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </Router>
        );
        (axios as jest.Mocked<typeof axios>).put.mockReturnValueOnce(
            Promise.resolve({ data: {} })
        );
        const { result, waitFor } = renderHook(() => useUpdateUser(1, true), {
            wrapper,
        });

        const { result: locationResult } = renderHook(() => useLocation(), {
            wrapper,
        });

        result.current.mutate({ first_name: "" });

        await waitFor(() => result.current.isSuccess);
        expect(result.current.error).toBeNull();
        expect(locationResult.current.pathname).toBe("/");
    });

    it("should return the form errors in the error", async () => {
        const queryClient = new QueryClient();
        const wrapper: React.FC = ({ children }) => (
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        );
        (axios as jest.Mocked<typeof axios>).put.mockReturnValueOnce(
            Promise.reject({
                response: {
                    data: {
                        first_name: ["can't be blank"],
                        last_name: ["can't be blank"],
                    },
                },
            })
        );
        const { result, waitFor } = renderHook(() => useUpdateUser(1), {
            wrapper,
        });

        result.current.mutate({ first_name: "" });

        await waitFor(() => result.current.isError);
        expect(result.current.error).toEqual({
            first_name: ["can't be blank"],
            last_name: ["can't be blank"],
        });
    });
});

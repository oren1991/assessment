import { renderHook } from "@testing-library/react-hooks";
import React from "react";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import { useCreateUser } from "../useCreateUser";
import axios from "axios";

jest.mock("axios");
describe("useCreateUser", () => {
    it("should be successful with the mutation if 200 response", async () => {
        const queryClient = new QueryClient();
        const wrapper: React.FC = ({ children }) => (
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        );
        (axios as jest.Mocked<typeof axios>).post.mockReturnValueOnce(
            Promise.resolve({ data: {} })
        );
        const { result, waitFor } = renderHook(() => useCreateUser(), {
            wrapper,
        });

        result.current.mutate({ first_name: "" });

        await waitFor(() => result.current.isSuccess);
        expect(result.current.error).toBeNull();
    });

    it("should return the form errors in the error", async () => {
        const queryClient = new QueryClient();
        const wrapper: React.FC = ({ children }) => (
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        );
        (axios as jest.Mocked<typeof axios>).post.mockReturnValueOnce(
            Promise.reject({
                data: {
                    first_name: ["can't be blank"],
                    last_name: ["can't be blank"],
                },
            })
        );
        const { result, waitFor } = renderHook(() => useCreateUser(), {
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

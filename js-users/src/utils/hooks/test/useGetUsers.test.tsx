import { renderHook } from "@testing-library/react-hooks";
import React from "react";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import { useGetUser } from "../useGetUser";
import axios from "axios";
import { User } from "../../../custom";

jest.mock("axios");
describe("useGetUses", () => {
    it("should return the data coming from axios when success", async () => {
        const queryClient = new QueryClient();
        const wrapper: React.FC = ({ children }) => (
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        );
        const dummyUsers: User = { first_name: "dummy", last_name: "dummy" };
        (axios as jest.Mocked<typeof axios>).get.mockReturnValueOnce(
            Promise.resolve({ data: dummyUsers })
        );
        const { result, waitFor } = renderHook(() => useGetUser("1"), {
            wrapper,
        });

        await waitFor(() => result.current.isSuccess);
        expect(result.current.data).toEqual(dummyUsers);
    });

    it("should return undefined when failed", async () => {
        const queryClient = new QueryClient();
        const wrapper: React.FC = ({ children }) => (
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        );
        (axios as jest.Mocked<typeof axios>).get.mockReturnValue(
            Promise.reject()
        );
        const { result, waitFor } = renderHook(() => useGetUser("1"), {
            wrapper,
        });
        await waitFor(() => {
            return result.current.isError;
        });
        expect(result.current.data).toBeUndefined();
    });
});

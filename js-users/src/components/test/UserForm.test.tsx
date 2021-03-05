import { fireEvent, render, screen } from "@testing-library/react";
import { UserForm } from "../UserForm";

const mockedMutation = {
    error: null,
    mutate: jest.fn(),
};
beforeEach(() => {
    render(
        <UserForm
            user={{
                first_name: "this is a random name",
                last_name: "this is a random last name",
            }}
            mutation={mockedMutation}
        ></UserForm>
    );
});
describe("<UserForm>", () => {
    it("should render", async () => {
        const firstName = await screen.findByText(/First name:/);
        const lastName = await screen.findByText(/Last name:/);
        const submitButton = await screen.findByText(/Submit/);

        expect(firstName).toBeInTheDocument();
        expect(lastName).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    it("should prepopulate fields", async () => {
        const firstNameInput = (await screen.findByTestId(
            "first-name"
        )) as HTMLInputElement;
        const lastNameInput = (await screen.findByTestId(
            "last-name"
        )) as HTMLInputElement;

        expect(firstNameInput.value).toEqual("this is a random name");
        expect(lastNameInput.value).toEqual("this is a random last name");
    });

    it("should trigger mutation when clicked submit", async () => {
        const submitButton = await screen.findByText(/Submit/);
        await fireEvent.click(submitButton);
        expect(mockedMutation.mutate).toBeCalled();
    });

    it("should set first name", async () => {
        const firstNameInput = (await screen.findByTestId(
            "first-name"
        )) as HTMLInputElement;
        fireEvent.change(firstNameInput, {
            target: { value: "random first name" },
        });
        expect(firstNameInput.value).toBe("random first name");
    });

    it("should set last name", async () => {
        const lastNameInput = (await screen.findByTestId(
            "last-name"
        )) as HTMLInputElement;
        fireEvent.change(lastNameInput, {
            target: { value: "random last name" },
        });
    });
});

import { fireEvent, render, screen } from "@testing-library/react";
import { UserForm } from "../UserForm";

describe("<UserForm>", () => {
    const mockedMutation = {
        error: {},
        isLoading: false,
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
    it("should render", async () => {
        const firstName = await screen.findByText(/First name/);
        const lastName = await screen.findByText(/Last name/);
        const submitButton = await screen.findByText(/Save/);

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
        const submitButton = await screen.findByText(/Save/);
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

it("should render error when mutate has error object", async () => {
    const mockedMutation = {
        error: { first_name: ["baj", "van"], last_name: ["ezzel", "is"] },
        isLoading: false,
        mutate: jest.fn(),
    };
    render(
        <UserForm
            user={{
                first_name: "this is a random name",
                last_name: "this is a random last name",
            }}
            mutation={mockedMutation}
        ></UserForm>
    );
    const submitButton = await screen.findByText(/Save/);
    fireEvent.click(submitButton);

    const firstName = await screen.findByText(/First name/);
    const lastName = await screen.findByText(/Last name/);
    expect(firstName).toHaveTextContent("baj, van");
    expect(lastName).toHaveTextContent("ezzel, is");
});

it("should render that it's upating when loading", async () => {
    const mockedMutation = {
        error: null,
        isLoading: true,
        mutate: jest.fn(),
    };
    render(
        <UserForm
            user={{
                first_name: "this is a random name",
                last_name: "this is a random last name",
            }}
            mutation={mockedMutation}
        ></UserForm>
    );

    const updating = await screen.findByText(/Updating user/);
    expect(updating).toBeInTheDocument();
});

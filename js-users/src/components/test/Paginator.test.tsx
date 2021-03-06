import { fireEvent, render, screen } from "@testing-library/react";
import { Paginator } from "../Paginator";

const pageTrigger = jest.fn();
beforeEach(() => {
    render(
        <Paginator<number>
            onPageChange={pageTrigger}
            perPage={5}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        >
            {(items) => items.map((item) => <div key={item}>{item}</div>)}
        </Paginator>
    );
});
describe("<Paginator />", () => {
    it("should render selected number of items", () => {
        const fifthItem = screen.queryByText("5");
        const sixthItem = screen.queryByText("6");
        expect(fifthItem).toBeInTheDocument();
        expect(sixthItem).not.toBeInTheDocument();
    });

    it("should render prev and next buttons", async () => {
        const prevButton = await screen.findByTestId("prev-page");
        const nextButton = await screen.findByTestId("next-page");
        expect(prevButton).toBeInTheDocument();
        expect(nextButton).toBeInTheDocument();
    });

    it("should trigger onPageChange", async () => {
        const prevButton = await screen.findByTestId("prev-page");
        const nextButton = await screen.findByTestId("next-page");

        fireEvent.click(nextButton);
        expect(pageTrigger).toBeCalledWith(2);
        fireEvent.click(nextButton);
        expect(pageTrigger).toBeCalledWith(2); // because it reached max page
        fireEvent.click(prevButton);
        expect(pageTrigger).toBeCalledWith(1);
    });
});

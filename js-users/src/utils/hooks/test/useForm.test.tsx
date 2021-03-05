import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "./../useForm";

describe("useForm", () => {
    it("should update form", () => {
        const { result } = renderHook(() =>
            useForm<{ attr1: string; attr2: string }>({
                attr1: "",
                attr2: "",
            })
        );

        act(() => {
            const [_, setForm] = result.current;
            setForm({ target: { value: "random", name: "attr1" } });
        });
        expect(result.current[0]).toEqual({ attr1: "random", attr2: "" });

        act(() => {
            const [_, setForm] = result.current;
            setForm({ target: { value: "random2", name: "attr2" } });
        });

        expect(result.current[0]).toEqual({
            attr1: "random",
            attr2: "random2",
        });
    });

    it("should throw error if key does not exists", () => {
        const { result } = renderHook(() =>
            useForm<{ attr1: string; attr2: string }>({
                attr1: "",
                attr2: "",
            })
        );

        act(() => {
            const [_, setForm] = result.current;
            setForm({ target: { value: "random", name: "not_exists" } });
        });
        expect(() => result.current[0]).toThrow();
    });
});

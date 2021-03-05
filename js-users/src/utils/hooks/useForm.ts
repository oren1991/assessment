import { useState } from "react";

type setStateProps = {
    target: {
        name: string;
        value: string | number;
    };
};
export const useForm = <T>(object: T) => {
    const [state, setState] = useState(object);

    const setFormValue: (e: setStateProps) => void = (e: setStateProps) => {
        setState((state: T) => {
            if (!Object.keys(state).includes(e.target.name)) {
                throw Error("Key does not exist");
            }
            return { ...state, [e.target.name]: e.target.value };
        });
    };
    const result: [T, (e: setStateProps) => void] = [state, setFormValue];
    return result;
};

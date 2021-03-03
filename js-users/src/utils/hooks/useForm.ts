import React, { useState } from "react";

export const useForm = <T>(object: T) => {
    const [state, setState] = useState(object);

    const setFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setState((state: T) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };
    const result: [T, (e: React.ChangeEvent<HTMLInputElement>) => void] = [
        state,
        setFormValue,
    ];
    return result;
};

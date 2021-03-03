import React, { useState } from "react";
import { User } from "../custom";
type Props = {
    data: User[];
    basePage?: string | null;
    nextPage: (
        page: number,
        setPage: React.Dispatch<React.SetStateAction<number>>,
        maxPage: number
    ) => void;
    prevPage: (
        page: number,
        setPage: React.Dispatch<React.SetStateAction<number>>,
        minPage: number
    ) => void;
    children: (props: User[]) => React.ReactNode;
};
export const Paginator: React.FC<Props> = ({
    data,
    children,
    basePage,
    nextPage,
    prevPage,
}) => {
    const startPage = basePage ? parseInt(basePage) : 1;
    const [page, setPage] = useState<number>(isNaN(startPage) ? 1 : startPage);
    const currentUsers = data.slice(10 * (page - 1), 10 + (page - 1) * 10);

    const handleNextPage = (
        event: React.MouseEvent<Element, MouseEvent>
    ): void => {
        nextPage(page, setPage, data.length / 10);
    };

    const handlePrevPage = (
        event: React.MouseEvent<Element, MouseEvent>
    ): void => {
        prevPage(page, setPage, 1);
    };

    return (
        <div>
            {currentUsers ? children(currentUsers) : "empty"}
            <button onClick={handlePrevPage}>prev</button>
            <button onClick={handleNextPage}>next</button>
            {page}
        </div>
    );
};

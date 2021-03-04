import React, { useState } from "react";
import { User } from "../custom";
type Props = {
    data: User[];
    basePage?: string | null;
    onPageChange?: (page: number) => void;
    children: (props: User[]) => React.ReactNode;
};
export const Paginator: React.FC<Props> = ({
    data,
    children,
    basePage,
    onPageChange,
}) => {
    const startPage = basePage ? parseInt(basePage) : 1;
    const [page, setPage] = useState<number>(isNaN(startPage) ? 1 : startPage);
    const currentUsers = data.slice(10 * (page - 1), 10 + (page - 1) * 10);

    const handleNextPage = (
        event: React.MouseEvent<Element, MouseEvent>
    ): void => {
        setPage((page) => {
            const newPage = Math.min(page + 1, data.length / 10);
            onPageChange && onPageChange(newPage);
            return newPage;
        });
    };

    const handlePrevPage = (
        event: React.MouseEvent<Element, MouseEvent>
    ): void => {
        setPage((page) => {
            const newPage = Math.max(page - 1, 1);
            onPageChange && onPageChange(newPage);
            return newPage;
        });
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

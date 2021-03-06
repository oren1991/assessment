import React, { PropsWithChildren, useState } from "react";
import styled from "styled-components";
type Props<T> = {
    data: T[];
    basePage?: string | null;
    perPage: number;
    onPageChange?: (page: number) => void;
    children: (props: T[]) => React.ReactNode;
};
const PaginatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Paginator = <T,>({
    data,
    children,
    basePage,
    perPage,
    onPageChange,
}: PropsWithChildren<Props<T>>) => {
    const startPage = basePage ? parseInt(basePage) : 1;
    const [page, setPage] = useState<number>(isNaN(startPage) ? 1 : startPage);
    const currentItems = data.slice(
        perPage * (page - 1),
        perPage + (page - 1) * perPage
    );

    const handleNextPage = (
        event: React.MouseEvent<Element, MouseEvent>
    ): void => {
        const newPage = Math.min(page + 1, Math.ceil(data.length / perPage));
        setPage(newPage);
        onPageChange && onPageChange(newPage);
    };

    const handlePrevPage = (
        event: React.MouseEvent<Element, MouseEvent>
    ): void => {
        const newPage = Math.max(page - 1, 1);
        setPage(newPage);
        onPageChange && onPageChange(newPage);
    };

    return (
        <PaginatorContainer>
            {currentItems ? children(currentItems) : "empty"}
            <button data-testid="prev-page" onClick={handlePrevPage}>
                prev
            </button>
            {page}
            <button data-testid="next-page" onClick={handleNextPage}>
                next
            </button>
        </PaginatorContainer>
    );
};

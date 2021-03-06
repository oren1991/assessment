import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
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

const PaginatorNavigator = styled.div`
    height: 100px;
    width: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 450px) {
        width: 80%;
    }
`;

const PaginatorButton = styled.button`
    display: block;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    :hover {
        background-color: white;
        cursor: pointer;
    }
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
            <PaginatorNavigator>
                {" "}
                <PaginatorButton
                    data-testid="prev-page"
                    onClick={handlePrevPage}
                >
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        size="lg"
                    ></FontAwesomeIcon>
                </PaginatorButton>
                {page}
                <PaginatorButton
                    data-testid="next-page"
                    onClick={handleNextPage}
                >
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        size="lg"
                    ></FontAwesomeIcon>
                </PaginatorButton>
            </PaginatorNavigator>
        </PaginatorContainer>
    );
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { PropsWithChildren, useState } from "react";
import {
    PaginatorButton,
    PaginatorContainer,
    PaginatorNavigator,
} from "./style/Paginator.styled";
type Props<T> = {
    data: T[];
    basePage?: string | null;
    perPage: number;
    isLoading?: boolean;
    onPageChange?: (page: number) => void;
    children: (props: T[]) => React.ReactNode;
};

export const Paginator = <T,>({
    data,
    children,
    basePage,
    perPage,
    isLoading,
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
        <PaginatorContainer isLoading={isLoading}>
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

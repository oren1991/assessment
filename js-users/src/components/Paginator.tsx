import React, { useState } from "react";

type Props = {
    data: User[];
    children: (props: User[]) => React.ReactNode;
};
export const Paginator = ({ data, children }: Props) => {
    const [page, setPage] = useState<number>(0);
    const currentUsers = data.slice(page, 10 + page);

    const handleNextPage = (
        event: React.MouseEvent<Element, MouseEvent>
    ): void => {
        setPage((page) => page + 10);
    };
    return (
        <div>
            {currentUsers ? children(currentUsers) : "empty"}

            <button onClick={handleNextPage}>next</button>
        </div>
    ) as JSX.Element;
};

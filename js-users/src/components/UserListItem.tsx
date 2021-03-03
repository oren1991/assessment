type Props = {
    children: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const UserListItem = ({ children, onClick }: Props) => {
    return (<div onClick={onClick}>{children}</div>) as JSX.Element;
};

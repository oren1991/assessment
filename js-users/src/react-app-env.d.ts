/// <reference types="react-scripts" />

interface User {
    id: number;
    first_name: string;
    last_name: string;
    status: "active" | "locked";
    created_at: string;
    updated_at: string;
}

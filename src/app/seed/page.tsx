"use client"

import { api } from "@/trpc/react";
import { signOut } from "next-auth/react";

export default function Page() {
    const { mutate: populateMoviesTable } = api.movies.populateMoviesTable.useMutation();

    return (
        <div>
            <button onClick={() => populateMoviesTable()}>Populate Movies Table</button>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    )
}
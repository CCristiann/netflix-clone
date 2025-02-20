"use client"

import { api } from "@/trpc/react"
import MovieCard from "./MovieCard"
import { Skeleton } from "@/components/ui/skeleton"

export default function MoviesReel() {
    const { data: movies, isLoading } = api.movies.getMovies.useQuery()

    return (
        <section id="movies-reel" className="flex flex-col gap-y-6">
            <div className="w-full flex justify-between items-center">
            <h1 className="text-2xl font-bold">Movies</h1>
            {isLoading ? (
                <Skeleton className="w-32 h-12 rounded-lg" />
            ) : movies && (
                <span>{movies.length} results</span>
            )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {isLoading ? (
                <>
                {Array.from({ length: 8 }).map((_, i) => (
                    <MovieCard.Skeleton key={i} />
                ))}
                </>
            ) : movies?.length === 0 ? (
                <div>No movies found</div>
            ) : (
                <>
                {movies?.map((movie, i) => (
                    <MovieCard key={i} movie={movie} />
                ))}
                </>
            )}
            </div>
        </section>
    )
}
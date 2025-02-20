import { createTRPCRouter, publicProcedure } from "../../trpc";
import { moviesService } from "./service/movies.service";

export const moviesRouter = createTRPCRouter({
    getMovies: publicProcedure.query(({ ctx }) => {
        return moviesService.getMovies();
    }),
    populateMoviesTable: publicProcedure.mutation(({ ctx }) => {
        return moviesService.populateMoviesTable();
    }),
})
import { db } from "@/server/db";
import { TRPCError } from "@trpc/server";

class MoviesService {
  async populateMoviesTable() {
    await db.movie.createMany({
      data: [
        {
          title: "Flash",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          trailerVideo: "https://youtu.be/hebWYacbdvc?si=iNs1OlXA6j61eCEs",
          movieVideo: "https://youtu.be/hebWYacbdvc?si=iNs1OlXA6j61eCEs",
          thumbnailUrl:
            "https://raw.githubusercontent.com/ratasi/images-netflix-clone/refs/heads/main/movies/movie-1.webp",
          genres: ["Drama", "Family", "Action"],
          duration: "1h 20 min",
        },
        {
          title: "Los feos",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          trailerVideo: "https://youtu.be/1S3CH69dSWg?si=Gv-k5JEcuk6hIguw",
          movieVideo: "https://youtu.be/1S3CH69dSWg?si=Gv-k5JEcuk6hIguw",
          thumbnailUrl:
            "https://raw.githubusercontent.com/ratasi/images-netflix-clone/refs/heads/main/movies/movie-2.webp",
          genres: ["Drama", "Family", "Action"],
          duration: "2h 5 min",
        },
        {
          title: "Karate Kid",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          trailerVideo: "https://youtu.be/r_8Rw16uscg?si=mSTx4uyLKU-xRH4T",
          movieVideo: "https://youtu.be/r_8Rw16uscg?si=mSTx4uyLKU-xRH4T",
          thumbnailUrl:
            "https://raw.githubusercontent.com/ratasi/images-netflix-clone/refs/heads/main/movies/movie-3.webp",
          genres: ["Drama", "Family", "Action"],
          duration: "1h 10 min",
        },
        {
          title: "Super detective en Hollywood",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          trailerVideo: "https://youtu.be/1UV-lUZIyQk?si=ZowIke7IN8QaJIyf",
          movieVideo: "https://youtu.be/1UV-lUZIyQk?si=ZowIke7IN8QaJIyf",
          thumbnailUrl:
            "https://raw.githubusercontent.com/ratasi/images-netflix-clone/refs/heads/main/movies/movie-4.webp",
          genres: ["Drama", "Family", "Action"],
          duration: "2h 10 min",
        },
        {
          title: "Fracture",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          trailerVideo: "https://youtu.be/UG1Lxnn8Qa8?si=IbWiaqtsDHXP2Z_L",
          movieVideo: "https://youtu.be/UG1Lxnn8Qa8?si=IbWiaqtsDHXP2Z_L",
          thumbnailUrl:
            "https://raw.githubusercontent.com/ratasi/images-netflix-clone/refs/heads/main/movies/movie-5.webp",
          genres: ["Drama", "Family", "Action"],
          duration: "1h 50 min",
        },
        {
          title: "Spiderman",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          trailerVideo: "https://youtu.be/rk-dF1lIbIg?si=h9XMfVNyWWhHENk7",
          movieVideo: "https://youtu.be/rk-dF1lIbIg?si=h9XMfVNyWWhHENk7",
          thumbnailUrl:
            "https://raw.githubusercontent.com/ratasi/images-netflix-clone/refs/heads/main/movies/movie-6.webp",
          genres: ["Action", "Family", "Marvel"],
          duration: "2h 30 min",
        },
        {
          title: "Al filo del mañana",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          trailerVideo: "https://youtu.be/Qd0_qYIhMZA?si=uLfjQRBuRG88bZC3",
          movieVideo: "https://youtu.be/Qd0_qYIhMZA?si=uLfjQRBuRG88bZC3",
          thumbnailUrl:
            "https://raw.githubusercontent.com/ratasi/images-netflix-clone/refs/heads/main/movies/movie-7.webp",
          genres: ["Action", "Family", "Marvel"],
          duration: "1h 35 min",
        },
        {
          title: "Top Gun",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          trailerVideo: "https://youtu.be/zmFdhZ6gyUM?si=RZGSU3cXyuSOYdTJ",
          movieVideo: "https://youtu.be/zmFdhZ6gyUM?si=RZGSU3cXyuSOYdTJ",
          thumbnailUrl:
            "https://raw.githubusercontent.com/ratasi/images-netflix-clone/refs/heads/main/movies/movie-8.webp",
          genres: ["Action", "Family", "Marvel"],
          duration: "2h 35 min",
        },
        {
          title: "Jack Reacher",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          trailerVideo: "https://youtu.be/UwLsJ54wa6w?si=mIT63FFSCkUaOpLj",
          movieVideo: "https://youtu.be/UwLsJ54wa6w?si=mIT63FFSCkUaOpLj",
          thumbnailUrl:
            "https://raw.githubusercontent.com/ratasi/images-netflix-clone/refs/heads/main/movies/movie-9.webp",
          genres: ["Action", "Family", "Marvel"],
          duration: "1h 50 min",
        },
        {
          title: "Sonic",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          trailerVideo: "https://youtu.be/XPqAai3WBag?si=v9YFDIK0EcHBnS4I",
          movieVideo: "https://youtu.be/XPqAai3WBag?si=v9YFDIK0EcHBnS4I",
          thumbnailUrl:
            "https://raw.githubusercontent.com/ratasi/images-netflix-clone/refs/heads/main/movies/movie-10.webp",
          genres: ["Action", "Family", "Marvel"],
          duration: "2h 05 min",
        },
      ],
    });
  }

  async getMovies() {
    try {
      const movies = await db.movie.findMany();
      return movies;
    } catch (err) {
      if (err instanceof TRPCError) {
        throw new TRPCError({
          code: err.code,
          message: err.message || "Something went wrong",
        });
      } else {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }
  }
}

export const moviesService = new MoviesService();

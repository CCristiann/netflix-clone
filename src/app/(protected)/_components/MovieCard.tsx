import { Movie } from "@prisma/client";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Skeleton } from "@/components/ui/skeleton";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <HoverCard openDelay={200} closeDelay={200}>
      <HoverCardTrigger>
        <Image
          src={movie.thumbnailUrl}
          alt={movie.title}
          width={200}
          height={300}
          className="aspect-video w-full rounded-xl"
        />
      </HoverCardTrigger>
      <HoverCardContent className="p-4">
        <h2 className="text-xl font-bold">{movie.title}</h2>
        <p className="text-muted-foreground">{movie.description}</p>
      </HoverCardContent>
    </HoverCard>
  );
}

MovieCard.Skeleton = function MovieCardSkeleton() {
    return (
        <Skeleton className="w-full h-full aspect-video rounded-xl" />
    )
}

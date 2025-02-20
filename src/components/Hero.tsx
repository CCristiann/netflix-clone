import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <div className="absolute left-0 top-0 -z-10 h-28 w-screen bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
      <div className="absolute left-0 top-0 -z-10 h-screen w-screen bg-black/60"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-28 w-screen bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative -z-20 h-full w-full">
          <Image src={"/netflix-hero.jpg"} fill alt="Netflix Hero" />
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-5xl font-bold text-background dark:text-foreground text-center">
          Unlimited movies, TV<br /> shows, and more
        </h1>
      </div>
    </div>
  );
}

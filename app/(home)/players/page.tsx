"use client";

import Image from "next/image";
import Footer from "../footer";
import Link from "next/link";

interface Player {
  id: number;
  name: string;
  position: string;
  team: string;
  image: string;
}

const players: Player[] = [
  {
    id: 1,
    name: "Michelle Chu",
    position: "Forward",
    team: "Team A",
    image: "/telu9.jpg",
  },
  {
    id: 2,
    name: "Tony Eades",
    position: "Midfielder",
    team: "Team B",
    image: "/telu9.jpg",
  },
  {
    id: 3,
    name: "Jason Feller",
    position: "Defender",
    team: "Team C",
    image: "/telu9.jpg",
  },
  {
    id: 4,
    name: "John Smith",
    position: "Goalkeeper",
    team: "Team D",
    image: "/telu9.jpg",
  },
  {
    id: 5,
    name: "Alex Murphy",
    position: "Forward",
    team: "Team E",
    image: "/telu9.jpg",
  },
  {
    id: 6,
    name: "Sarah Lin",
    position: "Midfielder",
    team: "Team F",
    image: "/telu9.jpg",
  },
  {
    id: 7,
    name: "James Lee",
    position: "Defender",
    team: "Team G",
    image: "/telu9.jpg",
  },
  {
    id: 8,
    name: "Chris Johnson",
    position: "Goalkeeper",
    team: "Team H",
    image: "/telu9.jpg",
  },
  {
    id: 9,
    name: "Lucas Brown",
    position: "Forward",
    team: "Team I",
    image: "/telu9.jpg",
  },
  {
    id: 10,
    name: "Emily White",
    position: "Midfielder",
    team: "Team J",
    image: "/telu9.jpg",
  },
  {
    id: 11,
    name: "Michael Black",
    position: "Defender",
    team: "Team K",
    image: "/telu9.jpg",
  },
  {
    id: 12,
    name: "Sophia Green",
    position: "Forward",
    team: "Team L",
    image: "/telu9.jpg",
  },
  {
    id: 13,
    name: "Olivia Blue",
    position: "Midfielder",
    team: "Team M",
    image: "/telu9.jpg",
  },
  {
    id: 14,
    name: "David Gray",
    position: "Defender",
    team: "Team N",
    image: "/telu9.jpg",
  },
  {
    id: 15,
    name: "Eva Red",
    position: "Goalkeeper",
    team: "Team O",
    image: "/telu9.jpg",
  },
  {
    id: 16,
    name: "Daniel Pink",
    position: "Forward",
    team: "Team P",
    image: "/telu9.jpg",
  },
  {
    id: 17,
    name: "Amelia Yellow",
    position: "Midfielder",
    team: "Team Q",
    image: "/telu9.jpg",
  },
  {
    id: 18,
    name: "Jackson White",
    position: "Defender",
    team: "Team R",
    image: "/telu9.jpg",
  },
  {
    id: 19,
    name: "Mia Blue",
    position: "Goalkeeper",
    team: "Team S",
    image: "/telu9.jpg",
  },
  {
    id: 20,
    name: "Nathan Brown",
    position: "Forward",
    team: "Team T",
    image: "/telu9.jpg",
  },
  // Add more players as needed
];

export default function PlayersPage() {
  return (
    <section className="text-black bg-yellow-100 min-h-screen">
      <div className="flex items-center fixed top-4 left-0">
        <Link href="/">
          <Image
            src="/telu.png"
            alt="logo"
            className="rounded-xl"
            width={70}
            height={70}
          />
        </Link>
      </div>
      <div className="p-4">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-yellow-500 text-4xl mt-12 lg:mt-2 font-bold uppercase mb-4 text-center">
            Our Players
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            {players.map((player) => (
              <div
                key={player.id}
                className="relative group w-full cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={player.image}
                    alt={player.name}
                    className="rounded-xl"
                    width={800}
                    height={1200}
                  />
                  <div className=" text-center p-8">
                    <h3 className="text-yellow-500 text-lg font-bold uppercase">
                      {player.name}
                    </h3>
                    <p className="text-gray-800 text-sm">{player.position}</p>
                    <p className="text-gray-800 text-sm">Team: {player.team}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

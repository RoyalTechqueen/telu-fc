"use client";

import Image from "next/image";
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
];

export default function Teams() {
  return (
    <section className=" scroll-mt-24 text-white py-16" id="players">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <div className="relative text-yellow-500 font-bold text-6xl opacity-20 uppercase">
          <h1>OUR Players</h1>
        </div>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {players.slice(0, 8).map((player) => (
            <div key={player.id} className="relative group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg transform group-hover:rotate-1 transition-transform duration-300">
                <Image
                  src={player.image}
                  alt={player.name}
                  className="rounded-xl"
                  width={800}
                  height={1200}
                />
                <div className="bg-darkGray py-4">
                  <h3 className="text-yellow-500 text-lg font-bold uppercase">
                    {player.name}
                  </h3>
                  <p className="text-gray-800 text-sm">{player.position}</p>
                  <p className="text-gray-800 text-sm">Team: {player.team}</p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-lg border-4 border-yellow-500 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        <Link href="/players">
          <button className="mt-8 px-6 py-3 bg-yellow-500 text-white rounded-lg">
            See More
          </button>
        </Link>
      </div>
    </section>
  );
}

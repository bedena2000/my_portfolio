import Link from "next/link";
import React from "react";

interface title {
  id: number;
  content: string;
  path: string;
}

const titles: title[] = [
  {
    id: 1,
    content: "About me",
    path: ""
  },
  {
    id: 2,
    content: "Education",
    path: "education"
  },
  {
    id: 3,
    content: "Projects",
    path: "project"
  },
];

export default function Header() {
  return (
    <header className="flex justify-center items-center p-12 gap-12">
      {titles.map((item) => (
        <Link href={`/${item.path}`} key={item.id} className="text-white sm:text-xl text-xs font-medium">
          {item.content}
        </Link>
      ))}
    </header>
  );
}

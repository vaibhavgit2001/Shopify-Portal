import React from "react";

const people = [
  {
    name: "Culture",
    booksold: "10",
    role: "Book1",
  },
  {
    name: "Investing",
    booksold: "50",
    role: "Book2",
  },
  {
    name: "the Hobbit",
    booksold: "30",
    role: "Book3",
  },
  {
    name: "inspiring",
    booksold: "60",
    role: "Book4",
  },
  {
    name: "Great-Author",
    booksold: "20",
    role: "Book5",
  },
  {
    name: "Vivekanand",
    booksold: "30",
    role: "Book6",
  },
];

export default function Sellauthors() {
  return (
    <div className="xl:grid-cols-3">
      <ul
        role="list"
        className="gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
      >
        {people.map((person) => (
          <li key={person.name}>
            <div className="flex justify-between items-center gap-x-6 mb-4">
              <div className="flex">
                <img src="/author-icon.png" width={30} height={20} />
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 pl-4">
                  {person.name}
                </h3>
              </div>
              <h3 className="text-md item-center mb-2">
                <span class="text-[#A020F0]">{person.booksold} Books</span> Sold
              </h3>
            </div>
            <div></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

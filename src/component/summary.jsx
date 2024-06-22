import React from "react";

const people = [
  {
    counter: "260",
    booksold: "30",
    role: "Title Listed",
  },
  {
    counter: "15",
    booksold: "30",
    role: "Title Sold",
  },
  {
    counter: "1307",
    booksold: "30",
    role: "Book Sold",
  },
];

export default function Summary() {
  return (
    <div className="xl:grid-cols-3">
      <ul
        role="list"
        className="flex gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 p-4 h-60 items-center"
      >
        {people.map((person) => (
          <li key={person.counter}>
            <div className="items-center gap-x-6">
              <div>
                <h3 className="text-5xl font-semibold leading-7 tracking-tight text-gray-900 mb-5">
                  {person.counter}
                </h3>
                <div className="text-center">
                  <p className="text-sm font-semibold leading-6">
                    {person.role}
                  </p>
                  <h3 className="flex justify-center mb-2 text-[12px]">
                    <span className="text-[#A020F0]">
                      {person.booksold} Books
                    </span>{" "}
                    Sold
                  </h3>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

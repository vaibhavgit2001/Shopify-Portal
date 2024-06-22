import React from 'react'

const people = [
    {
      name: 'Culture',
      booksold:'30',
      role: 'Book1',
      imageUrl:
        'https://www.kenning.shop/cdn/shop/products/J-3093.jpg?v=1700764484&width=640',
    },
    {
        name: 'Investing',
        booksold:'30',
        role: 'Book2',
        imageUrl:
          'https://www.kenning.shop/cdn/shop/products/J-1954.jpg?v=1700763106&width=640',
      },
      {
        name: 'Vivekanand',
        booksold:'30',
        role: 'Book3',
        imageUrl:
          'https://www.kenning.shop/cdn/shop/products/61mmTB6viGL._AC_UY436_FMwebp_QL65.webp?v=1700510815&width=240',
      },
  ]
  
  export default function Selltitles() {
    return (
        <div className="xl:grid-cols-3">
          <ul role="list" className="flex gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="items-center gap-x-6">
                    <h3 className='text-md item-center mb-2'><span class="text-[#A020F0]">{person.booksold} Books</span> Sold</h3>
                  <img className="sellertitleimg h-45 w-25" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
    )
  }
  
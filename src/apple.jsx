import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [fruits] =useState([
    "apple",
    "banana",
    "apricot",
    "watermelon",
    "melon",
    "mango",
    "orange",
    "pineapple",
    "strawberry",
    "grape",
    "cherry"
  ]);

  const filteredArray = fruits.filter(fruit => fruit.toLowerCase().includes(query));

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col space-y-4 border border-green-500 px-3 py-4">
          <input
            className="border border-gray-480 rounded"
            placeholder="Search.."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div>
          <ul className="flex flex-col gap-1">
            {filteredArray.length > 0 ? (
              filteredArray.map((fruit) => (
                <li key={fruit} className="border border-blue-500 border-dotted">
                  {fruit}
                </li>
              ))
            ) : (
              <li>Record not found!</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

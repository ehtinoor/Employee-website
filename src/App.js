import React, { useState } from 'react';
import './App.css';

const data = [
  {
    user: {
      name: 'ehtisham ali',
      email: 'ehtisham@example.com',
      addresses: ['123 Maple St', 'Apartment 4B']
    },
    employees: [
      { id: 1, name: 'Hamza Hassan', salary: 50000, company: 'TechCorp' },
      { id: 2, name: 'hammad Saleem', salary: 55000, company: 'Innovate Ltd' },
      { id: 3, name: 'Arsalan Ahmad', salary: 60000, company: 'Creative Inc' },
      { id: 4, name: 'Zain Ali', salary: 65000, company: 'Global Solutions' },
      { id: 5, name: 'Imran khan', salary: 70000, company: 'Future Enterprises' },
      { id: 6, name: 'Murad Saeed', salary: 72000, company: 'TechCorp' },
      { id: 7, name: 'Abid khan', salary: 75000, company: 'Innovate Ltd' },
      { id: 8, name: 'Hashir Khan', salary: 77000, company: 'Creative Inc' },
      { id: 9, name: 'Muneeb Shah', salary: 80000, company: 'Global Solutions' },
      { id: 10, name: 'Jhon Wick', salary: 85000, company: 'Future Enterprises' }
    ]
  }
];

const App = () => {
    const [currentView, setCurrentView] = useState('home');
    const [searchTerm, setSearchTerm] = useState('');
  
    const { user, employees } = data[0];
  
    const filteredEmployees = employees.filter(employee =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="flex flex-col h-screen">
        {/* Navbar */}
        <nav className="bg-blue-800 text-white h-20 flex items-center px-6">
          <h1 className="text-xl circle 2px black font-bold">EA</h1>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ml-auto p-2 border rounded-md focus:outline-none"
          />
        </nav>
  
        <div className="flex flex-1 bg-green-800">
          {/* Sidebar */}
          <aside className="w-60 bg-gray-100 p-4 shadow-md">
            <button
              onClick={() => setCurrentView('home')}
              className="block w-full py-2 mb-2 bg-gray-300 rounded-md hover:bg-gray-400"
            >
              Home
            </button>
            <button
              onClick={() => setCurrentView('employees')}
              className="block w-full py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            >
              Employees
            </button>
          </aside>
  
          {/* Content */}
          <div className="flex-1 p-6 black">
            {currentView === 'home' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">User</h2>
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 p-2">Name</th>
                      <th className="border border-gray-300 p-2">Email</th>
                      <th className="border border-gray-300 p-2">Addresses</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">{user.name}</td>
                      <td className="border border-gray-300 p-2">{user.email}</td>
                      <td className="border border-gray-300 p-2">{user.addresses.join(', ')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
  
            {currentView === 'employees' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Employees</h2>
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 p-2">ID</th>
                      <th className="border border-gray-300 p-2">Name</th>
                      <th className="border border-gray-300 p-2">Salary</th>
                      <th className="border border-gray-300 p-2">Company</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEmployees.map(employee => (
                      <tr key={employee.id}>
                        <td className="border border-gray-300 p-2">{employee.id}</td>
                        <td className="border border-gray-300 p-2">{employee.name}</td>
                        <td className="border border-gray-300 p-2">{employee.salary}</td>
                        <td className="border border-gray-300 p-2">{employee.company}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default App;
  
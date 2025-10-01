import React from 'react';

export const Button: React.FC<{ onClick: () => void }> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
};

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl">Henri Lehtinen</h1>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <p>&copy; 2023 Henri Lehtinen</p>
    </footer>
  );
};

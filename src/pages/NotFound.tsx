import React from 'react';

const NotFound: React.FC = () => {
  return (
    <main className="flex flex-col justify-center items-center h-screen w-full bg-gray-100">
      <h1 className="text-6xl font-bold mb-4 text-red-600">404</h1>
      <p className="text-2xl mb-6">Oops! Page Not Found.</p>
      <a href="/" className="text-blue-600 hover:underline">
        Go back to Home
      </a>
    </main>
  );
};

export default NotFound;
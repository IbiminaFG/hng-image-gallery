import React from "react";

const Header = ({ handleLogOut, user }) => {
  return (
    <header className="flex justify-between px-5 py-6 sm:px-20 bg-slate-400 text-white">
      <h1 className="text-sm sm:text-xl">
        Welcome, {user && <span>{user.email}</span>}
      </h1>
      <button onClick={handleLogOut} className="text-sm sm:text-md">
        Log Out
      </button>
    </header>
  );
};

export default Header;

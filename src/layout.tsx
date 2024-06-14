import React from 'react';
import { useLocation } from 'react-router';
import { routes } from './routes';
import { IRoute } from './utils/types';
import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

// #region Mock user data
const user = {
  name: 'Juan Mayo',
  avatar: 'https://placehold.co/50x50',
};
// #endregion

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const handleLogOut = () => {};

  return (
    <main className="flex min-h-screen">
      <div className="w-1/5 p-4 flex flex-col justify-between bg-[#f2eae1]">
        <div>
          <div className="flex items-center mb-8">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-bold">{user.name}</h2>
            </div>
          </div>
          <ul className="grid grid-cols-1 gap-4">
            {routes?.map((route: IRoute) => (
              <button
                className="flex w-full"
                disabled={location.pathname === route.href}
                key={route.href}
              >
                <Link
                  to={route.href}
                  className={`flex items-center p-2 rounded-lg hover:bg-yellow-500 hover:text-white w-full disabled:text-white ${
                    location.pathname === route.href // it determines if the route is active
                      ? 'bg-yellow-500 text-white'
                      : 'text-zinc-700'
                  }`}
                >
                  <img
                    src={route.icon}
                    alt={route.text}
                    className="w-6 h-6 mr-2"
                  />

                  {route.text}
                </Link>
              </button>
            ))}
          </ul>
        </div>
        <div>
          <button
            className="flex w-full justify-between px-32 items-center text-zinc-800"
            onClick={handleLogOut}
          >
            Log out <LogOut size={16} />
          </button>
        </div>
      </div>
      {children}
    </main>
  );
}

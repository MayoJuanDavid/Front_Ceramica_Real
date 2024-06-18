import React from 'react';
import { useLocation } from 'react-router';
import { routes } from './routes';
import { IRoute } from './utils/types';
import { Link } from 'react-router-dom';
import { LogOut, UserRound } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

// #region Mock user data
const user = {
  name: 'Juan David Mayo Martins',
};
// #endregion

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const handleLogOut = () => {};

  return (
    <main className="flex min-h-screen">
      <div className="w-1/12 lg:w-1/5 p-4 flex flex-col justify-between bg-[#f2eae1]">
        <div>
          <div className="flex items-center mb-8 lg:gap-4">
            <UserRound className={`size-8 lg:size-12`} />
            <div>
              <h2 className="lg:text-xl font-bold text-sm hidden lg:block">
                {user.name}
              </h2>
            </div>
          </div>
          <ul className="grid grid-cols-1 gap-4">
            {routes?.map((route: IRoute) => (
              <button
                className="flex w-full disabled:pointer-events-none"
                disabled={location.pathname === route.href}
                key={route.href}
              >
                <Link
                  to={route.href}
                  className={`flex items-center p-2 rounded-lg hover:bg-primary text-zinc-800 w-full disabled:text-white gap-4 text-xs lg:text-base ${
                    location.pathname === route.href // it determines if the route is active
                      ? 'bg-primary'
                      : ''
                  }`}
                >
                  {route.icon}

                  <span className="hidden lg:block">{route.text}</span>
                </Link>
              </button>
            ))}
          </ul>
        </div>
        <div>
          <button
            className="flex w-full justify-between lg:px-24 items-center text-zinc-800"
            onClick={handleLogOut}
          >
            <span className="hidden lg:block">Log out</span>
            <LogOut size={16} />
          </button>
        </div>
      </div>
      {children}
    </main>
  );
}

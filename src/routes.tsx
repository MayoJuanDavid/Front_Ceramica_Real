import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Redirect from './pages/redirect';
import { IRoute } from './utils/types';
import Colecciones from './pages/colecciones';
import Piezas from './pages/piezas';
import { Library } from 'lucide-react';
import { Home } from 'lucide-react';
import { FileText } from 'lucide-react';

const DEFAULT_MAIN = '/vajillas';

export const routes: IRoute[] = [
  {
    href: '/vajillas',
    text: 'Vajillas',
    icon: <Home className="size-4" />,
  },
  {
    href: '/colecciones',
    text: 'Colecciones',
    icon: <Library className="size-4" />,
  },
  {
    href: '/piezas',
    text: 'Piezas',
    icon: <FileText className="size-4" />,
  },
];

export const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Redirect to={DEFAULT_MAIN} />,
    errorElement: <Redirect to={DEFAULT_MAIN} />, // TODO: Add a 404 page
  },
  {
    path: '/vajillas',
    element: <Dashboard />,
  },
  {
    path: '/colecciones',
    element: <Colecciones />,
  },
  {
    path: 'piezas',
    element: <Piezas />,
  },
]);

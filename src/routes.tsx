import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Redirect from './pages/redirect';
import { IRoute } from './utils/types';
import Colecciones from './pages/colecciones';
import Piezas from './pages/piezas';

const DEFAULT_MAIN = '/vajillas';

export const routes: IRoute[] = [
  {
    href: '/vajillas',
    text: 'Vajillas',
    icon: 'https://placehold.co/20x20', // TODO: Replace for a real icon
  },
  {
    href: '/colecciones',
    text: 'Colecciones',
    icon: 'https://placehold.co/20x20', // TODO: Replace for a real icon
  },
  {
    href: '/piezas',
    text: 'Piezas',
    icon: 'https://placehold.co/20x20', // TODO: Replace for a real icon
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

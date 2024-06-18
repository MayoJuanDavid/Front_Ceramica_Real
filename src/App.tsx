import { RouterProvider } from 'react-router-dom';
import { BrowserRouter } from './routes';
import { DataProvider } from './contexts/dataContext';

export default function Home() {
  return (
    <DataProvider>
      <RouterProvider router={BrowserRouter} />
    </DataProvider>
  );
}

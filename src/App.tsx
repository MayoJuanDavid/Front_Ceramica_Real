import { RouterProvider } from 'react-router-dom';
import { BrowserRouter } from './routes';
import { DataProvider } from './contexts/dataContext';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <DataProvider>
      <Toaster />
      <RouterProvider router={BrowserRouter} />
    </DataProvider>
  );
}

import { RouterProvider } from 'react-router-dom';
import { BrowserRouter } from './routes';
import { VajillaProvider } from './contexts/vajillaContext';

export default function Home() {
  return (
    <VajillaProvider>
      <RouterProvider router={BrowserRouter} />
    </VajillaProvider>
  );
}

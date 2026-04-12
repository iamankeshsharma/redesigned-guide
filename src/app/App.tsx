import { RouterProvider } from 'react-router';
import { router } from './routes';
import RouteTracker from "./components/RouteTracker";

export default function App() {
  return <>
  <RouteTracker />
  <RouterProvider router={router} />;
  </>
}
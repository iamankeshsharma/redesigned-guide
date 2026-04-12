import { Outlet } from "react-router";
import RouteTracker from "./components/RouteTracker";

export default function AppLayout() {
  return (
    <>
      <RouteTracker />
      <Outlet />
    </>
  );
}
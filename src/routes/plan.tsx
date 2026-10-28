import { createFileRoute } from "@tanstack/react-router";
import TripPlanner from "../pages/TripPlanner";

export const Route = createFileRoute("/plan")({
  component: TripPlanner,
});

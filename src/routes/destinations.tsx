import { createFileRoute } from "@tanstack/react-router";
import Destinations from "../pages/Destinations";

export const Route = createFileRoute("/destinations")({
  component: Destinations,
});

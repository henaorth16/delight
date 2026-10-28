import { createFileRoute } from "@tanstack/react-router";
import Services from "../pages/Services";

export const Route = createFileRoute("/services")({
  component: Services,
});

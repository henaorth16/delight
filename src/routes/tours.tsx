import { createFileRoute } from "@tanstack/react-router";
import Tours from "../pages/Tours";

export const Route = createFileRoute("/tours")({
  component: Tours,
});

import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "../pages/ContactPage";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

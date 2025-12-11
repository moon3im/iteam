// src/app/page.tsx
import { Home } from "@/home/Home";
import AppRouter from "./AppRouter";

export default function Page() {
  return (
    <AppRouter>
      <Home />
    </AppRouter>
  );
}

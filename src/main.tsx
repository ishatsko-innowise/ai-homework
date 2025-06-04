import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Task1 from "./components/task1/index.tsx";
import Task2 from "./components/task2/index.tsx";
import Dashboard from "./components/task3/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/task1",
    Component: Task1,
  },
  {
    path: "/task2",
    Component: Task2,
  },
  {
    path: "/task3",
    Component: Dashboard,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

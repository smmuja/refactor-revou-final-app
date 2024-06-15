import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import "index.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
     <RouterProvider router={routes} />
   </QueryClientProvider>
  </React.StrictMode>
);

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import IsLoggedInProvider from "./hooks/context/is-logged-in/IsLoggedInProvider.tsx";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <IsLoggedInProvider>
      <App />
    </IsLoggedInProvider>
  </QueryClientProvider>
);

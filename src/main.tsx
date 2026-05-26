
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import glfSmallLogo from "@/assets/glfSmallLogo.png";

  const faviconLink = document.createElement("link");
  faviconLink.rel = "icon";
  faviconLink.href = glfSmallLogo;
  faviconLink.type = "image/png";
  document.head.appendChild(faviconLink);

  createRoot(document.getElementById("root")!).render(<App />);
  
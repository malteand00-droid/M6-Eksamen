import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Teams } from "./components/Teams";
import { Training } from "./components/Training";
import { Matches } from "./components/Matches";
import { News } from "./components/News";
import { Membership } from "./components/Membership";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "om-klubben", Component: About },
      { path: "hold", Component: Teams },
      { path: "traening", Component: Training },
      { path: "kampe", Component: Matches },
      { path: "nyheder", Component: News },
      { path: "bliv-medlem", Component: Membership },
      { path: "kontakt", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
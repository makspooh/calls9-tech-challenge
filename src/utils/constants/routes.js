// LAYOUTS
import MainLayout from "../../components/layouts/Main/index";

// PUBLIC PAGES
import MainPage from "../../components/pages/Main/index";

// PUBLIC ROUTES
export const ROOT = "/";
export const MAIN = `${ROOT}main`;

export const PUBLIC_ROUTES = {
  [ROOT]: { element: MainPage, layout: MainLayout },
  [MAIN]: { element: MainPage, layout: MainLayout },
};

import history from "./history";

type Component = () => void;

const createRouter = () => {
  const routeMap = new Map();
  let prevPathname: string | null = null;
  let notFound = () => null;

  const router = {
    addRoutes(url: string, comp: Component) {
      routeMap.set(url, comp);
      return this;
    },
    setNotFound(c: any) {
      notFound = c;
      return this;
    },
    start() {
      history.listen(() => {
        if (window.location.pathname !== prevPathname) {
          const currentRoute = routeMap.get(location.pathname);
          if (currentRoute) {
            currentRoute();
          } else {
            notFound();
          }
        }
      });
    },
  };
  return router;
};

export default createRouter;

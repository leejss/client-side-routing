import history from "./history";
import createPages from "./pages";
import createRouter from "./router";

const root = document.querySelector("#app");

const router = createRouter();
const pages = createPages(root);
const { detail, home, list, notFound } = pages;

const toHomeBtn = document.querySelector('button[data-url="/"]');
toHomeBtn?.addEventListener("click", () => {
  history.push("/");
});
const toListBtn = document.querySelector('button[data-url="/list"]');
toListBtn?.addEventListener("click", () => {
  history.push("/list");
});
const toDetailBtn = document.querySelector('button[data-url="/detail"]');
toDetailBtn?.addEventListener("click", () => {
  history.push("/detail");
});

router
  .addRoutes("/", home)
  .addRoutes("/list", list)
  .addRoutes("/detail", detail)
  .setNotFound(notFound)
  .start();

// Pages
import Post from "../components/Post";
import About from "../pages/About";
import Assignment5 from "../pages/Assignment5";
import CustomHookDemo from "../pages/CustomHookDemo";
import Home from "../pages/Home";
import MemoDemo from "../pages/MemoDemo";
import MountedDemo from "../pages/MountedDemo";
import NotFoundPage from "../pages/NotFoundPage";
import UseCallbackDemo from "../pages/UseCallbackDemo";
import UseContextDemo from "../pages/UseContextDemo";
import UseMemoDemo from "../pages/UseMemoDemo";
import UseReducerDemo1 from "../pages/UseReducerDemo1";
import UseReducerDemo2 from "../pages/UseReducerDemo2";
import UseRefDemo from "../pages/UseRefDemo";
import UseStateDemo from "../pages/UseStateDemo";

// Public routes
const publicRoutes = [
  { path: "assignment-5", component: Assignment5 },
  { path: "use-context", component: UseContextDemo },
  { path: "use-reducer-1", component: UseReducerDemo1 },
  { path: "use-reducer-2", component: UseReducerDemo2 },
  { path: "use-memo", component: UseMemoDemo },
  { path: "use-callback", component: UseCallbackDemo },
  { path: "use-layoutEffect", component: MemoDemo },
  { path: "use-ref", component: UseRefDemo },
  { path: "custom-hook", component: CustomHookDemo },
  { path: null, component: Home, isIndex: true },
  { path: "about", component: About },
  { path: "use-state", component: UseStateDemo },
  { path: "use-effect", component: MountedDemo },
  { path: "posts", childrenRoutes: [{ path: ":id", component: Post }] },
  { path: "*", component: NotFoundPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

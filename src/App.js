import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Details from "./pages/app/details/Details";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Learn from "./pages/app/learn/Learn";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        { index: true, element: <Hero /> },
        {
          path: "/courses",
          children: [
            { index: true, element: <Courses /> },
            { path: ":courseId", element: <Details /> },
          ],
        },
        { path: "/learn/:courseId", element: <Learn /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;

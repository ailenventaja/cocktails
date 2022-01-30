import React, { Suspense, lazy } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import NotFound from "../pages/notFound";
import Layout from "../styles/layout";
import Loader from "../components/Loader";
import paths from "../config/paths";

const Home = lazy(() => import("../pages/home"));
const Random = lazy(() => import("../pages/random"));
const Ingredients = lazy(() => import("../pages/ingredients"));
const Details = lazy(() => import("../pages/details"));
const Categories = lazy(() => import("../pages/categories"));
const Favorites = lazy(() => import("../pages/favorites"));

const Routing = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={paths.RANDOM} element={<Random />} />
            <Route path={paths.INGREDIENTS} element={<Ingredients />} />
            <Route path={paths.DETAILS} element={<Details />} />
            <Route path={paths.CATEGORIES} element={<Categories />} />
            <Route path={paths.FAVORITES} element={<Favorites />} />
            <Route index element={<Home />} />
            {
              // <Route index element={<Home />} />
            }
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default Routing;

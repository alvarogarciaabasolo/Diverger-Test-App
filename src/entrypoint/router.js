import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../pages/home/Home';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/home"
      element={<Home />}
    />
  )
);

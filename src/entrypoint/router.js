import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import { CharacterCard } from '../pages/CharacterCard/CharacterCard';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route
      path="/home"
      element={<Home />}
    />
    <Route
    path="/CharacterCard"
    element={<CharacterCard />}
  />
  </>
  )
);

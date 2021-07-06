import React from 'react';
import './App.css';
import { AdminHomePage } from './pages/AdminHomePage';
import { ApplicationFormPage } from './pages/ApplicationFormPage';
import { CreateTripPage } from './pages/CreateTripPage';
import { HomePage } from './pages/HomePage';
import { ListTripsPage } from './pages/ListTripsPage';
import { LoginPage } from './pages/LoginPage';
import { TripDetailsPage } from './pages/TripDetailsPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <HomePage />
        </Route>
        <Route exact path={'/AdminHomePage'}>
          <AdminHomePage />
        </Route>
        <Route exact path={'/ApplicationFormPage'}>
          <ApplicationFormPage />
        </Route>
        <Route exact path={'/CreateTripPage'}>
          <CreateTripPage />
        </Route>
        <Route exact path={'/ListTripsPage'}>
          <ListTripsPage />
        </Route>
        <Route exact path={'/LoginPage'}>
          <LoginPage />
        </Route>
        <Route exact path={'/TripDetailsPage'}>
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}



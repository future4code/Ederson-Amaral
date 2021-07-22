import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {ListPage} from "../pages/listpage/ListPage"
import { PokedexPage } from "../pages/PokedexPage/PokedexPage";
import { DetailPage } from "../pages/detailpage/DetailPage";
import {HomePage} from "../pages/homepage/HomePage"

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/detail"}>
          <DetailPage />
        </Route>
        <Route exact path={"/lista"}>
          <ListPage />
        </Route>
        <Route exact path={"/pokedex"}>
          <PokedexPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

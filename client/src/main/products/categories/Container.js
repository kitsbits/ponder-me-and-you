import React from "react";
import { Switch, Route } from "react-router-dom";
import Prints from "./PrintsPage";
import Totes from "./TotesPage";

export default class Categories extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/prints" component={Prints} />
                <Route path="/totes" component={Totes} />
            </Switch>
        )
    }
}

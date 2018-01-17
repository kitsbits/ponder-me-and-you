import React from "react";
import glamorous from "glamorous";
import { Switch, Route } from "react-router-dom";
import { mediaQueries } from "../styles/global";

// Components \\
import Navbar from "./Navbar";
import Admin from "./admin/Container";
import Products from "./products/Container";
import Landing from "./landing/Container";
import Sidebar from "./Sidebar";

export default function App() {
    ///////// STYLES \\\\\\\\\\
    const PageContainer = glamorous.div({
        height: "100vh",
        minHeight: "600px",
    });

    const MainContainer = glamorous.div({
        display: "flex",
        flexWrap: "wrap",
    });

    const ContentContainer = glamorous.div({
        marginLeft: "33%",
        marginTop: "200px",
        [mediaQueries.medium]: {
            margin: "300px auto auto auto",
        }
    });
    ////////////////////////////////
    return (
        <PageContainer>
            <Navbar />
            <MainContainer>
                <Sidebar />
                    <ContentContainer>
                        <Switch>
                            <Route exact path="/" component={Landing}/>
                            <Route path="/add-meme" component={Admin}/>
                            <Route path="/meme/:id" component={Products}/>
                        </Switch>
                    </ContentContainer>
            </MainContainer>
        </PageContainer>
    )
}

import React from "react";
import glamorous from "glamorous";
import { mediaQueries } from "../styles/global";

// Components \\
import Navbar from "./Navbar";
import AddMeme from "./addToMemes/Container";
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
    ////////////////////////////////
    return(
        <PageContainer>
            <Navbar />
            <MainContainer>
                <Sidebar />
                <Landing />
            </MainContainer>

        </PageContainer>
    )
}

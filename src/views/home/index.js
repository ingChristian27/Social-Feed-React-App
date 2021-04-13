import React from "react";
import { Header, Footer, Brands, PromoSection, StartSection, SocialWidget } from "../../components/layouts/";

const Home = () => {
    return (
        <>
            <Header />
            <Brands />
            <SocialWidget />
            <PromoSection />
            <StartSection />
            <Footer />
        </>
    );
};

export default Home;

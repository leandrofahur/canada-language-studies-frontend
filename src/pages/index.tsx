import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

// layouts:
import { Hero } from '../layouts/Hero';
import { AboutUs } from '../layouts/AboutUs';
import { WhyPrivateClasses } from '../layouts/WhyPrivateClasses';
import { Reviews } from '../layouts/Reviews';
import { ContactUs } from '../layouts/ContactUs';
import { Footer } from '../layouts/Footer';

// page styles:
import { Container } from './styles';

const Home: NextPage = () => {
    return (
        <Container>
            <Head>
                <title>Canada Language Studies</title>
                <meta name="description" content="English Language" />
                <link rel="icon" href="./images/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Hero />
            <AboutUs />
            <WhyPrivateClasses />
            <Reviews />
            <ContactUs />
            <Footer />
        </Container>
    );
};

export default Home;

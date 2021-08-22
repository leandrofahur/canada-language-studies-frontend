import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Container } from './styles';

const Home: NextPage = () => {
    return (
        <Container>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Hello World</h1>
        </Container>
    );
};

export default Home;

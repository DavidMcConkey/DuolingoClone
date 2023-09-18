import { type AppType } from "next/dist/shared/lib/utils"
import Head from "next/head";

import "~/styles/globals.css";

const MyApp: AppType = ({Component, pageProps}) => {
    return (
        <>
        <Head>
            <title>Duolingo</title>
            <meta 
                name="description"
                content="Duolingo web App Clone made with react!"
            />
            <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Component {...pageProps}/>
            </>
    );
};

export default MyApp;
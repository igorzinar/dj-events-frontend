import React from 'react';
import Head from "next/head";
import {inspect} from "util";
import styles from "../styles/Layout.module.css"

interface IProp {
    title: string;
    keywords: string;
    description: string;
    children: any;
}

const Layout = (data: IProp) => {
    return (
        <div>
            <Head>
                <title>{data.title}</title>
                <meta name="description" content={data.description}/>
                <meta name="keywords" content={data.keywords}/>
            </Head>
<div className={styles.container}>
    {data.children}
</div>

        </div>
    );
};

Layout.defaultProps = {
    title: "DJ Events | Find the hottest parties",
    description: "Find the latest DJ and other musical events",
    keywords: "music, dj, edm, events"
}
export default Layout;
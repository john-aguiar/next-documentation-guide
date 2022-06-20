import Link from "next/link";
import Head from "next/head"
import Script from "next/script";
import Layout  from "../../components/layout";

const firstPost = () => {
    return (
        <>
        <Layout children={any} home={any}>
            <Head>
                    <title>Olá</title>
                </Head>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />
                <Link href="/posts/second">
                    <a> Go to Second </a>
                </Link>
        </Layout>
        </>
    )
}

export default firstPost;
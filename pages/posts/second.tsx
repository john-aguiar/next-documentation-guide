import Link from "next/link";

const second = () => {


    return (
        <>
        <h1>
            <Link href="/posts/first-post">
                <a> Go to Home </a>
            </Link>
        </h1>
        </>
    )
}

export default second;
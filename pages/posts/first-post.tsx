import Link from "next/link";

const firstPost = () => {
    return (
        <>
        <h1>
            <Link href="/posts/first-post">
                <a> Go to Second </a>
            </Link>
        </h1>
        </>
    )
}

export default firstPost;


function HomePage() {
    return (
        <>
            <h1>welcome!</h1>
            <nav>

                <Link to="/blog"> <span>Blog</span></Link>
                <Link to="/about"> <span>About</span></Link>

            </nav>
        </>

    )

}
export default HomePage;
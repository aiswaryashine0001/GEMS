const Navbar = () => {
    return ( 
        <nav className="nav">
            <a href="/" className="site-title">
                Site Name
            </a>
            <ul>
                <li className="active">
                    <a href="/any">Any</a>
                </li>
                <li>
                    <a href="/who">who</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;

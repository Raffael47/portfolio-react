import "../CSS/navStyles.css"

export default function Navigation () {
    return (
        <nav class="navbar">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a href="#" class="nav-link">
                    {/* <!-- <svg></svg> --> */}
                    <span class="link-text">Home</span>
                </a>
            </li>

            <li class="nav-item">
                <a href="#" class="nav-link">
                    {/* <!-- <svg></svg> --> */}
                    <span class="link-text">About</span>
                </a>
            </li>

            <li class="nav-item">
                <a href="#" class="nav-link">
                    {/* <!-- <svg></svg> --> */}
                    <span class="link-text">Portfolio</span>
                </a>
            </li>

            <li class="nav-item">
                <a href="#" class="nav-link">
                    {/* <!-- <svg></svg> --> */}
                    <span class="link-text">Contact</span>
                </a>
            </li>

        </ul>
    </nav>
    )
}
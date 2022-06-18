function NavBar() {
    return (
        <h1>This is nav bar</h1>
    )
}

function MainContent() {
    return (
        <h1>This is main content</h1>
    )
}

const navBar = (
    <nav>
        <h1>Dai ca Phong</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

// ReactDOM.render(<div>
//     <NavBar/>
//     <MainContent/>
// </div>, document.getElementById('root'))

ReactDOM.render(
    navBar,
    document.getElementById('root')
)
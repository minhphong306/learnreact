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

// Challenge: Build funfact about react page
const funcFact = (
    <div>
        <img src='assets/images/icon.png' width={40}/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(
    funcFact,
    document.getElementById('root')
)
import { Link, Outlet } from 'react-router-dom';

function Header () {
    return (
        <div className="App">
        <header className="App-header">
          <nav className='App-nav'>
            <Link to="/games" className='App-link'>Games</Link>
            <Link to="/explore"className='App-link'>Explore</Link>         
          </nav>
          <Outlet />
        </header>
        {/* <main className='App-main'>
          <h1>Site Title</h1>
        </main> */}
      </div>
    );
}

export default Header;
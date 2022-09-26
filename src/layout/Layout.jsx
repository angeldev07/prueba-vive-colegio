import {Outlet} from 'react-router-dom';

function Layout () {
    return (
        <>
            <header>
                <h1>Header</h1>
            </header>
                <Outlet/>
            <footer>
                <h1>Colaboracion</h1>
            </footer>
        </>
    );
}

export default Layout;
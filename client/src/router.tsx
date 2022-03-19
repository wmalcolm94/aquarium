import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </nav>
            </div>
        </Router>
    );
}
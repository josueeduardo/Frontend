import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

import EasyTransition from 'react-easy-transition'

const App = ({ children, location }) => (
    <div>
        <ul>
            <li><Link to="/page1">Page 1</Link></li>
            <li><Link to="/page2">Page 2</Link></li>
        </ul>

        <EasyTransition
            path={location.pathname}
            initialStyle={{opacity: 0}}
            transition="opacity 0.5s ease-in"
            finalStyle={{opacity: 1}}>

            {children}

        </EasyTransition>
    </div>
)

const Index = () => (
    <div className="Image">
        <h1>Index</h1>
        <p>Animations with React Router with <a href="https://github.com/misterfresh/react-easy-transition">react-easy-transition</a>.</p>
    </div>
)

const Page1 = () => (
    <div className="Image">
        <h1>Page 1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.</p>
    </div>
)

const Page2 = () => (
    <div className="Image">
        <h1>Page 2</h1>
        <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
)

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="page1" component={Page1}/>
            <Route path="page2" component={Page2}/>
        </Route>
    </Router>
), document.getElementById('root'))
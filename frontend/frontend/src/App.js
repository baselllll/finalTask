import { Component } from "react";
import Home from "./componets/home";
import { BrowserRouter, Route, Switch, NavLink as Link } from 'react-router-dom'
import ErrorCom from "./componets/error";
import Register from "./componets/register";
import UserDetail from "./componets/user-detail";
import UpdateFormCom from "./componets/updateform";
import AllUserCom from "./componets/alluser";


class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', paddingLeft: '500px', fontSize: '40px' }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link exact activeClassName='active' to='/all-user'>AllUser</Link>
                      &nbsp;&nbsp;&nbsp;
                    </li>
                    <li className="nav-item">
                      <Link exact activeClassName='active' to='/'>Search</Link>
                      &nbsp;&nbsp;&nbsp;
                    </li>

                    <li className="nav-item">
                      <Link to='/register' activeClassName='active'><button className="btn btn-success">Register</button></Link>
                      &nbsp;&nbsp;&nbsp;
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/user/:id' component={UserDetail} />
            <Route exact path='/update-user/:id' component={UpdateFormCom} />
            <Route exact path='/all-user' component={AllUserCom} />
            <Route path='*' component={ErrorCom} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
export default App
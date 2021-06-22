import { Component } from "react";
import Search from "./search";
import UserListCom from "./user-list";
class Home extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <Search />
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>

        )
    }
}
export default Home
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/index';
import UserListItem from "./userListItem";
const Search = (props) => {
    const name = useRef();
    const [DataSearch, SetDataSearch] = useState([])
    const renderListUser = (val) => {
        let userSearchData = val.payload.data;
        SetDataSearch(userSearchData)
    }
    const SearchBtn = () => {
        actions.SearchByName(name.current.value).then((val) => { renderListUser(val) }).catch((err) => console.log(err))
        name.current.value = ""
    };
    if (DataSearch.length > 0) {
        return (
            <div className="alert alert-dark text-center">
                <form className="form-control">
                    <input ref={name} type="text" className="form-control mt-3" placeholder="Search By name" />
                    <input type="button" className="mt-2 btn btn-success w-50" onClick={() => SearchBtn()} value="Search" />
                </form>
                <UserListItem userSearch={DataSearch} />
            </div>
        )
    } else {
        return (
            <div className="alert alert-dark text-center">
                <form className="form-control">
                    <input ref={name} type="text" className="form-control mt-3" placeholder="Search By name" />
                    <input type="button" className="mt-2 btn btn-success w-50" onClick={() => SearchBtn()} value="Search" />
                </form>
                <div className=" alert alert-dark d-flex justify-content-between">
                    <h1 className='text-center text-success'>NOT Available User </h1>
                </div>

            </div>
        )
    }

}
export default connect(
    (state) => {
        return { userList: state.userList }
    }, actions)(Search)
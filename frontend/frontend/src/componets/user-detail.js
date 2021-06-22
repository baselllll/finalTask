import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/index';
const UserDetail = (props) => {
  const id = props.match.params.id
  const [Details, SetDetails] = useState({})
  const renderListUser = (val) => {
    let userSearchData = val.payload.data;
    SetDetails(userSearchData[0])
  }
  useEffect(() => {
    actions.GetById(id).then((val) => { renderListUser(val) }).catch((err) => console.log(err))
  }, [])
  let DeleteItem = () => {
    let ask = window.confirm('Do you Want to delete ? ');
    if (ask == true) {
      actions.DeleteById(id).then(() => { console.log('deleted') }).catch((err) => console.log(err))
      props.history.push('/')
    } else {
      console.log('not delted')
    }
  }
  let UpdateForm = (id) => {
    let ask = window.confirm('Do you Want to Update ? ');
    if (ask == true) {
      props.history.push(`/update-user/${id}`)
    } else {
      console.log('not Wanted to update')
    }

  }
  if (Details) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="card mb-5 text-center">
              <div className="card-body">
                <div className='d-flex' style={{ marginLeft: "40%" }}>
                  <div className="text-center ml-5">
                      <button onClick={()=>{DeleteItem()}} className="btn btn-danger btn-lg">Delete</button>
                       <button onClick={()=>{UpdateForm(Details._id)}} className="btn btn-primary btn-lg">Update</button>
                  </div>
                </div>
                <img src={`/images/profile/${Details.image}`} className="card-img-top img-thumbnail w-75" onError={(e)=>{ if (e.target.src !== "/images/profile/true_blue.jpg") 
                          {e.target.src="/images/profile/true_blue.jpg"; } }} />
                <h2 className="card-title alert alert-dark">{Details.Name}</h2>
                <h4 className="card-text alert alert-dark">{Details.Email}</h4>
              </div>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="card mb-3">
              <div className="card-body">
                <h2 className="card-title">Not Exist Details</h2>
              </div>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    )
  }

}
export default connect((state) => {
  return { Details: state.Details, DeleteUser: state.DeleteUser }
}, actions)(UserDetail)


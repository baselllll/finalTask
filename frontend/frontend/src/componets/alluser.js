import { useEffect,useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
const AllUserCom = () => {
    const [DataUser, SetDataUser] = useState([])
    let renderListUser = (val) =>{
        SetDataUser(val.payload.data)
    }
    useEffect(()=>{
       return actions.GetAllUsers().then((val)=>{renderListUser(val)}).catch((err)=>console.log(err))
    },[])
    if(DataUser.length > 0) {
        return DataUser.map((DataUser)=>{
            return (
                <div className="container" key={DataUser._id}>
                  <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                      <div className=" mb-5 text-center">
                        <div className="border border-5"> 
                          <img src={`http://localhost:3333/assets/images/${DataUser.image}`} className="card-img-top img-thumbnail rounded-circle w-25"
                          onError={(e)=>{ if (e.target.src !== "/images/profile/true_blue.jpg") 
                          {e.target.src="/images/profile/true_blue.jpg"; } }}
                          />
                          <h2 className="alert alert-dark align-content-between">{DataUser.Name}</h2>
                          <h2 className="alert alert-dark">{DataUser.Email}</h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-3"></div>
                  </div>
                </div>
              )
        })
       
    }else{
        return (
            <div className="container">
              <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                  <div className="alert alert-dark">
                      NOT AVALIABLE DATA FOR USER
                  </div>
                </div>
                <div className="col-3"></div>
              </div>
            </div>
          )
    }
    }
   
export default connect(
    (state) => {
        return { userList: state.userList }
    },actions)(AllUserCom)
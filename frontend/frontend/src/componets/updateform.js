import { createRef, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/index';
const UpdateFormCom = (props) => {
    const id = props.match.params.id
    const [Details, SetDetails] = useState({})
    const name = useRef();
    const email = useRef();
    let UpdateData = () =>{
      console.log(name.current.value)
      console.log(email.current.value)  
      var ask = window.confirm('Do You Want To update Data ?');
      if(ask==true){
        actions.UpdateById(id,{Name:name.current.value,Email:email.current.value}).then((res) => { console.log(res) }).catch((err) => console.log(err))
        props.history.push('/home')
        window.alert('Data is Updated')
      }else{
          window.alert('data not Updated')
      }
     
    }
    const renderListUser = (val) => {
        let userSearchData = val.payload.data;
        SetDetails(userSearchData[0])
    }
    useEffect(() => {
        actions.GetById(id).then((val) => { renderListUser(val) }).catch((err) => console.log(err))
      }, [])
    return (
        <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-7 alert alert-dark mt-5 p-5">
              <form className="form-control text-center">
                  <input ref={name}  defaultValue={Details.Name} className="form-control mb-4" type="text" required placeholder="Enter Name"/>
                  <input ref={email}  defaultValue={Details.Email} className="form-control mb-4" type="email" required placeholder="Enter Email"/>
                 <input onClick={()=>{UpdateData()}} className="form-control btn btn-success mt-5 w-25 text-center" type="button" value="Update"/>
              </form>
          </div>
          <div className="col-3">
          </div>
        </div>
      </div> 
    )
}
export default connect((state) => {
    return { UpdateUser: state.UpdateUser}
  }, actions)(UpdateFormCom)
import { createRef, useEffect, useRef, useState } from "react";
import FormData from 'form-data'
import { connect } from "react-redux";
import * as actions from '../actions/index';
const Register = (props) => {
  const name = useRef();
  const email = useRef();
  const image = createRef();
  // const [ImageShow,SetImageShow] = useState(<></>)
  let GetDateForm = () =>{
    // console.log(name.current.value)
    // console.log(email.current.value)
    //  console.log(image.current.files[0])
    //  let formdata = new FormData();
    //  formdata.append('image',image.current.files[0])
    //  formdata.append('name',"basel osama")
    let user = {
      Name:name.current.value,
      Email:email.current.value,
      image:image.current.files[0].name,
    }
    
    actions.AddNewUser(user).then((val) => { console.log(val) }).catch((err) => console.log(err))
    props.history.push('/all-user')
  }
    return (
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-7 alert alert-dark mt-5 p-5">
              <form className="form-control text-center">
                  <input ref={name} className="form-control mb-4" type="text" required placeholder="Enter Name"/>
                  <input ref={email} className="form-control mb-4" type="email" required placeholder="Enter Email"/>
                  <input ref={image} className="form-control" type="file" required placeholder="Enter Image"/>
                  <input onClick={GetDateForm} className="form-control btn btn-success mt-5 w-25 text-center" type="button" value="Register"/>
              </form>
          </div>
          <div className="col-3">
          </div>
        </div>
      </div>  
    )
}
export default connect((state) => {
  return { UserAdd: state.UserAdd }
}, actions)(Register)
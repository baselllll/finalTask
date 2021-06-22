import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import UserListItem from "./userListItem";
class UserListCom extends Component {
  mypromise;
  constructor(props) {
    super();
    this.state = {
      userData:[]
    }
  }
   renderListUser = (dataFromProm) => {
     this.setState({
      userData:dataFromProm.payload.data
     })
  }
  componentDidMount(){
    this.mypromise = this.props.GetAllUsers().then((val)=>{this.renderListUser(val)}).catch((err)=>console.log(err))
  }

  render() {
    if(this.state.userData.length > 0 ){
      return this.state.userData.map((item)=>{
        return (
          <div>
            {/* <UserListItem ItemUser = {item} /> */}
          </div>
        ) 
      })
      
    }else{
      return (
       <></>
      ) 
    }
  }
}

export default connect(
  (state) => {
      return { userList: state.userList }
  },actions)(UserListCom)
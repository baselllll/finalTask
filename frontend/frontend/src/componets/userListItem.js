import { Link } from "react-router-dom"

const UserListItem = (props) => {
    if (props.userSearch) {
        return props.userSearch.map((item) => {
            return (
                <div>
                    <Link to={`/user/${item._id}`}>
                    <div key={item._id} className="alert alert-dark d-flex justify-content-between">
                        <h1 className='align-self-start'>{item.Name}</h1>
                        <h1><img className='rounded-circle w-50' src={`images/profile/${item.image}`} onError={(e)=>{ if (e.target.src !== "/images/profile/true_blue.jpg") 
                          {e.target.src="/images/profile/true_blue.jpg"; } }} /></h1>
                    </div>
                    </Link>
                </div>
            )
        })
    } else {
        return (
            <>
                <div className="alert alert-dark d-flex justify-content-between">
                    <h1>Not Found</h1>
                </div>
            </>
        )
    }
}
export default UserListItem;

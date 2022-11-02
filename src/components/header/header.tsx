
import { useEffect} from "react";
import { FaSearch ,FaUserAlt} from "react-icons/fa"
import { useHistory } from "react-router-dom";
import{connect} from 'react-redux'
import './header.css'
import {headerObj} from '../../Redux/types'
import {fetchHeader} from '../../Redux/Header/headerAction'
import {signOut} from '../../Redux/authentication/authAction';
interface header{
    headerData:headerObj[]
    fetchHeader:() =>void;
    signout:() =>void;
}
function Header({headerData,fetchHeader,signout}:header){
    const history = useHistory();
    useEffect(() => {
        fetchHeader()
        },[])
        const handleClick=()=>{
            signout()   
        }
    return(
        <div>
             <nav>
            <div className="nav-items">
                 <ul>
                    <li>TRAVELLY</li>
                    {headerData.map((post:any) => (
                    <li onClick={() => history.push(post.path)}>{post.name}</li>
                     ))}
                     <button className="btn-header" onClick={handleClick}>SignOut</button>
                </ul> 
            </div>
            </nav>  
        </div>
    );
}
const mapStateToProps=(state:any)=>{
    return{
        headerData:state.header.header     
    }
} 
const mapDispatchToProps=(dispatch:any)=>{
    return{
        fetchHeader:()=>{
            dispatch(fetchHeader())
        },
        signout:()=>{
            dispatch(signOut())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)



























// import { useEffect} from "react";
// import { FaSearch ,FaUserAlt} from "react-icons/fa"
// import { useHistory } from "react-router-dom";
// import{connect} from 'react-redux'
// import './header.css'
// import {headerObj} from '../../Redux/types'
// import {fetchHeader} from '../../Redux/Header/headerAction'
// import {signOut} from '../../Redux/authentication/authAction';
// interface header{
//     headerData:headerObj[]
//     fetchHeader:() =>void;
//     signout:() =>void;
// }
// function Header({headerData,fetchHeader,signout}:header){
//     const history = useHistory();
//     useEffect(() => {
//         fetchHeader()
//         },[])
//         const handleClick=()=>{
//             signout()   
//         }
//     return(
//         <div>
//              <nav>
//             <div className="nav-items">
//                  <ul>
//                     <li>TRAVELLY</li>
//                     {headerData.map((post:any) => (
//                     <li onClick={() => history.push(post.path)}>{post.name}</li>
//                      ))}
//                      <button className="btn-header" onClick={handleClick}>SignOut</button>
//                 </ul> 
//             </div>
//             </nav>  
//         </div>
//     );
// }
// const mapStateToProps=(state:any)=>{
//     return{
//         headerData:state.header.header     
//     }
// } 
// const mapDispatchToProps=(dispatch:any)=>{
//     return{
//         fetchHeader:()=>{
//             dispatch(fetchHeader())
//         },
//         signout:()=>{
//             dispatch(signOut())
//         }
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Header)



































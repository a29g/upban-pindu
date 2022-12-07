import { Fragment , useContext} from "react";
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as Pindlogo } from "../../assets/farmer-svgrepo-com.svg";
import './navigation.styles.scss'
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {

    const {currentUser} = useContext(UserContext);
    
   
    return(
      <Fragment>
        <div className="navigation">
            <Link className="nav-logo-container" to="/" >
                <Pindlogo className="logo" />
            </Link>
            
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    SHOP
                </Link>
                <Link className="nav-link" to="/contact">
                    CONTACT
                </Link>

                {currentUser ? (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>) 
                : (
                    <Link className="nav-link" to="/auth">
                        SIGN IN
                    </Link>
                )}
                
            </div>
          
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation;
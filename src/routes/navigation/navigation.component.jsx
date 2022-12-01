import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as Pindlogo } from "../../assets/farmer-svgrepo-com.svg";
import './navigation.styles.scss'

const Navigation = () => {
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
                <Link className="nav-link" to="/sign-in">
                    SIGN IN
                </Link>
            </div>
          
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation;
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children,...rest }) => {
    const[isLoggedIn, setIsLoggedIn]=useContext(UserContext)
    return (
        <div>
            
             <Route
                {...rest}
                render={({ location }) =>
                    isLoggedIn.email? (
                        children
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: location }
                                }}
                            />
                        )
                }
            />
       
        </div>

    );
};

export default PrivateRoute;
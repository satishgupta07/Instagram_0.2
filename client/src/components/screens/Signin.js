import React from 'react';
import {Link} from 'react-router-dom'

const Signin = () => {
    return (
        <div className="mycard">
             <div className="card-panel auth-card input-field">
                <h2>Instagram</h2>
                <input
                   type="text"
                   placeholder="email"
                />
                 <input
                   type="text"
                   placeholder="password"
                />
                
              <button className="btn waves-effect waves-light #64b5f6 blue lighten-2">Login</button>

              <h6>
                 <Link to="/signup">Don't have an account ?</Link>
              </h6>

             </div>
           </div>
    )
}

export default Signin
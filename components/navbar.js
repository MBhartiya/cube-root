import { signIn, signOut, useSession } from 'next-auth/client'

export default function Navabar(){

    const [ session, loading ] = useSession()

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top nav-fill">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                <li className="nav-item  active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>   
                </li>
                <li className="nav-item  active">
                {!session && 
                <button type="button" className="btn btn-dark" onClick={signIn}>Sign In</button>
                }
                </li>
                {session && 
                <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <img src={session.user.image} className="rounded-circle" width="30" height="30" alt=""/></a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="api/auth/signout">Sign Out</a>
                </div> 
                </li>    
                }
                </ul>
            </div>
        </nav>

    );
}

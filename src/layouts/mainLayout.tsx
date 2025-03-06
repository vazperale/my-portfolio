import { Outlet, useLocation, useNavigate } from "react-router-dom";
import imagenCabecera from '../assets/logo.png';
export default function mainLayout() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path:string) => location.pathname === path ? 'active' : '';

    return (
        <>
        <div className="header-navigation mb-4">
            <header className="p-4">
            <nav className="d-flex justify-content-between align-items-center">
            <img className='image-header ' src={imagenCabecera} height={50} onClick={()=>{navigate('/')}}/>
            <div className="navbar-navigation d-flex justify-content-end col-6">
                <ul className="navbar-options d-flex gap-4">
                    <li className={isActive('/')} onClick={()=>{navigate('/')}}>Home</li>
                    <li className={isActive('/skills')} onClick={()=>{navigate('/skills')}}>Skills</li>
                    <li className={isActive('/experience')} onClick={()=>{navigate('/experience')}}>Experience</li>
                </ul>
            </div>
           </nav>
            </header>
            </div>
            <Outlet/>
        </>
    )
}
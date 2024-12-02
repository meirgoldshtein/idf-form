import './NavBar.css'
import logo from '../../images/logo.png'
export default function NavBar() {
    return (
        <div className='navbar'>
            <div className="left">
                <div className="item">מה חדש?</div>
                <div className="item">תפריט מנות קרב</div>
                <div className="item">צור קשר</div>
            </div>
            <div className="right">
                <div className="item">מנילה צבאית</div>
                <div className="item logo"><img src={logo} alt="logo" /></div>
            </div>
        </div>
    )
}

import logo from "../Img/navlogo.png"
import arrow from "../Img/Path 3.png"
import addbtn from "../Img/navaddbtn.png"
import setting from "../Img/navsetting.png"

const Nav = () => {
    return (
    <nav className="flex bg-white px-4 py-5 items-center">
        <img className="mr-4 w-6 h-6" src={logo} alt="logo"/>
        <div className="flex w-full items-center gap-2">
            <h2>Platform Launch</h2>
            <img className="w-2 h-1" src={arrow} alt="arrowdown" />
        </div>
        <div className="flex gap-4 items-center mr-4">
            <img className="w-12 h-8" src={addbtn} alt="add" />
            <img className="w-1 h-4" src={setting} alt="settings" />
        </div>
    </nav>
    )
}

export default Nav
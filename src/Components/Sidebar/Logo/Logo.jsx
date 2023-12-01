import logo from "../../../assets/icon.webp"
const Logo = () => {
    return (
        <div className="max-w-[200px] flex items-center gap-1 shadow-md py-0 w-full p-2 pr-4 rounded-lg">
            <img className="w-16" src={logo} alt="logo" />
            <h2 style={{fontFamily: "'Comfortaa', sans-serif"}} className="text-xl font-bold text-blue-500">CozyHub</h2>
        </div>
    );
};

export default Logo;
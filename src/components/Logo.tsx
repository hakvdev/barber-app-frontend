import logo from "../assets/logo.svg"

export default function Logo () {
    
    return (
        <div className="flex justify-center flex-col items-center mb-10">
            <img src={logo} alt="Logo" className="h-[25px]" />
            <h1 className="text-white font-bold text-sm">Site Barber</h1>
        </div>
    )
    
}
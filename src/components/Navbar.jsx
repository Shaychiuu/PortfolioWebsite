import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <header className="flex justify-between items-center sm:px-16 px-8 py-4 max-w-15xl mx-auto absolute top-0 right-0 left-0 z-10 bg-fade-ombre">
    <NavLink to='/' className="w-12 h-10 rounded-full bg-white flex items-center justify-center font-bold" style={{ boxShadow: '0 0 8px 2px rgba(255, 255, 255, 0.5)' }}>
        <p className="text-indigo-500">IP</p> {/* Adjust the color to ensure visibility */}
    </NavLink>

    <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) =>
            isActive ? "text-white" : "text-gray-300" // Adjust these colors for better visibility
        }>
            About
        </NavLink>
    </nav>
</header>
    );
};

export default Navbar;

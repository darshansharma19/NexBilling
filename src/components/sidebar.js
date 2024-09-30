import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaTachometerAlt, 
  FaClipboardList, 
  FaCogs, 
  FaFileAlt, 
  FaSignOutAlt, 
  FaShoppingCart, 
  FaTools, 
  FaChevronDown, 
  FaChevronRight 
} from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // To toggle sidebar collapse
  const [openMenu, setOpenMenu] = useState(''); // To handle submenu open/close
  const [openSubMenu, setOpenSubMenu] = useState(''); // To handle sub-dropdown inside menu

  // Function to toggle the main menu
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? '' : menu);
    setOpenSubMenu(''); // Close sub-menu when switching main menu
  };

  // Function to toggle the sub-dropdown
  const toggleSubMenu = (submenu) => {
    setOpenSubMenu(openSubMenu === submenu ? '' : submenu);
  };

  return (
    <div className={`flex flex-col h-screen bg-white transition-width duration-300 ${isOpen ? 'w-64' : 'w-20'} shadow-lg`}>
      {/* Logo Section */}
      <div className="flex items-center justify-center h-16 bg-blue-50">
        <span className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <img
            src="/nexinfotech.png" 
            alt="Logo"
            className={`h-10 w-auto ${isOpen ? 'block' : 'hidden'} md:block`} 
          />
          <img
            src="/nexinfotech.png"
            alt="Small Logo"
            className={`h-8 w-auto ${isOpen ? 'hidden' : 'block'} md:hidden`} 
          />
        </span>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="px-2 py-4">
          {/* Dashboard */}
          <li className="mb-4">
            <Link to="/dashboard" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-md transition-all">
              <FaTachometerAlt className="text-xl" />
              <span className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>Dashboard</span>
            </Link>
          </li>

          {/* Master Menu */}
          <li className="mb-4">
            <div 
              onClick={() => toggleMenu('master')} 
              className="flex items-center justify-between p-2 text-blue-600 hover:bg-blue-100 rounded-md cursor-pointer transition-all"
            >
              <div className="flex items-center">
                <FaClipboardList className="text-xl" />
                <span className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>Master</span>
              </div>
              {isOpen && (
                <span className="mr-2 transition-transform duration-300">
                  {openMenu === 'master' ? <FaChevronDown /> : <FaChevronRight />}
                </span>
              )}
            </div>

            <ul className={`${openMenu === 'master' ? 'block' : 'hidden'} pl-8 mt-2`}>
              <li>
                <Link to="/create-company" className="text-blue-600 hover:text-blue-800">Create Company</Link>
              </li>
              <li className="mt-2">
                {/* Inventory Submenu */}
                <div 
                  onClick={() => toggleSubMenu('inventory')} 
                  className="cursor-pointer text-blue-600 hover:text-blue-800 flex justify-between items-center"
                >
                  Inventory
                  <span className="ml-2 transition-transform duration-300">
                    {openSubMenu === 'inventory' ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                </div>

                <ul className={`${openSubMenu === 'inventory' ? 'block' : 'hidden'} pl-4 mt-2`}>
                  <li className="mt-1"><Link to="/category" className="text-blue-600 hover:text-blue-800">Category</Link></li>
                  <li className="mt-1"><Link to="/sub-category" className="text-blue-600 hover:text-blue-800">Sub-Category</Link></li>
                  <li className="mt-1"><Link to="/measurement-unit" className="text-blue-600 hover:text-blue-800">Measurement Unit</Link></li>
                  <li className="mt-1"><Link to="/item-size" className="text-blue-600 hover:text-blue-800">Item Size</Link></li>
                  <li className="mt-1"><Link to="/item-color" className="text-blue-600 hover:text-blue-800">Item Color</Link></li>
                  <li className="mt-1"><Link to="/item-list" className="text-blue-600 hover:text-blue-800">Item List</Link></li>
                </ul>
              </li>

              <li className="mt-2"><Link to="/customer-sales" className="text-blue-600 hover:text-blue-800">Customer (Sales)</Link></li>
              <li className="mt-2"><Link to="/supplier" className="text-blue-600 hover:text-blue-800">Supplier</Link></li>
              <li className="mt-2"><Link to="/create-staff" className="text-blue-600 hover:text-blue-800">Create Staff</Link></li>
              <li className="mt-2"><Link to="/create-design" className="text-blue-600 hover:text-blue-800">Create Design</Link></li>
              <li className="mt-2"><Link to="/machine" className="text-blue-600 hover:text-blue-800">Machine</Link></li>
              <li className="mt-2"><Link to="/machine-group" className="text-blue-600 hover:text-blue-800">Machine Group</Link></li>
              <li className="mt-2"><Link to="/user" className="text-blue-600 hover:text-blue-800">User</Link></li>
            </ul>
          </li>

          {/* Create BOM */}
          <li className="mb-4">
            <Link to="/create-bom" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-md transition-all">
              <FaCogs className="text-xl" />
              <span className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>Create BOM</span>
            </Link>
          </li>

          {/* Production */}
          <li className="mb-4">
            <Link to="/production" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-md transition-all">
              <FaTools className="text-xl" />
              <span className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>Production</span>
            </Link>
          </li>

          {/* Purchase */}
          <li className="mb-4">
            <Link to="/purchase" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-md transition-all">
              <FaShoppingCart className="text-xl" />
              <span className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>Purchase</span>
            </Link>
          </li>

          {/* Sales */}
          <li className="mb-4">
            <Link to="/sales" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-md transition-all">
              <FaShoppingCart className="text-xl" />
              <span className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>Sales</span>
            </Link>
          </li>

          {/* Reports */}
          <li className="mb-4">
            <Link to="/reports" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-md transition-all">
              <FaFileAlt className="text-xl" />
              <span className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>Reports</span>
            </Link>
          </li>

          {/* Logout */}
          <li className="mb-4">
            <Link to="/logout" className="flex items-center p-2 text-blue-600 hover:bg-blue-100 rounded-md transition-all">
              <FaSignOutAlt className="text-xl" />
              <span className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

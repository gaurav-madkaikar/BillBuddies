import { Link, useLocation } from 'react-router-dom';
import configData from '../../config.json';

const navigation = [
  { name: 'Dashboard', icon: 'dashboard', path: configData.DASHBOARD_URL },
  { name: 'Groups', icon: 'group', path: configData.USER_GROUPS_URL },
  { name: 'Expenses', icon: 'receipt_long', path: configData.USER_GROUPS_URL },
  { name: 'Analytics', icon: 'analytics', path: configData.DASHBOARD_URL },
  { name: 'Settings', icon: 'settings', path: configData.USER_PROFILE_URL },
];

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = configData.LOGIN_URL;
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed md:sticky top-0 left-0 h-screen w-64 
          bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800
          flex flex-col z-50 transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Logo Section */}
        <div className="px-8 py-10">
          <h1 className="text-2xl font-bold tracking-tighter text-teal-950 dark:text-teal-50 font-headline">
            Ledger
          </h1>
          <p className="font-headline text-sm font-medium tracking-tight text-slate-500">
            Split smarter, track better
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={onClose}
              className={`
                flex items-center gap-3 px-4 py-3 
                font-headline text-sm font-medium tracking-tight
                rounded-lg transition-all
                ${isActive(item.path)
                  ? 'text-teal-900 dark:text-teal-400 font-bold border-r-4 border-teal-700 dark:border-teal-400 bg-slate-100 dark:bg-slate-800'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800'
                }
              `}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="px-4 py-8 space-y-2">
          <Link
            to={configData.CREATE_GROUP_URL}
            onClick={onClose}
            className="block w-full architectural-gradient text-white py-3 rounded-lg font-headline font-bold text-sm mb-6 shadow-lg shadow-primary/10 text-center hover:shadow-xl hover:shadow-primary/20 transition-all"
          >
            Add Expense
          </Link>

          <Link
            to={configData.ABOUT_URL}
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-2 font-headline text-sm font-medium tracking-tight text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 transition-colors rounded-lg"
          >
            <span className="material-symbols-outlined">help_outline</span>
            Support
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2 font-headline text-sm font-medium tracking-tight text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 transition-colors rounded-lg w-full text-left"
          >
            <span className="material-symbols-outlined">logout</span>
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

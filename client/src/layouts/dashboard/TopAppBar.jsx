import { useState } from 'react';
import { Link } from 'react-router-dom';
import gravatarUrl from 'gravatar-url';
import configData from '../../config.json';

export default function TopAppBar({ onOpenSidebar }) {
  const [searchQuery, setSearchQuery] = useState('');
  const user = JSON.parse(localStorage.getItem('profile'));
  const avatarUrl = user?.emailId ? gravatarUrl(user.emailId, { size: 200 }) : '';

  return (
    <header className="sticky top-0 z-40 w-full h-16 glass-morphism dark:glass-morphism-dark border-b border-slate-100/10 shadow-sm shadow-slate-200/5 flex justify-between items-center px-4 md:px-8">
      {/* Left Section */}
      <div className="flex items-center gap-4 md:gap-8">
        {/* Mobile Menu Button */}
        <button
          onClick={onOpenSidebar}
          className="md:hidden text-slate-600 dark:text-slate-400 hover:text-teal-600"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        {/* Title */}
        {/* <span className="text-xl font-black text-teal-950 dark:text-teal-50 font-headline hidden lg:block">
          The Architectural Ledger
        </span> */}

        {/* Search Bar */}
        <div className="relative hidden sm:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search transactions..."
            className="bg-surface-container-highest border-none rounded-sm py-2 pl-10 pr-4 text-sm w-48 md:w-64 focus:ring-2 focus:ring-primary/20 transition-all focus:w-72"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Icons */}
        <div className="flex items-center gap-3 md:gap-4">
          <button className="text-slate-600 dark:text-slate-400 hover:text-teal-600 cursor-pointer transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-slate-600 dark:text-slate-400 hover:text-teal-600 cursor-pointer transition-colors">
            <span className="material-symbols-outlined">history</span>
          </button>
        </div>

        {/* New Group Button */}
        <Link
          to={configData.CREATE_GROUP_URL}
          className="hidden md:block text-teal-900 dark:text-teal-400 font-headline font-semibold text-sm hover:text-teal-600 transition-colors"
        >
          New Group
        </Link>

        {/* User Avatar */}
        <Link to={configData.USER_PROFILE_URL}>
          <img
            src={avatarUrl || configData.USER_DEFAULT_LOGO_URL}
            alt={user?.firstName || 'User'}
            className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-fixed/20 hover:ring-primary-fixed/40 transition-all cursor-pointer"
          />
        </Link>
      </div>
    </header>
  );
}

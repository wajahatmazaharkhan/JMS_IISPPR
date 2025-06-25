import { NavLink } from 'react-router-dom';

const sidebarLinks = {
  admin: [
    { to: '/admin', label: 'Dashboard' },
    { to: '/admin/articles', label: 'Articles' },
    { to: '/admin/editions', label: 'Editions' },
    { to: '/admin/settings', label: 'Settings' },
    { to: '/admin/users', label: 'Manage Users' },
  ],
  editor: [
    { to: '/editor', label: 'Dashboard' },
    { to: '/editor/articles', label: 'Articles' },
    { to: '/editor/reviews', label: 'Reviews' },
    { to: '/editor/settings', label: 'Settings' },
  ],
  reviewer: [
    { to: '/reviewer', label: 'Dashboard' },
    { to: '/reviewer/reviews', label: 'Reviews' },
    { to: '/reviewer/settings', label: 'Settings' },
  ],
  author: [
    { to: '/author', label: 'Dashboard' },
    { to: '/author/articles', label: 'My Articles' },
    { to: '/author/settings', label: 'Settings' },
  ],
  reader: [
    { to: '/reader', label: 'Dashboard' },
    { to: '/reader/articles', label: 'Browse Articles' },
    { to: '/reader/settings', label: 'Settings' },
  ],
};

const Sidebar = ({ role }) => {
  const links = sidebarLinks[role] || [];
  return (
    <aside className="w-64 bg-white shadow h-full flex flex-col">
      <div className="h-16 flex items-center justify-center font-bold text-xl border-b">JMS</div>
      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-blue-100 transition ${isActive ? 'bg-blue-200 font-semibold' : ''}`
            }
            end
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar; 
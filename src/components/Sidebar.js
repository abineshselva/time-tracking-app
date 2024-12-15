import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
  { name: 'Projects', icon: FolderIcon, href: '#', count: 4, current: false },
  { name: 'Team', icon: UsersIcon, href: '#', count: 3, current: false },
  { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
  { name: 'Tasks', icon: InboxIcon, href: '/tasks', count: 12, current: false },
  { name: 'Settings', icon: ChartBarIcon, href: '/settings', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar() {
  return (
    <div className="flex min-h-screen flex-col w-1/5 border-r border-gray-200 bg-cyan-700">
      <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
        <nav aria-label="Sidebar" className="mt-5 flex-1 space-y-1 bg-cyan-700 px-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-cyan-800 text-white hover:bg-cyan-800 hover:text-white'
                  : 'text-gray-200 hover:bg-cyan-800 hover:text-white',
                'group flex items-center rounded-md px-2 py-2 text-sm font-medium',
              )}
            >
              <item.icon
                aria-hidden="true"
                className={classNames(
                  item.current ? 'text-white' : 'text-gray-300 group-hover:text-white',
                  'mr-3 h-6 w-6 flex-shrink-0',
                )}
              />
              <span className="flex-1">{item.name}</span>
              {item.count ? (
                <span
                  className={classNames(
                    item.current ? 'bg-cyan-900' : 'bg-gray-100 group-hover:bg-gray-200',
                    'ml-3 inline-block rounded-full px-3 py-0.5 text-xs font-medium',
                    item.current ? 'text-white' : 'text-gray-800'
                  )}
                >
                  {item.count}
                </span>
              ) : null}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
        <a href="#" className="group block w-full flex-shrink-0">
          <div className="flex items-center">
            <div>
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="inline-block h-9 w-9 rounded-full"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-100 group-hover:text-white">Tom Cook</p>
              <p className="text-xs font-medium text-gray-300 group-hover:text-gray-100">View profile</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

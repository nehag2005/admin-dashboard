import { MagnifyingGlassIcon, BellIcon, GearIcon } from "@phosphor-icons/react";

export const Toolbar = () => {
  return (
    <div className="w-full h-24 bg-eunry-300 shadow-sm px-8 flex items-center justify-between">
      {/* Left side - Greeting and Search */}
      <div className="flex items-center gap-6 flex-1">
        <div>
          <h2 className="text-2xl font-semibold text-eunry-900">
            Hey, Neha! 👋
          </h2>
          <p className="text-sm text-eunry-700">Welcome back to FinSight</p>
        </div>

        {/* Search Box */}
        <div className="relative flex-1 max-w-md">
          <MagnifyingGlassIcon
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-eunry-600"
          />
          <input
            type="text"
            placeholder="Search transactions, accounts..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-eunry-100 border border-eunry-400 focus:outline-none focus:ring-2 focus:ring-eunry-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Right side - Actions and Profile */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-eunry-400 transition-colors">
          <BellIcon size={24} className="text-eunry-800" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Settings */}
        <button className="p-2 rounded-lg hover:bg-eunry-400 transition-colors">
          <GearIcon size={24} className="text-eunry-800" />
        </button>
      </div>
    </div>
  );
};

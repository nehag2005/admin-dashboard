import {
  ChartLineIcon,
  BriefcaseIcon,
  ChartBarIcon,
  BankIcon,
  PiggyBankIcon,
  TrendUpIcon,
  CreditCardIcon,
  ClockCounterClockwiseIcon,
  TagSimpleIcon,
  WalletIcon,
  GearIcon,
  QuestionIcon,
} from "@phosphor-icons/react";

export const Sidebar = () => {
  return (
    <div className="bg-eunry-200 p-4 h-screen shadow-sm flex flex-col">
      <h1 className="text-3xl font-bold mb-8">
        <span className="font-light text-eunry-700">Fin</span>Sight
      </h1>

      <nav className="flex-1">
        <div className="space-y-6">
          <div>
            <h2 className="text-xs font-semibold text-eunry-700 uppercase mb-2">
              Overview
            </h2>
            <ul className="space-y-1">
              <li className="px-3 py-2 rounded hover:bg-eunry-300 cursor-pointer flex items-center gap-3">
                <ChartLineIcon size={20} />
                Dashboard
              </li>
              <li className="px-3 py-2 rounded hover:bg-eunry-300 cursor-pointer flex items-center gap-3">
                <BriefcaseIcon size={20} />
                Portfolio
              </li>
              <li className="px-3 py-2 rounded hover:bg-eunry-300 cursor-pointer flex items-center gap-3">
                <ChartBarIcon size={20} />
                Analytics
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold text-eunry-700 uppercase mb-2">
              Accounts
            </h2>
            <ul className="space-y-1">
              <li className="px-3 py-2 rounded hover:bg-eunry-300 cursor-pointer flex items-center gap-3">
                <BankIcon size={20} />
                Checking
              </li>
              <li className="px-3 py-2 rounded hover:bg-eunry-300 cursor-pointer flex items-center gap-3">
                <PiggyBankIcon size={20} />
                Savings
              </li>
              <li className="px-3 py-2 rounded hover:bg-eunry-300 cursor-pointer flex items-center gap-3">
                <TrendUpIcon size={20} />
                Investments
              </li>
              <li className="px-3 py-2 rounded hover:bg-eunry-300 cursor-pointer flex items-center gap-3">
                <CreditCardIcon size={20} />
                Credit Cards
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold text-eunry-700 uppercase mb-2">
              Transactions
            </h2>
            <ul className="space-y-1">
              <li className="px-3 py-2 rounded hover:bg-eunry-300 cursor-pointer flex items-center gap-3">
                <ClockCounterClockwiseIcon size={20} />
                Recent Activity
              </li>
              <li className="px-3 py-2 rounded hover:bg-eunry-300 cursor-pointer flex items-center gap-3">
                <TagSimpleIcon size={20} />
                Categories
              </li>
              <li className="px-3 py-2 rounded hover:bg-eunry-300 cursor-pointer flex items-center gap-3">
                <WalletIcon size={20} />
                Budgets
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="mt-auto pt-4 border-t border-eunry-300">
        <div className="px-3 py-2 rounded hover:bg-eunry-300 cursor-pointer flex items-center gap-3">
          <GearIcon size={20} />
          Settings
        </div>
        <div className="px-3 py-2 rounded hover:bg-eunry-300 cursor-pointer flex items-center gap-3">
          <QuestionIcon size={20} />
          Help & Support
        </div>
      </div>
    </div>
  );
};

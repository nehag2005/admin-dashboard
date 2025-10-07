import { Card } from "./card";
import { Toolbar } from "./toolbar";
import {
  Plus,
  Trash,
  PencilSimple,
  Check,
  X,
  TrendUp,
  TrendDown,
  Wallet,
  CreditCard,
  Bank,
  ChartLine,
  PiggyBank,
  Tag,
} from "@phosphor-icons/react";
import { useState } from "react";

export const Home = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "Monthly Salary",
      amount: 5000,
      type: "income",
      category: "Income",
      account: "Checking",
      date: "2025-10-01",
    },
    {
      id: 2,
      title: "Whole Foods",
      amount: -150.32,
      type: "expense",
      category: "Groceries",
      account: "Credit Cards",
      date: "2025-10-03",
    },
    {
      id: 3,
      title: "Apple Music",
      amount: -10.99,
      type: "expense",
      category: "Entertainment",
      account: "Checking",
      date: "2025-10-05",
    },
    {
      id: 4,
      title: "Stock Dividend",
      amount: 245.5,
      type: "income",
      category: "Dividends",
      account: "Investments",
      date: "2025-10-06",
    },
    {
      id: 5,
      title: "Transfer to Savings",
      amount: -500,
      type: "transfer",
      category: "Savings",
      account: "Savings",
      date: "2025-10-07",
    },
    {
      id: 6,
      title: "Gas Station",
      amount: -65.0,
      type: "expense",
      category: "Transportation",
      account: "Credit Cards",
      date: "2025-10-07",
    },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({
    title: "",
    amount: 0,
    category: "",
    account: "",
    date: "",
  });

  const getCategoryIcon = (account: string) => {
    switch (account) {
      case "Checking":
        return <Bank size={20} className="text-eunry-800" />;
      case "Savings":
        return <PiggyBank size={20} className="text-eunry-800" />;
      case "Investments":
        return <ChartLine size={20} className="text-eunry-800" />;
      case "Credit Cards":
        return <CreditCard size={20} className="text-eunry-800" />;
      default:
        return <Wallet size={20} className="text-eunry-700" />;
    }
  };

  const getAccountColor = (account: string) => {
    switch (account) {
      case "Checking":
        return "bg-eunry-100 border-eunry-300";
      case "Savings":
        return "bg-eunry-100 border-eunry-300";
      case "Investments":
        return "bg-eunry-100 border-eunry-300";
      case "Credit Cards":
        return "bg-eunry-100 border-eunry-300";
      default:
        return "bg-eunry-50 border-eunry-200";
    }
  };

  const handleDelete = (id: number) => {
    setTransactions(transactions.filter((item) => item.id !== id));
  };

  const handleEdit = (item: (typeof transactions)[0]) => {
    setEditingId(item.id);
    setEditForm({
      title: item.title,
      amount: Math.abs(item.amount),
      category: item.category,
      account: item.account,
      date: item.date,
    });
  };

  const handleSave = (id: number) => {
    const transaction = transactions.find((t) => t.id === id);
    if (!transaction) return;

    const amount =
      transaction.type === "expense" || transaction.type === "transfer"
        ? -Math.abs(editForm.amount)
        : Math.abs(editForm.amount);

    setTransactions(
      transactions.map((item) =>
        item.id === id
          ? {
              ...item,
              title: editForm.title,
              amount: amount,
              category: editForm.category,
              account: editForm.account,
              date: editForm.date,
            }
          : item
      )
    );
    setEditingId(null);
  };

  const handleAdd = () => {
    const newId = Math.max(...transactions.map((i) => i.id), 0) + 1;
    setTransactions([
      ...transactions,
      {
        id: newId,
        title: "New Transaction",
        amount: -50,
        type: "expense",
        category: "Uncategorized",
        account: "Checking",
        date: new Date().toISOString().split("T")[0],
      },
    ]);
  };

  // Calculate account balances
  const checkingBalance = transactions
    .filter((t) => t.account === "Checking")
    .reduce((sum, t) => sum + t.amount, 3250);

  const savingsBalance = transactions
    .filter((t) => t.account === "Savings")
    .reduce((sum, t) => sum + t.amount, 12500);

  const investmentsBalance = transactions
    .filter((t) => t.account === "Investments")
    .reduce((sum, t) => sum + t.amount, 28750);

  const creditCardsBalance = transactions
    .filter((t) => t.account === "Credit Cards")
    .reduce((sum, t) => sum + t.amount, -1250);

  const totalNetWorth =
    checkingBalance + savingsBalance + investmentsBalance + creditCardsBalance;

  return (
    <div className="min-h-screen flex flex-col bg-eunry-50">
      <Toolbar />
      <div className="flex-1 p-6 grid grid-cols-[minmax(250px,_2fr)_1fr] gap-6 overflow-hidden">
        {/* Left side - Transaction Cards (Scrollable) */}
        <div className="overflow-y-auto pr-2">
          <div className="grid grid-cols-2 gap-4 auto-rows-min">
            {transactions.map((item) => (
              <Card
                key={item.id}
                className={`w-full p-4 flex flex-col gap-3 hover:shadow-md transition-all border ${getAccountColor(
                  item.account
                )}`}
              >
                {editingId === item.id ? (
                  <>
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) =>
                        setEditForm({ ...editForm, title: e.target.value })
                      }
                      className="font-semibold text-base border border-eunry-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-eunry-500"
                      placeholder="Transaction title"
                    />
                    <input
                      type="number"
                      step="0.01"
                      value={editForm.amount}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          amount: parseFloat(e.target.value),
                        })
                      }
                      className="text-sm border border-eunry-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-eunry-500"
                      placeholder="Amount"
                    />
                    <input
                      type="text"
                      value={editForm.category}
                      onChange={(e) =>
                        setEditForm({ ...editForm, category: e.target.value })
                      }
                      className="text-sm border border-eunry-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-eunry-500"
                      placeholder="Category"
                    />
                    <select
                      value={editForm.account}
                      onChange={(e) =>
                        setEditForm({ ...editForm, account: e.target.value })
                      }
                      className="text-sm border border-eunry-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-eunry-500"
                    >
                      <option value="Checking">Checking</option>
                      <option value="Savings">Savings</option>
                      <option value="Investments">Investments</option>
                      <option value="Credit Cards">Credit Cards</option>
                    </select>
                    <input
                      type="date"
                      value={editForm.date}
                      onChange={(e) =>
                        setEditForm({ ...editForm, date: e.target.value })
                      }
                      className="text-sm border border-eunry-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-eunry-500"
                    />
                    <div className="flex gap-2 mt-auto">
                      <button
                        onClick={() => handleSave(item.id)}
                        className="flex items-center gap-1 px-3 py-2 bg-eunry-600 text-white rounded-lg hover:bg-eunry-700 transition-colors"
                      >
                        <Check size={16} /> Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="flex items-center gap-1 px-3 py-2 bg-eunry-400 text-eunry-900 rounded-lg hover:bg-eunry-500 transition-colors"
                      >
                        <X size={16} /> Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white shadow-sm border border-eunry-200">
                          {getCategoryIcon(item.account)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-base text-eunry-900">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-1 mt-0.5">
                            <Tag size={12} className="text-eunry-600" />
                            <p className="text-xs text-eunry-700">
                              {item.category}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {item.type === "income" ? (
                          <TrendUp
                            size={18}
                            className="text-eunry-800"
                            weight="bold"
                          />
                        ) : (
                          <TrendDown
                            size={18}
                            className="text-eunry-800"
                            weight="bold"
                          />
                        )}
                      </div>
                    </div>

                    <div className="flex items-end justify-between mt-1">
                      <div>
                        <span
                          className={`text-2xl font-bold ${
                            item.type === "income"
                              ? "text-eunry-900"
                              : "text-eunry-800"
                          }`}
                        >
                          ${Math.abs(item.amount).toFixed(2)}
                        </span>
                        <p className="text-xs text-eunry-600 mt-1">
                          {item.account}
                        </p>
                      </div>
                      <span className="text-xs text-eunry-600">
                        {new Date(item.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <div className="flex gap-2 mt-auto pt-3 border-t border-eunry-200">
                      <button
                        onClick={() => handleEdit(item)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-eunry-500 text-white rounded-lg hover:bg-eunry-600 text-sm transition-colors"
                      >
                        <PencilSimple size={14} /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-eunry-400 text-eunry-900 rounded-lg hover:bg-eunry-500 text-sm transition-colors"
                      >
                        <Trash size={14} /> Delete
                      </button>
                    </div>
                  </>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Right side - Summary */}
        <div className="flex flex-col gap-4">
          <Card className="p-6 bg-gradient-to-br from-eunry-200 to-eunry-300 border-eunry-400">
            <h3 className="text-sm font-semibold text-eunry-700 uppercase mb-4">
              Net Worth
            </h3>
            <div className="text-4xl font-bold text-eunry-900 mb-6">
              $
              {totalNetWorth.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </Card>

          <Card className="p-6 bg-white border-eunry-300">
            <h3 className="text-sm font-semibold text-eunry-800 uppercase mb-4">
              Accounts
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-eunry-100 rounded-lg border border-eunry-300">
                <div className="flex items-center gap-3">
                  <Bank size={24} className="text-eunry-800" />
                  <span className="font-medium text-eunry-900">Checking</span>
                </div>
                <span className="text-lg font-semibold text-eunry-900">
                  $
                  {checkingBalance.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-eunry-100 rounded-lg border border-eunry-300">
                <div className="flex items-center gap-3">
                  <PiggyBank size={24} className="text-eunry-800" />
                  <span className="font-medium text-eunry-900">Savings</span>
                </div>
                <span className="text-lg font-semibold text-eunry-900">
                  $
                  {savingsBalance.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-eunry-100 rounded-lg border border-eunry-300">
                <div className="flex items-center gap-3">
                  <ChartLine size={24} className="text-eunry-800" />
                  <span className="font-medium text-eunry-900">
                    Investments
                  </span>
                </div>
                <span className="text-lg font-semibold text-eunry-900">
                  $
                  {investmentsBalance.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-eunry-100 rounded-lg border border-eunry-300">
                <div className="flex items-center gap-3">
                  <CreditCard size={24} className="text-eunry-800" />
                  <span className="font-medium text-eunry-900">
                    Credit Cards
                  </span>
                </div>
                <span className="text-lg font-semibold text-eunry-800">
                  $
                  {Math.abs(creditCardsBalance).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>
          </Card>

          <button
            onClick={handleAdd}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-eunry-500 text-white rounded-lg hover:bg-eunry-600 font-semibold transition-colors shadow-sm"
          >
            <Plus size={20} weight="bold" /> Add Transaction
          </button>
        </div>
      </div>
    </div>
  );
};

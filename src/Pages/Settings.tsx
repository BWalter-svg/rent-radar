import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun, User, Bell, Shield } from "lucide-react";

const Settings: React.FC = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex flex-col items-center py-10 px-4 transition-all duration-300">
      <div className="w-full max-w-2xl">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-600 dark:text-blue-400">
          App Settings ⚙️
        </h1>

        {/* Settings Cards */}
        <div className="space-y-6">
          {/* Theme Toggle */}
          <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-3">
              {darkMode ? (
                <Moon className="text-blue-500" size={24} />
              ) : (
                <Sun className="text-yellow-400" size={24} />
              )}
              <div>
                <h2 className="font-semibold text-lg">Appearance</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Switch between Light and Dark mode
                </p>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          {/* Notifications */}
          <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-3">
              <Bell className="text-blue-500" size={24} />
              <div>
                <h2 className="font-semibold text-lg">Notifications</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Manage push and email notifications
                </p>
              </div>
            </div>
            <button className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition text-sm font-medium">
              Manage
            </button>
          </div>

          {/* Profile Settings */}
          <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-3">
              <User className="text-blue-500" size={24} />
              <div>
                <h2 className="font-semibold text-lg">Profile</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Update your name, email, and password
                </p>
              </div>
            </div>
            <button className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition text-sm font-medium">
              Edit
            </button>
          </div>

          {/* Privacy */}
          <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-3">
              <Shield className="text-blue-500" size={24} />
              <div>
                <h2 className="font-semibold text-lg">Privacy</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Control data and security options
                </p>
              </div>
            </div>
            <button className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition text-sm font-medium">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

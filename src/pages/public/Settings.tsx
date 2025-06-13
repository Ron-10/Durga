import React, { useState } from 'react';
import { 
  User,
  Lock,
  Bell,
  Mail,
  Globe,
  Calendar,
  Book,
  CreditCard,
  Shield,
  Database,
  Save,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  LucideIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

type Tab = {
  id: string;
  label: string;
  icon: LucideIcon;
};

type Field = {
  label: string;
  type: 'text' | 'email' | 'tel' | 'password' | 'toggle';
  value: string | boolean;
};

type SettingsContent = {
  [key: string]: {
    title: string;
    description: string;
    fields: Field[];
  };
};

const Settings = () => {
  const [activeTab, setActiveTab] = useState<string>('profile');

  const tabs: Tab[] = [
    { id: 'profile', label: 'Profile Settings', icon: User },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'email', label: 'Email Settings', icon: Mail },
    { id: 'school', label: 'School Profile', icon: Globe },
    { id: 'academic', label: 'Academic Settings', icon: Calendar },
    { id: 'library', label: 'Library Settings', icon: Book },
    { id: 'payment', label: 'Payment Settings', icon: CreditCard },
    { id: 'permissions', label: 'User Permissions', icon: Shield },
    { id: 'backup', label: 'Backup & Restore', icon: Database }
  ];

  const settingsContent: SettingsContent = {
    profile: {
      title: 'Profile Settings',
      description: 'Manage your personal information and account details',
      fields: [
        { label: 'Full Name', type: 'text', value: 'John Doe' },
        { label: 'Email', type: 'email', value: 'john.doe@example.com' },
        { label: 'Phone', type: 'tel', value: '+1 234 567 890' },
        { label: 'Position', type: 'text', value: 'Administrator' },
        { label: 'Department', type: 'text', value: 'Management' }
      ]
    },
    security: {
      title: 'Security Settings',
      description: 'Manage your account security and password',
      fields: [
        { label: 'Current Password', type: 'password', value: '' },
        { label: 'New Password', type: 'password', value: '' },
        { label: 'Confirm New Password', type: 'password', value: '' },
        { label: 'Two-Factor Authentication', type: 'toggle', value: true }
      ]
    },
    notifications: {
      title: 'Notification Settings',
      description: 'Configure how you receive notifications',
      fields: [
        { label: 'Email Notifications', type: 'toggle', value: true },
        { label: 'SMS Notifications', type: 'toggle', value: false },
        { label: 'Push Notifications', type: 'toggle', value: true },
        { label: 'Announcements', type: 'toggle', value: true },
        { label: 'Updates', type: 'toggle', value: true }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-4 py-3 text-sm font-medium ${
                        activeTab === tab.id
                          ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {tab.label}
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {settingsContent[activeTab]?.title}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  {settingsContent[activeTab]?.description}
                </p>
              </div>

              <div className="space-y-6">
                {settingsContent[activeTab]?.fields.map((field: Field, index: number) => (
                  <div key={index} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      {field.label}
                    </label>
                    {field.type === 'toggle' ? (
                      <div className="flex items-center">
                        <button
                          type="button"
                          className={`${
                            field.value ? 'bg-blue-600' : 'bg-gray-200'
                          } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                        >
                          <span
                            className={`${
                              field.value ? 'translate-x-5' : 'translate-x-0'
                            } pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                          />
                        </button>
                        <span className="ml-3 text-sm text-gray-500">
                          {field.value ? 'Enabled' : 'Disabled'}
                        </span>
                      </div>
                    ) : (
                      <input
                        type={field.type}
                        value={field.value as string}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 
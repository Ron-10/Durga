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
      title: 'Personal Information',
      description: "Update your photo and personal details here. This information will be visible to other administrators but not to students or parents.",
      fields: [
        { label: 'Full Name', type: 'text', value: 'John Doe' },
        { label: 'Email Address', type: 'email', value: 'john.doe@example.com' },
        { label: 'Phone Number', type: 'tel', value: '+1 234 567 890' },
        { label: 'Role / Position', type: 'text', value: 'Administrator' },
        { label: 'Department', type: 'text', value: 'Management' }
      ]
    },
    security: {
      title: 'Password & Security',
      description: "Manage your password and enable two-factor authentication for enhanced account security. It's recommended to use a strong, unique password.",
      fields: [
        { label: 'Current Password', type: 'password', value: '' },
        { label: 'New Password', type: 'password', value: '' },
        { label: 'Confirm New Password', type: 'password', value: '' },
        { label: 'Enable Two-Factor Authentication (2FA)', type: 'toggle', value: true }
      ]
    },
    notifications: {
      title: 'Notification Preferences',
      description: "Choose how you want to be notified about important activities and updates within the system. You can opt-in or out of different channels.",
      fields: [
        { label: 'Receive Email Notifications', type: 'toggle', value: true },
        { label: 'Receive SMS Alerts', type: 'toggle', value: false },
        { label: 'Enable In-App Push Notifications', type: 'toggle', value: true },
        { label: 'Subscribe to School Announcements', type: 'toggle', value: true },
        { label: 'Get Notified for System Updates', type: 'toggle', value: true }
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
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-sm p-6 md:p-8"
            >
              <div className="mb-8 border-b pb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {settingsContent[activeTab]?.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  {settingsContent[activeTab]?.description}
                </p>
              </div>

              <div className="space-y-8">
                {settingsContent[activeTab]?.fields.map((field: Field, index: number) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <label className="text-sm font-medium text-gray-800 md:col-span-1">
                      {field.label}
                    </label>
                    <div className="md:col-span-2">
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
                          <span className="ml-3 text-sm font-medium text-gray-700">
                            {field.value ? 'Enabled' : 'Disabled'}
                          </span>
                        </div>
                      ) : (
                        <input
                          type={field.type}
                          value={field.value as string}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t flex justify-end">
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save Changes
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 
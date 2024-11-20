import React, { useState } from 'react';
import { sendPreDueReminders, sendDueDateAlerts } from '../Services/reminderService';

const ReminderControls = () => {
  const [statusMessage, setStatusMessage] = useState('');

  const handleSendPreDueReminders = async () => {
    try {
      const response = await sendPreDueReminders();
      setStatusMessage(response.message);
    } catch (error) {
      setStatusMessage('Failed to send pre-due reminders.');
    }
  };

  const handleSendDueDateAlerts = async () => {
    try {
      const response = await sendDueDateAlerts();
      setStatusMessage(response.message);
    } catch (error) {
      setStatusMessage('Failed to send due-date alerts.');
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-lg font-bold mb-4">Reminder Controls</h2>
      <div className="flex gap-4">
        <button
          onClick={handleSendPreDueReminders}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send Pre-Due Reminders
        </button>
        <button
          onClick={handleSendDueDateAlerts}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Send Due-Date Alerts
        </button>
      </div>
      {statusMessage && <p className="mt-4 text-gray-700">{statusMessage}</p>}
    </div>
  );
};

export default ReminderControls;

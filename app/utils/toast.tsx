"use client";

import React from "react";
import { toast_type, ToastEnum } from "./toast-type";
import "./toast.css";

interface IToastProps {
  icon: ToastEnum;
  message: string;
  close: boolean;
  delay: number;
  speed?: number;
}

const Toast: React.FC<IToastProps> = ({
  icon,
  message,
  close,
  delay,
  speed = 1,
}) => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    if (delay) {
      const timer = setTimeout(() => setVisible(false), delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  if (!visible) return null;

  return (
    <div
      className={`toast-container fixed bottom-0 z-10 right-0 m-2 ${
        visible ? "slide-in" : "slide-out"
      } flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800`}
      role="alert"
      style={{
        transition: `transform ${speed}s ease, opacity ${speed}s ease`,
      }}
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg dark:bg-blue-800">
        {toast_type[icon.toLowerCase() as keyof typeof toast_type]}
      </div>
      <div className="ms-3 text-sm font-normal">{message}</div>
      {close && (
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-label="Close"
          onClick={() => setVisible(false)}
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Toast;

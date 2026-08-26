"use client";

import { usePWAInstall } from "@/hooks/usePWAInstall";

export default function InstallPWAButton() {
  const { isInstallable, isStandalone, promptToInstall } = usePWAInstall();

  if (isStandalone) {
    return null;
  }

  if (!isInstallable) {
    return null;
  }

  return (
    <button
      onClick={promptToInstall}
      className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium py-2 px-4 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-200 active:scale-95 text-sm"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      تثبيت التطبيق
    </button>
  );
}
// app/offline/page.tsx
"use client";

import React from "react";

export default function OfflinePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white p-6 text-center">
      <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-xl max-w-md w-full">
        <div className="text-5xl mb-4">📡</div>
        <h1 className="text-2xl font-bold mb-2">أنت غير متصل بالإنترنت</h1>
        <p className="text-slate-400 mb-6 text-sm">
          يبدو أنك فقدت الاتصال بالشبكة. الصفحات غير المخزنة مسبقاً تحتاج إلى اتصال للوصول إليها.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-200"
        >
          إعادة المحاولة
        </button>
      </div>
    </main>
  );
}
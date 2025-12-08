// AOSProvider.jsx
// یک کامپوننت ساده برای راه‌اندازی AOS در پروژه‌های React/Next.js
// نکته: در پروژه‌ی Next.js اگر این فایل را داخل app-router استفاده می‌کنید، حتماً "use client" را در بالای فایل قرار دهید.

"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * AOSProvider
 * props:
 *  - options: شی تنظیمات برای AOS.init (مثلا { duration: 800, once: true })
 *  - refreshDeps: آرایه‌ای از وابستگی‌ها که هر بار تغییر کردند AOS.refresh() فراخوانی شود
 *
 * استفاده:
 *  import AOSProvider from './AOSProvider';
 *  <AOSProvider options={{ duration: 700, once: false }} refreshDeps={[items]}>
 *    <YourApp />
 *  </AOSProvider>
 */

export default function AOSProvider({
  options = {},
  refreshDeps = [],
  children,
}) {
  useEffect(() => {
    // init once
    AOS.init({
      duration: 800,
      once: false,
      mirror: false,
      offset: 120,
      ...options,
    });

    // cleanup: optional (AOS خودش cleanup خاصی ارائه نمی‌دهد، اما اینجا امن است)
    return () => {
      // no official destroy API, ولی می‌تونیم class ها رو پاک کنیم اگر خواستیم
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // وقتی refreshDeps تغییر کنند، AOS را ریفرش می‌کنیم تا انیمیشن برای المان‌های داینامیک اجرا شود
    AOS.refresh();
  }, refreshDeps);

  return <>{children}</>;
}

// کمکی برای زمان‌هایی که می‌خواهی دستی refresh بزنی
export function refreshAOS() {
  AOS.refresh();
}

// ----------------------
// مثال سریع کاربرد (مثال در یک فایل دیگر):

/*
import AOSProvider from './AOSProvider';

function Page({ items }) {
  return (
    <AOSProvider options={{ duration: 600, once: false }} refreshDeps={[items]}>
      <div>
        {items.map((it, i) => (
          <div key={it.id} data-aos="fade-up">
            {it.title}
          </div>
        ))}
      </div>
    </AOSProvider>
  );
}
*/

// توضیحات کوتاه:
// - اگر از Next.js (app router) استفاده می‌کنید، حتماً این کامپوننت را در یک client component قرار دهید ("use client").
// - اگر می‌خواهید کنترل دقیق‌تری داشته باشید (مثلا انیمیشن‌های وابسته به state خاص)، پیشنهاد می‌کنم به جای AOS از Framer Motion استفاده کنید.

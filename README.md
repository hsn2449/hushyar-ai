Hushyar — Next.js (Pages) site — Ready for Vercel
=================================================

این پروژه یک نسخهٔ اولیهٔ آماده برای سایت Hushyar است (دو زبانه، تم نیمه‌تیره، واتساپ و صفحات اصلی).
مراحل سریع برای راه‌اندازی محلی و سپس دپلوی در Vercel:

1) نصب وابستگی‌ها:
   npm install

2) اجرای محلی:
   npm run dev
   سپس باز کردن http://localhost:3000

3) اتصال به GitHub و دپلوی در Vercel:
   - ایجاد یک ریپازیتوری (مثلاً hushyar-ai) و push کردن کد
   - در Vercel، import project از GitHub و deploy کنید
   - اضافه کردن دامنه hushyar-ai.ir در Vercel → follow DNS instructions

4) درگاه زرین‌پال:
   - برای پرداخت آنلاین، پس از راه‌اندازی می‌تونید API زرین‌پال را در صفحه خرید ادغام کنید.
   - از متغیر محیطی ZARINPAL_MERCHANT_ID استفاده کنید.

تلفیق فارسی/انگلیسی با قابلیت locale در next.config.js انجام شده است (default: fa).

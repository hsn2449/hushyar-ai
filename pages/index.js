import Head from 'next/head'
export default function Home(){
  return (<>
    <Head><title>Hushyar — آموزش هوش مصنوعی از صفر تا استخدام</title></Head>
    <section className="mt-6 flex gap-8 items-start">
      <div style={{flex:1}}>
        <h1 className="text-3xl font-bold">هوش مصنوعی را با Hushyar یاد بگیر — از صفر تا استخدام</h1>
        <p className="text-[#BFC3C8] mt-4">پلتفرم آموزشی پروژه‌محور به‌سرپرستی مهندس حسن قهرمانی (مهندس الکترونیک و مخابرات، ۳۰ سال تجربه).</p>
        <div className="mt-6 flex gap-3">
          <button className="btn-brand">شروع رایگان</button>
          <button className="px-4 py-2 rounded-md border border-white/10">مشاوره رایگان (واتساپ)</button>
        </div>
      </div>
      <aside style={{width:360}} className="card">
        <strong>مسیر پیشنهادی</strong>
        <div className="mt-3 flex gap-2">
          <div className="bg-[#1F1F23] p-2 rounded">🔰 مبتدی</div>
          <div className="bg-[#1F1F23] p-2 rounded">⚙ میان‌سطح</div>
          <div className="bg-[#1F1F23] p-2 rounded">🚀 تخصصی</div>
        </div>
        <p className="text-[#BFC3C8] mt-3">پروژه نهایی: سرویس AI قابل استقرار</p>
      </aside>
    </section>

    <section className="mt-8">
      <h2 className="text-2xl font-semibold">دوره‌های پیشنهادی</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <div className="card">
          <h3 className="font-bold">آموزش یادگیری ماشین با پایتون</h3>
          <p className="text-[#BFC3C8]">مدرس: مهندس حسن قهرمانی — 40 ساعت — رایگان/۴۹۹هزار</p>
        </div>
        <div className="card">
          <h3 className="font-bold">شبکه‌های عصبی و یادگیری عمیق</h3>
          <p className="text-[#BFC3C8]">تیم Hushyar — 60 ساعت — ۷۹۹هزار</p>
        </div>
        <div className="card">
          <h3 className="font-bold">هوش مصنوعی در بازاریابی</h3>
          <p className="text-[#BFC3C8]">کاربردی — 20 ساعت — ۳۹۹هزار</p>
        </div>
      </div>
    </section>

    <section className="mt-8">
      <h2 className="text-2xl font-semibold">نمونه پروژه‌ها</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <div className="card">پروژه: تشخیص احساسات در متن فارسی — خلاصه پروژه</div>
        <div className="card">پروژه: تشخیص اشیاء در تصاویر صنعتی — خلاصه پروژه</div>
        <div className="card">پروژه: بهینه‌سازی مصرف انرژی با AI — خلاصه پروژه</div>
      </div>
    </section>
  </>)
}

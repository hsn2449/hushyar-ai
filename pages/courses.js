import Head from 'next/head'
export default function Courses(){ return (<>
  <Head><title>Courses — Hushyar</title></Head>
  <h1 className="text-2xl font-bold">دوره‌ها</h1>
  <p className="text-[#BFC3C8] mt-2">لیست دوره‌ها و دسته‌بندی‌ها</p>
  <div className="grid md:grid-cols-2 gap-4 mt-4">
    <div className="card"><h3 className="font-bold">یادگیری ماشین مقدماتی</h3><p className="text-[#BFC3C8]">پایتون، آمار پایه، پروژه عملی</p></div>
    <div className="card"><h3 className="font-bold">شبکه‌های عصبی</h3><p className="text-[#BFC3C8]">مفاهیم و پیاده‌سازی</p></div>
  </div>
</>)}
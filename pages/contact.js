import Head from 'next/head'
export default function Contact(){ return (<>
  <Head><title>Contact — Hushyar</title></Head>
  <h1 className="text-2xl font-bold">تماس با ما</h1>
  <div className="card mt-4">
    <p className="text-[#BFC3C8]">برای مشاوره رایگان در واتساپ روی دکمه بزنید یا فرم را پر کنید.</p>
    <a className="btn-brand mt-4 inline-block" href="https://wa.me/989396042449" target="_blank" rel="noreferrer">مشاوره رایگان (واتساپ)</a>
    <form className="mt-4" onSubmit={(e)=>{e.preventDefault(); alert('با تشکر! پیام شما دریافت شد.')}}>
      <input placeholder="نام و نام خانوادگی" className="w-full p-2 bg-[#1F1F23] rounded border border-white/5 mb-2" />
      <input placeholder="ایمیل" className="w-full p-2 bg-[#1F1F23] rounded border border-white/5 mb-2" />
      <textarea placeholder="پیام" className="w-full p-2 bg-[#1F1F23] rounded border border-white/5 mb-2"></textarea>
      <button className="btn-brand">ارسال پیام</button>
    </form>
  </div>
</>)}
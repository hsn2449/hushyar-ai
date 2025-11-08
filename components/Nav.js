import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Nav(){ 
  const router = useRouter()
  const { locale } = router
  return (<header className="container flex items-center justify-between">
    <div className="flex items-center gap-3">
      <img src="/logo_hushyar.svg" alt="Hushyar" style={{height:56}}/>
      <div>
        <div className="font-bold">Hushyar</div>
        <div className="text-sm text-[#BFC3C8]">هوشیار — آموزش هوش مصنوعی</div>
      </div>
    </div>
    <nav>
      <ul className="flex gap-6 items-center text-[#C7C7CC]">
        <li><Link href='/' locale={locale}>خانه</Link></li>
        <li><Link href='/courses' locale={locale}>دوره‌ها</Link></li>
        <li><Link href='/about' locale={locale}>درباره ما</Link></li>
        <li><Link href='/contact' locale={locale}>تماس</Link></li>
        <li><button className="btn-brand" onClick={()=>window.open('https://wa.me/989396042449','_blank')}>مشاوره رایگان</button></li>
        <li>
          <select onChange={(e)=>{ const l=e.target.value; const path=window.location.pathname; window.location.href='/' + (l==='fa'?'':'en') + path}} defaultValue={locale} className="bg-[#262629] text-white p-2 rounded">
            <option value="fa">فارسی</option>
            <option value="en">English</option>
          </select>
        </li>
      </ul>
    </nav>
  </header>)
}
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <h2>hello</h2>
      <div>
        HI~
      </div>
      <ul>
        <ol><Link href={'/first'}>첫번째 페이지 이동</Link></ol>
      </ul>
    </>
  )
}

import type {NextPage} from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return(
    <ul>
      <li>
        <a href="/hello">A 태그로 이동</a>
      </li>
      <li>
        <Link prefetch={false} href="/hello">
          next/link로 이동
        </Link>
      </li>
    </ul>
  )
}

export default Home
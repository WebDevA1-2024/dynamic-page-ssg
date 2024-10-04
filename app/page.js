import Link from 'next/link';
import { items } from './lib/data';

export default function Home() {
  return (
    <div>
      <h1>Daftar Artikel</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link href={`/${item.id}`}>
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

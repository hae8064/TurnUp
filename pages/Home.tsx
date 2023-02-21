import Link from 'next/link';
import React from 'react';

function Home() {
  return (
    <div>
      Home
      <Link href="/auth/Login">Login</Link>
      <li>
        <Link href="/auth">auth</Link>
      </li>
    </div>
  );
}

export default Home;

import Link from 'next/link';

export default function About() {
  return (
    <div>
      <Link href="/">
        <a>Back</a>
      </Link>
      <p>This is the react prototyper</p>
    </div>
  );
}
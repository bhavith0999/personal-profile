import Link from "next/link";

export default function Header() {
    return (
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">My Profile</h1>
        <ul className="flex gap-4 text-sm">
          <li>
            <Link href="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500">About</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-500">projects</Link>
          </li>
        </ul>
      </nav>
      </header>
    );
  }
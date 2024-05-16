import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-20 fixed top-0 inset-0 text-light">
      <div className="container mx-auto h-full flex items-center justify-between p-4 md:px-7 xl:px-0">
        <Link href="/" prefetch>
          <div className="w-14 h-14 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500 cursor-pointer" />
        </Link>

        <nav>
          <ul className="list-none flex items-center justify-center gap-10">
            <li className="uppercase tracking-wide">
              <Link href={"/about"} prefetch>
                About
              </Link>
            </li>
            <li className="uppercase tracking-wide">
              <Link href={"/projects"} prefetch>
                Projects
              </Link>
            </li>
            <li className="uppercase tracking-wide">
              <Link href={"/contact-us"} prefetch>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

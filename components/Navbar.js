import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="https://www.linkedin.com/in/jani-behm-bb34a2121/">
          <Image
            src="/linkedin_logo.png"
            width={40}
            height={40}
            alt="Linkedin logo"
          />
        </a>
      </div>

      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>Portfolio</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="sticky top-0 w-full border-b-2 bg-maple-white border-maple-gray-light z-50 relative ">
      <nav className="flex flex-row items-center justify-between py-6 px-4 ">
        <div className="flex flex-row items-center gap-4">
          <Link
            href="/"
            className="text-2xl font-bold md:text-3xl font-Cursive"
          >
            MapleUI
          </Link>

          <Link
            href="/components"
            className="pl-3 text-sm border-l-2 md:text-lg border-maple-black/20 hover:text-maple-black/80"
          >
            Components
          </Link>

          {/* <Link href="/designs" className="pl-2 text-sm pointer-events md:text-lg border-maple-black/20 hover:text-maple-black/80 disabled">
           Web Designs
          </Link> */}
        </div>

        <Navigation />
      </nav>
    </header>
  );
};

export default Header;

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header>
            <nav className="flex justify-between items-center py-5 px-10">
                <Link href="/" className="logo">
                    <Image src={"/icons/logo.png"} alt={"logo"} width={24} height={24}/>

                    <p>DevEvent</p>
                </Link>

                <ul className="flex gap-10">
                    <li><Link href="#/">Home</Link></li>
                    <li><Link href="/">Events</Link></li>
                    <li><Link href="/">Create Event</Link></li>
                </ul>
            </nav>
        </header>

    )
}
export default Navbar

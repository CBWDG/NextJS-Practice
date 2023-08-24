import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return <nav>
        <Link href="/">
            <span>Home</span>
        </Link>
        <br></br>
        <Link href="/about">
            <span>About</span>
        </Link>
        <style jsx>{` 
            nav {
                background-color: tomato;
            }
            span {
                text-decoration: none;
            }
        `}
        </style>
    </nav>
}
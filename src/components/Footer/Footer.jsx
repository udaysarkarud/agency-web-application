import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/SocialLink");
  const data = await res.json();
  return data;
}

const Footer = async () => {
  const data = await getData();
  return (
    <footer>
      <div className="footer p-5 md:p-10 bg-base-200 text-base-content">
        <aside className="space-y-4">
          <Link href="/" className="text-xl font-extrabold">
            Design
            <span className="text-red-600">AGENCY</span>
          </Link>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
          <nav>
            <div className="grid grid-flow-col gap-4">
              {data.map((social) => {
                return (
                  <a
                    key={social.id}
                    href={social.link}
                    className="text-teal-500 text-2xl"
                  >
                    {social.name == "facebook" && (
                      <FaFacebook className="hover:text-black" />
                    )}
                    {social.name == "twitter" && (
                      <FaTwitter className="hover:text-black" />
                    )}
                    {social.name == "instagram" && (
                      <BsInstagram className="hover:text-black" />
                    )}
                  </a>
                );
              })}
            </div>
          </nav>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <Link href="/" className="link link-hover">
            Branding
          </Link>
          <Link href="/" className="link link-hover">
            Design
          </Link>
          <Link href="/" className="link link-hover">
            Marketing
          </Link>
          <Link href="/" className="link link-hover">
            Advertisement
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <Link href="/" className="link link-hover">
            About us
          </Link>
          <Link href="/" className="link link-hover">
            Contact
          </Link>
          <Link href="/" className="link link-hover">
            Jobs
          </Link>
          <Link href="/" className="link link-hover">
            Press kit
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <Link href="/" className="link link-hover">
            Terms of use
          </Link>
          <Link href="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link href="/" className="link link-hover">
            Cookie policy
          </Link>
        </nav>
      </div>
      <div className="footer items-center px-5 md:px-10 py-5 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;

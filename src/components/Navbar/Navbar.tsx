import Container from "../Container/Container";
import style from "./Navbar.module.css"

import Logo from "../../assets/Logo.svg"

export default function Navbar() {
  return (
    <nav className={style["navbar"]}>
      <Container className="flex justify-between items-center">
        <p className="text-system-black regular-1 cursor-pointer">Tentang Kami</p>
        <p className="text-system-black regular-1 cursor-pointer">Layanan</p>
        <img className="cursor-pointer" src={Logo} alt="logo-lost-and-found" width={264} height={48} />
        <p className="text-system-black regular-1 cursor-pointer">Testimoni</p>
        <p className="text-system-black regular-1 cursor-pointer">Kontak</p>
      </Container>
    </nav>
  );
}

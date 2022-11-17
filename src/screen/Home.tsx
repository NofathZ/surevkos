import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Container from "../components/Container/Container";
import Layout from "../layouts";
import style from "./Home.module.css";

import Card1 from "../assets/card-1.jpg";
import Card2 from "../assets/card-2.jpg";
import Card3 from "../assets/card-3.jpg";
import ArrowRight from "../assets/arrow-right.svg";
import ArrowLeft from "../assets/arrow-left.svg";
import PersonTesti1 from "../assets/person-1.jpg";
import PersonTesti2 from "../assets/person-2.jpg";
import Logo from "../assets/Logo.svg";
import InstagramLogo from "../assets/instagram-logo.svg";
import WhatsappLogo from "../assets/whatsapp-logo.svg";
import EmailLogo from "../assets/email-logo.svg";
import { useState } from "react";

export default function Home() {

  const [carouselPosition, setCarouselPosition] = useState(0)

  return (
    <Layout type="no-container">
      <header className={`${style["header"]} pt-32 mobile:px-4`}>
        <Container>
          <p
            className="text-system-black semibold-1 mb-4"
            style={{ letterSpacing: "0.35em" }}
          >
            SurevKos
          </p>
          <h1 className="text-system-black bold-1 mb-10">
            Sekarang <span style={{ color: "#FFB71B" }}>Cari Kos</span>
            <br />
            Jadi Cepat dan Mudah
          </h1>
          <p className="text-system-black regular-2 mb-10">
            Nikmati kemudahan dalam mencari kos yang
            <br />
            sesuai dengan kriteria dan keinginanmu.
          </p>
          <Button>Cari Kos</Button>
        </Container>
      </header>
      <Container className="py-14 desktop:px-44 mobile:px-4">
        <h1 className="text-system-black text-center bold-3 mb-6">
          Apa itu SurevKos?
        </h1>
        <div className="flex justify-center items-center mb-10">
          <span className={`${style["border-line"]} inline-block`} />
        </div>
        <p className="text-system-black regular-2 mb-10">
          SurevKos merupakan aplikasi berbasis website yang dapat membantu kamu
          dalam melakukan pencarian kos dengan mudah dan cepat
        </p>
        <p className="text-system-black regular-2 mb-20">
          SurevKos memberikan layanan berupa informasi kos yang aktual dan
          faktual, sehingga dapat membantu pengguna terutama mahasiswa baru
          dalam mencari kos yang sesuai dengan kriteria dan kebutuhan.
        </p>
      </Container>
      <div className={`${style["user-app"]} w-full`}>
        <Container className={style["user-app__content"]}>
          <div className="flex flex-col justify-center items-center">
            <h2 className="bold-4 text-system-black">100</h2>
            <p className="regular-3 text-system-black">Surveyer Kos</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="bold-4 text-system-black">1000+</h2>
            <p className="regular-3 text-system-black">Pengguna Aktif</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="bold-4 text-system-black">5</h2>
            <p className="regular-3 text-system-black">Kota</p>
          </div>
        </Container>
      </div>
      <Container className="py-14 mobile:px-4">
        <div className="flex justify-between">
          <h1 className="text-system-black bold-3 mb-6">Layanan SurevKos</h1>
          <div className="desktop:flex mobile:hidden">
            <div
              className={`${style["arrow"]} flex justify-center items-center cursor-pointer mr-6`}
              onClick={() => setCarouselPosition(0)}
            >
              <img src={ArrowLeft} alt="arrow-left" width={44} height={44} />
            </div>
            <div
              className={`${style["arrow"]} flex justify-center items-center cursor-pointer`}
              onClick={() => setCarouselPosition(-26)}
            >
              <img src={ArrowRight} alt="arrow-right" width={44} height={44} />
            </div>
          </div>
        </div>
        <span className={`${style["border-line"]} inline-block`} />
        <div className={`mt-10 relative`} style={{ minHeight: "600px" }}>
          <div className={`${style["card-container"]} desktop:absolute mobile:static`} style={{left: `${carouselPosition}%`}}>
            <Card
              img={Card1}
              title="Informasi Kos yang Aktual"
              desc="Dengan menggunakan SurevKos, kamu bisa mendapatkan informasi kos yang aktual. Untuk menjaga keasliannya informasi diberikan dalam bentuk video, gambar, dan juga deskripsi lengkap mengenai kos."
            />
            <Card
              img={Card2}
              title="Chat dengan Surveyer"
              desc="Fitur chat akan membuatmu dapat terhubung secara langsung dengan surveyer kos. Kamu bahkan dapat bertanya lebih lanjut mengenai info kos yang telah diberikan kepadamu"
            />
            <Card
              img={Card3}
              title="Rating dan Komentar"
              desc="Melihat rating dan komentar dari penghuni ataupun mantan penghuni kos agar kamu semakin yakin dalam memilih kos. Kamu juga bisa menulis pengalaman kamu selama ngekos untuk menambah info kos tersebut."
            />
          </div>
        </div>
      </Container>
      <div className={`${style["people-says"]} w-full py-14 mobile:px-4`}>
        <Container>
          <h1 className="text-system-black bold-3 mb-6">
            Kata mereka tentang SurevKos
          </h1>
          <span className={`${style["border-line"]} inline-block`} />
          <div className="flex justify-between mt-10 desktop:flex-row mobile:flex-col">
            <div className="w-auto flex justify-center items-center flex-col mobile:mb-6">
              <div>
                <div className={`${style["people-says__card"]} p-9`}>
                  <h3 className="text-system-black semibold-2 text-center mb-4">
                    Informasi Akurat
                  </h3>
                  <p className="text-system-black regular-4 text-center">
                    Informasi yang saya dapatkan saat mencari kos sangat akurat.
                    Seluruh informasi yang diberikan sangat sesuai dengan apa
                    yang saya lihat sekarang ini
                  </p>
                </div>
                <div
                  className={`${style["people-says__card-triangle"]} mx-auto`}
                />
              </div>
              <img
                src={PersonTesti1}
                alt="people-1"
                className={`${style["people-says__card__profile"]} bg-gray-400 mx-auto my-6`}
              />
              <p className="text-system-black bold-5 text-center mb-1">
                Faizal Prasetyo
              </p>
              <p className="text-system-black regular-5 text-center">
                Mahasiswa Universitas Sebelas Maret
              </p>
            </div>
            <div className="w-auto flex justify-center items-center flex-col mobile:mb-6">
              <div>
                <div className={`${style["people-says__card"]} p-9`}>
                  <h3 className="text-system-black semibold-2 text-center mb-4">
                    Chat yang Fast Respons
                  </h3>
                  <p className="text-system-black regular-4 text-center">
                    Saat saya menanyakan sesuatu di fitur chat SurevKos saya
                    mendapat respons yang begitu cepat dan juga informasi yang
                    detail
                  </p>
                </div>
                <div
                  className={`${style["people-says__card-triangle"]} mx-auto`}
                />
              </div>
              <img
                src={PersonTesti2}
                alt="people-2"
                className={`${style["people-says__card__profile"]} bg-gray-400 mx-auto my-6`}
              />
              <p className="text-system-black bold-5 text-center mb-1">
                Annisa Amalia
              </p>
              <p className="text-system-black regular-5 text-center">
                Mahasiswa Universitas Telkom
              </p>
            </div>
          </div>
        </Container>
      </div>
      <Container className={`${style["quick-menu"]} py-20`}>
        <div>
          <img src={Logo} alt="surevkos-logo" width={341} height={62} />
        </div>
        <div>
          <h3 className="text-system-black medium-2 mb-6">Quick Links</h3>
          <h3 className="text-system-black regular-5 mb-3">Tentang Kami</h3>
          <h3 className="text-system-black regular-5 mb-3">Layanan</h3>
          <h3 className="text-system-black regular-5 mb-3">Testimoni</h3>
        </div>
        <div>
          <h3 className="text-system-black medium-2 mb-6">Lainnya</h3>
          <h3 className="text-system-black regular-5 mb-3">Surveyer Kos</h3>
          <h3 className="text-system-black regular-5 mb-3">Pencari Kos</h3>
          <h3 className="text-system-black regular-5 mb-3">Whatsapp</h3>
        </div>
        <div>
          <h3 className="text-system-black medium-2 mb-6">Hubungi Kami</h3>
          <h3 className="text-system-black regular-5 mb-3 flex">
            <img
              className="mr-2"
              src={InstagramLogo}
              alt="instagram-logo"
              width={24}
              height={24}
            />
            Instagram
          </h3>
          <h3 className="text-system-black regular-5 mb-3 flex">
            <img
              className="mr-2"
              src={WhatsappLogo}
              alt="whatsapp-logo"
              width={24}
              height={24}
            />
            Whatsapp
          </h3>
          <h3 className="text-system-black regular-5 mb-3 flex">
            <img
              className="mr-2"
              src={EmailLogo}
              alt="email-logo"
              width={24}
              height={24}
            />
            Email
          </h3>
        </div>
      </Container>
    </Layout>
  );
}

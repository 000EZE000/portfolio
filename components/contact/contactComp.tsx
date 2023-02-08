
import HeadComp from "@components/head/headComp";
import { Name, Email, Body, Send } from "./components";
import Nav from "@components/navbar/navbarComp";

import useForm from "./Hooks/useForm";

import Image from "next/image";
import Link from "next/link";

import style from "./style/style.module.css";

export default function ContactComp(): JSX.Element {
  const { form, setForm } = useForm();

  return (
    <div className={style.div_father}>
      <HeadComp title="Contacto" ico="gmail.ico" />
      <Nav />
      <main>
        <section>
          <header>
            <h1 className={style.title}>Contacto</h1>
          </header>
          <article>
            <form className={style.container}>
              <Email form={form} setForm={setForm} />
              <Name form={form} setForm={setForm} />
              <Body form={form} setForm={setForm} />
              <Send form={form} setForm={setForm} />
            </form>
          </article>
        </section>
        <hr />
        <section>
          <header>
            <h1 className={style.title_contact}>Otras forma de Contactarme</h1>
          </header>
          <article className={style.container_contact}>
            <Link
              href="https://wa.me/5492615939075"
              target="_blank"
              className={style.contact_card}
            >
              <Image
                src="https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707790/logo-contact/cmdyxpbwt74yafdxaiaq.webp"
                alt="Whatsapp"
                width="110"
                height="110"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ezequiel-sosa-475150248/"
              target="_blank"
              className={style.contact_card}
            >
              <Image
                src="https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707789/logo-contact/sq7ueypjvqzegmyrga0l.png"
                alt="Linkedin"
                width="110"
                height="110"
              />
            </Link>
            <Link
              href="https://github.com/000EZE000"
              target="_blank"
              className={style.contact_card}
            >
              <Image
                src="https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707784/logo-contact/p8ax9risj5togq4nz5ml.webp"
                alt="GitHub"
                width="110"
                height="110"
              />
            </Link>
            <Link
              href="https://twitter.com/EzequielIgnSosa"
              target="_blank"
              className={style.contact_card}
            >
              <Image
                src="https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707789/logo-contact/c2gy7bl5wsbhomdxd1pg.png"
                alt="Twitter"
                width="110"
                height="110"
              />
            </Link>
            <Link
              href="https://drive.google.com/u/0/uc?id=199TAB95n-AKumZiXN2Tzw8oY_9qz427O&export=download"
              className={style.contact_card}
            >
              <Image
                src="https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707789/logo-contact/mi1pyplpbcnt8dishtvw.png"
                alt="CV"
                width="110"
                height="110"
              />
            </Link>
          </article>
        </section>
      </main>
    </div>
  );
}


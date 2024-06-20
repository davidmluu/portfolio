import Head from 'next/head';
import { Calendar, GitHub, Twitter } from 'react-feather';
// import Link from 'next/link';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Contact</h1>
            <p className="description">
              <ul className="contact-list">
                <li className="contact-details">
                  <a
                    className="contact-links"
                    href="https://github.com/davidmbluu"
                  >
                    <GitHub className="contact-icons" />
                    <p className="contact-text">davidmluu</p>
                  </a>
                </li>
                <li className="contact-details">
                  <a
                    className="contact-links"
                    href="https://linkedin.com/in/david-luu-815565283"
                  >
                    <Linkedin className="contact-icons" />
                    <p className="contact-text">David Luu</p>
                  </a>
                </li>
                <li className="contact-details">
                  <a
                    className="contact-links"
                    href="https://www.instagram.com/davidmluu/"
                  >
                    <Instagram className="contact-icons" />
                    <p className="contact-text">davidmluu</p>
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;

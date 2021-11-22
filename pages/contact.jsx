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
                    href="https://github.com/sarahfaust"
                  >
                    <GitHub className="contact-icons" />
                    <p className="contact-text">sarahfaust</p>
                  </a>
                </li>
                <li className="contact-details">
                  <a
                    className="contact-links"
                    href="https://github.com/sarahfaust"
                  >
                    <Twitter className="contact-icons" />
                    <p className="contact-text">sarahfaustmann</p>{' '}
                  </a>
                </li>
                <li className="contact-details">
                  <a
                    className="contact-links"
                    href="https://calendly.com/sarahfaustmann/15min"
                  >
                    <Calendar className="contact-icons" />
                    <p className="contact-text">Calendly</p>
                  </a>
                </li>
              </ul>
            </p>
            <div
              class="calendly-inline-widget"
              data-url="https://calendly.com/sarahfaustmann/15min"
              style={{ minWidth: '320px', height: '640px' }}
            />
            <script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;

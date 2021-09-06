import Head from 'next/head';
import Link from 'next/link';
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
			    <div className="text-wrapper w-full">
			      <h1 className="title">Contact</h1>
			      <p className="description">
			      Write me an e-mail: <a href="mailto: sarah.faustmann@gmail.com">sarah.faustmann@gmail.com</a>
			      </p>
						<p className="description">
						Connect on <a href="mailto: sarah.faustmann@gmail.com">Twitter</a>
						</p>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default Contact;
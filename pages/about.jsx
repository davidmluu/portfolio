import Head from 'next/head';
// import Link from 'next/link';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">About</h1>
            <p className="description">
              Maker mindset, structured thinker, collaboration enthusiast,
              weekend woodworker, nature nerd. Finishing up my BSc in Computer
              Science/Digital Communications. Professional background in print
              design, language teaching and educational management. BA in
              English and American Studies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

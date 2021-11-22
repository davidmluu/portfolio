import Head from 'next/head';
// import Link from 'next/link';
import Navbar from '../components/Navbar';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon-apple-touch.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Portfolio</h1>
            <p className="description">
              A selection of my most recent projects.
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img
                  src="/mindfull.png"
                  className="portfolio-image"
                  alt="mindfull web app screenshot"
                />

                <h4 className="portfolio-name">Mindfull Companion</h4>
                <div className="portfolio-category">Web App</div>
              </div>
              <div className="portfolio-item">
                <img
                  src="/boardgames.png"
                  className="portfolio-image"
                  alt="board game shop screenshot"
                />

                <h4 className="portfolio-name">Board Game Shop</h4>
                <div className="portfolio-category">E-Commerce</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;

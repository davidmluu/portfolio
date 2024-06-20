import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Computer Science Student at Virginia Tech</h1>
            <p className="description">
              I'm a passionate software engineer with a drive to create impactful 
              solutions, possessing a keen interest in full-stack web 
              development. I aim to secure an internship where I can contribute 
              to cutting-edge projects and expand my knowledge in the field. Currently
              working with React, Python, JavaScript, MongoDB, Node.js, HTML and CSS.
            </p>
            <Link href="/contact">
              <a className="cta">Contact me!</a>
            </Link>
          </div>
          <div className="image-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              contentScriptType="text/ecmascript"
              width="384"
              zoomAndPan="magnify"
              contentStyleType="text/css"
              viewBox="0 0 384 383.999986"
              height="383.999986"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="clip-0">
                  <path
                    d="M 27.957031 27.992188 L 355.683594 27.992188 L 355.683594 355.683594 L 27.957031 355.683594 Z M 27.957031 27.992188 "
                    clip-rule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#clip-0)">
                <path
                  fill="rgb(0%, 29.019165%, 67.83905%)"
                  d="M 344.640625 240.3125 L 287.5625 214.734375 L 285.730469 214.734375 L 285.589844 214.875 L 254.792969 245.808594 L 174.320312 180.625 L 174.25 180.625 L 174.039062 180.484375 L 171.925781 180.484375 L 121.960938 236.929688 L 79.328125 213.886719 L 77.566406 213.886719 L 77.425781 214.027344 L 77.285156 214.027344 L 41.417969 247.570312 C 34.808594 229.730469 31.445312 210.855469 31.480469 191.832031 C 31.472656 184.285156 31.988281 176.753906 33.03125 169.28125 L 96.097656 133.835938 L 121.398438 150.324219 L 121.890625 150.535156 L 122.382812 150.535156 C 122.742188 150.523438 123.085938 150.398438 123.371094 150.183594 L 197.152344 96.980469 L 277.0625 155.539062 C 277.386719 155.78125 277.785156 155.90625 278.191406 155.890625 L 278.613281 155.890625 L 322.304688 143.839844 L 349.433594 162.375 C 354.238281 188.328125 352.597656 215.070312 344.640625 240.242188 Z M 338.511719 256.523438 L 325.472656 245.808594 L 298.132812 223.332031 L 337.804688 241.085938 L 343.585938 243.695312 C 342.035156 247.996094 340.34375 252.292969 338.511719 256.523438 Z M 321.8125 285.625 L 293.902344 251.796875 C 293.625 251.453125 293.222656 251.226562 292.777344 251.164062 L 258.742188 247.007812 L 286.929688 218.679688 L 318.992188 245.035156 L 336.960938 259.832031 C 332.726562 268.882812 327.652344 277.515625 321.8125 285.625 Z M 280.375 325.4375 L 250.355469 274.558594 L 250.214844 274.347656 L 185.171875 193.945312 L 253.808594 249.683594 L 254.160156 249.894531 L 254.230469 249.894531 L 254.652344 250.035156 L 291.582031 254.476562 L 319.625 288.441406 C 308.722656 302.898438 295.449219 315.410156 280.375 325.4375 Z M 191.796875 352.148438 C 146.058594 352.140625 102.496094 332.601562 72.070312 298.449219 L 137.394531 224.953125 L 173.195312 184.710938 L 247.394531 276.460938 L 277.414062 327.34375 C 251.808594 343.566406 222.109375 352.167969 191.796875 352.148438 Z M 53.605469 273.082031 L 79.328125 217.832031 L 119.566406 239.679688 L 69.746094 295.773438 C 63.722656 288.6875 58.320312 281.09375 53.605469 273.082031 Z M 69.390625 226.289062 L 73.054688 222.835938 L 51.421875 269.347656 C 48.175781 263.449219 45.304688 257.351562 42.828125 251.09375 Z M 191.796875 31.515625 C 267.199219 31.515625 332.382812 84.15625 348.375 157.371094 L 323.574219 140.390625 C 323.136719 140.101562 322.59375 140.023438 322.089844 140.175781 L 278.472656 152.226562 L 198.277344 93.527344 L 197.785156 93.242188 L 197.222656 93.242188 L 196.449219 93.457031 L 196.234375 93.597656 L 122.3125 146.730469 L 97.15625 130.3125 L 96.734375 130.097656 L 96.238281 130.097656 C 95.921875 130.085938 95.601562 130.160156 95.324219 130.3125 L 33.734375 164.839844 C 46.703125 88.59375 114 31.515625 191.796875 31.515625 Z M 352.746094 160.964844 C 338.019531 83.941406 270.367188 27.992188 191.796875 27.992188 C 110.539062 27.996094 41.566406 87.554688 29.71875 167.941406 C 28.554688 175.851562 27.96875 183.835938 27.957031 191.832031 C 27.929688 231.460938 42.304688 269.753906 68.402344 299.578125 C 127.90625 367.75 231.40625 374.78125 299.578125 315.28125 C 343.484375 276.957031 363.730469 218.199219 352.746094 160.964844 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

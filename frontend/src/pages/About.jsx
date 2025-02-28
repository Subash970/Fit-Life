import about1 from "../static/images/about-1.webp";
import about2 from "../static/images/about-2.webp";

const About = () => {
  return (
    <>
      <div className="about-image d-flex justify-content-center align-items-center">
        <p
          className="text-white"
          style={{ fontSize: "60px", fontWeight: "bolder" }}
        >
          About Fit Life
        </p>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 col-12">
            <img src={about1} alt="about" className="about-img" />
          </div>
          <div className="col-lg-6 col-12 p-5">
            <p className="h1 fw-bolder my-3">What's Fit Life?</p>
            <div>
              <p>
                Welcome to Fit Life, where we’ve redefined the modern workout
                with our Transformer Pilates classes. Inspired by the vibrant
                energy of NYC, our sessions are tailored for the fast-paced
                London lifestyle.
              </p>
              <p>
                Each 50-minute class takes place on our custom-built,
                resistance-based Transformer machines. We begin with a warm-up,
                move into a high-intensity full-body workout, and finish with a
                stretch and mindfulness session to reset both body and mind.
              </p>
              <p>
                At the core of Fit Life is the belief that a strong mind fuels a
                strong body. Embrace a “yes I can” mindset, and the results will
                follow. Our instructors will guide and motivate you, but the
                power to push through is in your hands.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 col-12 p-5">
            <p className="h1 fw-bolder my-3">
              Energized by Endorphins,
              <br /> Shaped by Innovation.
            </p>
            <div>
              <p>
                Energized by endorphins, shaped by innovation, Fit Life is
                designed to target slow-twitch muscle fibers, enhancing both
                strength and metabolism.
              </p>
              <p>
                While intense, the workout is gentle on the joints,
                incorporating resistance-based, mindful movements that are
                intensified to deliver transformational results. We call it
                Transformer Pilates.
              </p>
              <p>
                At the core of Fit Life is the belief that a strong mind-body
                connection is essential for achieving lasting results and
                surpassing personal goals. Each session concludes with five
                minutes of endorphin-boosting mindfulness and breathwork,
                helping to center the mind and prepare you to navigate the
                demands of modern life.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <img src={about2} alt="img" className="about-img" />
          </div>
        </div>
      </div>

      <div className="w-100 about-end text-center">
        <h1 className="pt-3 pb-1">Fit Life</h1>
        <p className="pb-3">
          Inspired by the Big Apple, on the pulse of the Big Smoke,
          <br /> we redefine the modern-day workout with our signature
          Transformer Pilates classes.
        </p>
      </div>
    </>
  );
};

export default About;

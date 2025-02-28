import VideoBg from "../static/videos/bgVideo.mp4";
import Index1 from "../static/images/index-1.webp";

const Index = () => {
  const user = localStorage.getItem("user");

  return (
    <>
      <div className="video-container">
        <video src={VideoBg} autoPlay loop />
        <div className="content">
          <p className="fit-life">FIT LIFE</p>
          <p className="h3" style={{ letterSpacing: "15px" }}>
            TRANSFORMER PILATES
          </p>
          <a
            href={user ? `/dashboard` : `/login`}
            className="btn px-5 py-2 border rounded text-white mt-5"
          >
            Start Class
          </a>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src={Index1} alt={"index1"} />
          </div>
          <div className="col-12 col-lg-6 p-3">
            <p className="h1">FIT LIFE TRANSFORMER PILATES</p>
            <div className="mt-5">
              <p>
                Inspired by the Big Apple, on the pulse of the Big Smoke – we
                redefine the modern-day Pilates inspired workout at our
                Transformer Pilates studio. We capture that New York resilience
                and drive, tailored to the London lifestyle.
              </p>
              <p>
                Our 50-minute class is performed on our custom-made,
                resistance-based Transformer machines. Each class starts with a
                warm-up, followed by a full body high-intensity workout, and
                finishes with a stretch and a mindfulness session allowing for a
                full reset.
              </p>
              <p>
                The mind is at the forefront of our classes. We believe that a
                strong mind is the key to a strong body. Transform your mind
                into a ‘yes I can’ attitude and the results will speak for
                themselves. Our instructors are always there to motivate and
                lead the way, but it’s up to you to push through.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-5 py-4 d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#000", width: "99vw" }}
      >
        <p className="h2">FIT LIFE</p>
      </div>
    </>
  );
};

export default Index;

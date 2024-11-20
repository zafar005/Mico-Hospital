import '../css/body.css'
const Body = () => {
  return (
    <>
      <section class="hospital-section">
        <div class="hospital-content">
          <h1> MICO <span class="highlight">HOSPITAL</span></h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to making it look readable.
          </p>
          <button class="contact-btn">Contact Us</button>
        </div>
        <div class="hospital-image">
          <img src='../../images/bg-1.jpg' alt="Hospital Illustration"/>
        </div>
      </section>
    </>
  );
};
export default Body;

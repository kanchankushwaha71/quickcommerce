import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>About QuickCommerce</h1>
          <p>
            Revolutionizing online grocery shopping in India with lightning-fast delivery, 
            an extensive catalog of high-quality products, and an unmatched user experience.
          </p>
        </div>
        <div className="hero-image">
          <img src="/images/banner.png" alt="QuickCommerce Banner" />
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            At QuickCommerce, our mission is to provide customers with the fastest, most 
            convenient, and reliable grocery shopping experience. We believe in delivering 
            fresh and quality products right to your doorstep, saving your time and energy.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To be India&apos;s most trusted online grocery delivery platform by consistently 
            exceeding customer expectations with innovative technology, sustainable practices, 
            and excellent service.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <h2>Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Customer First</h3>
            <p>We prioritize customer satisfaction above everything else.</p>
          </div>
          <div className="value-card">
            <h3>Quality Assurance</h3>
            <p>Only the freshest and highest-quality products make it to your doorstep.</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We embrace cutting-edge technology to redefine online grocery shopping.</p>
          </div>
          <div className="value-card">
            <h3>Sustainability</h3>
            <p>We are committed to reducing our environmental impact at every stage.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose QuickCommerce?</h2>
        <ul className="reasons-list">
          <li>
            <strong>Fastest Delivery:</strong> Guaranteed delivery within 15 minutes or less.
          </li>
          <li>
            <strong>Wide Product Range:</strong> From fresh fruits to daily essentials, we have it all.
          </li>
          <li>
            <strong>Affordable Pricing:</strong> Competitive prices with exciting discounts.
          </li>
          <li>
            <strong>User-Friendly App:</strong> Intuitive and simple design for seamless navigation.
          </li>
          <li>
            <strong>Trusted by Thousands:</strong> Over 100,000 satisfied customers across India.
          </li>
        </ul>
      </section>

      {/* Meet Our Team */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/images/team-member1.jpg" alt="CEO" />
            <h3>Daksh Jain</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="/images/team-member2.jpg" alt="CTO" />
            <h3>Shubham Kushwaha</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <img src="/images/team-member3.jpg" alt="Marketing Head" />
            <h3>Prashant Chauhan</h3>
            <p>Head of Marketing</p>
          </div>
          <div className="team-member">
            <img src="/images/team-member4.jpg" alt="Operations Manager" />
            <h3>Khushi Pathak</h3>
            <p>Operations Manager</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial-card">
            <p>
              "              &quot;QuickCommerce has been a lifesaver! The delivery is super fast, and the 
              products are always fresh. Highly recommended!&quot;"
            </p>
            <h4>- Ananya Singh</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "I’m amazed by their wide range of products and seamless app experience. 
              QuickCommerce is my go-to for groceries!"
            </p>
            <h4>- Ravi Mehta</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "Excellent service! They’ve made grocery shopping so easy and convenient. 
              Keep up the great work!"
            </p>
            <h4>- Sneha Kapoor</h4>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="call-to-action">
        <h2>Experience the QuickCommerce Difference</h2>
        <p>
          Join thousands of happy customers and enjoy hassle-free grocery shopping today. 
          Download our app or shop online to get started!
        </p>
        <button className="cta-button">Download the App</button>
      </section>
    </div>
  );
};

export default AboutUs;

import { useState } from "react";
import "./App.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MapPin } from "lucide-react";
export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const services = [
    { icon: "💼", title: "B2B Event Management", desc: "Seamless, tech-driven event experiences tailored for audiences of every scale and industry." },
    { icon: "💡", title: "Event IP Creation (Digital + On-Ground)", desc: "Designing unique intellectual properties — from digital experiences to large-scale events — that engage audiences deeply." },
    { icon: "👥", title: "Influencer Marketing", desc: "Crafting authentic collaborations with the right voices to amplify your brand’s reach." },
    { icon: "📝", title: "Content & Communications", desc: "Strategic content creation and impactful storytelling that strengthen brand narratives." }
  ];

  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
  <div className="overlay">
   <img src="/logo-white.svg" alt="Kight Verse Logo" className="logo" />
    <h1>Stories that Soar. Experiences that Transform.</h1>
    <p className="lead">
      At <strong>Kight</strong>, we help brands rise with purpose — through events, content, and collaborations that inspire and connect.
    </p>
    <a className="cta" href="#contact">Let's Collaborate</a>
  </div>
</header>

      {/* About Section */}
      <main className="container">
        <section className="about">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              The kite has long symbolized freedom, creativity, and the courage to rise against the wind.
              At <strong>Kight</strong>, we believe every story deserves to take flight — through impactful events,
              meaningful collaborations, and content that resonates. We craft experiences that soar higher and stay with people longer.
            </p>
            <p>
              With creativity at our core and trust as our foundation, <strong>Kight</strong> is where ideas rise and brands truly connect.
            </p>
          </div>
          <div className="about-image">
            <img
              src="/about.jpg"
              alt="About Kight Verse"
            />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services">
          <h2>Our Services</h2>
          <div className="grid">
            {services.map((s, i) => (
              <div key={i} className="card">
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
<section id="work" className="work">
  <h2>Our Work</h2>
<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={20}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  loop={true}
  autoplay={{
    delay: 3000,     // 3 seconds per slide
    disableOnInteraction: false,  // keeps autoplay after manual swipe/click
    pauseOnMouseEnter: true,     // ✅ pause when hovering
  }}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
  {[
    "/work1.jpg",
    "/work2.jpg",
    "/work3.jpg",
    "/work4.jpg",
    "/work5.jpg",
    "/work6.jpg",
    "/work7.jpg",
    "/work8.jpg",
    "/work9.jpg",
    "/work10.jpg",
    "/work11.jpg",
    "/work12.jpg",
    "/work13.jpg",
    "/work14.jpg",
    "/work15.jpg",
    "/work16.jpg",
     "/work17.jpg",
      "/work18.jpg",
       "/work19.jpg",
  ].map((img, i) => (
    <SwiperSlide key={i}>
      <img src={img} alt={`Work sample ${i + 1}`} />
    </SwiperSlide>
  ))}
</Swiper>
</section>
{/* Presence Section */}
<section className="presence">
  <h2>Our Team’s Presence Across India</h2>
  <p>
    With collaborators based in Mumbai, Delhi, and Bangalore, 
    Kight stays connected to the country’s leading creative hubs.
  </p>
  <div className="presence-cities">
    <div className="city-card">
      <MapPin size={32} />
      <span>Mumbai</span>
    </div>
    <div className="city-card">
      <MapPin size={32} />
      <span>Delhi</span>
    </div>
    <div className="city-card">
      <MapPin size={32} />
      <span>Bangalore</span>
    </div>
  </div>
</section>
{/* CTA Banner */}
<section className="cta-banner">
  <h2>Events. Content. Stories. Collaborations. Let’s build what matters together.</h2>
  <div className="cta-buttons">
    <a className="cta-btn" href="https://wa.me/919769823465" target="_blank" rel="noopener noreferrer">
      Chat on WhatsApp
    </a>
    <a className="cta-btn alt" href="mailto:kartik.mudliyar@kightverse.com">
      Email Us
    </a>
  </div>
</section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <h2>Contact Us</h2>
          <p>📧 kartik.mudliyar@kightverse.com</p>
          <p>📱 +91 97698 23465</p>

          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your Name" />
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Your Email" />
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Your Message" rows="4" />
            <button className="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="footer">
  <img src="/logo-black.svg" alt="Kight Verse Logo" className="logo-small" />
  <p>© {new Date().getFullYear()} Kight Verse. All rights reserved.</p>
</footer>


      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919769823465"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
}

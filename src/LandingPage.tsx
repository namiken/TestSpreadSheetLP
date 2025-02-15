import './css/landingPage.css';

export type LandingPageProps = {
  menu: {
    home: string;
    about: string;
    services: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    description: string;
    details: {
      companyName: string;
      established: string;
      employees: string;
      business: string;
    };
  };
  services: {
    title: string;
    list: { title: string; description: string }[];
  };
  contact: {
    title: string;
    info: {
      address: { title: string; details: string[] };
      contact: { title: string; details: string[] };
      hours: { title: string; details: string[] };
    };
  };
};

export const LandingPage = (data: LandingPageProps) => {
  const TEXTS = data;

  const menuItems = [
    { id: 'hero', label: TEXTS.menu.home },
    { id: 'about', label: TEXTS.menu.about },
    { id: 'services', label: TEXTS.menu.services },
    { id: 'contact', label: TEXTS.menu.contact },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="landing-page">
        <nav className="main-nav">
          <div className="nav-container">
            <ul className="nav-list">
              {menuItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <button
                    onClick={() => handleScroll(item.id)}
                    className="nav-link"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <section id="hero" className="hero-section">
          <div className="hero-image">
            <img src="image/topContent.webp" alt="メインビジュアル" />
          </div>
          <div className="hero-content">
            <h1>{TEXTS.hero.title}</h1>
            <p className="sub-title">{TEXTS.hero.subtitle}</p>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-container">
            <div className="about-image">
              <img src="image/office.webp" alt="会社について" />
            </div>
            <div className="about-content">
              <h2>{TEXTS.about.title}</h2>
              <p>{TEXTS.about.description}</p>
              <ul className="about-details">
                <li>{TEXTS.about.details.companyName}</li>
                <li>{TEXTS.about.details.established}</li>
                <li>{TEXTS.about.details.employees}</li>
                <li>{TEXTS.about.details.business}</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="services-section">
          <h2>{TEXTS.services.title}</h2>
          <div className="services-container">
            {TEXTS.services.list.map((service, index) => (
              <div className="service-card" key={index}>
                <img
                  src={`image/service${index + 1}.webp`}
                  alt={service.title}
                />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-container">
            <h2>{TEXTS.contact.title}</h2>
            <div className="contact-info">
              {Object.values(TEXTS.contact.info).map((item, index) => (
                <div className="contact-item" key={index}>
                  <h3>{item.title}</h3>
                  {item.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

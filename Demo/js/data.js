// Datos de la demo. En la versión real todo esto sale del admin de Bubble.
// Los eventos marcados como sample:true son de ejemplo.
window.BS = window.BS || {};

BS.events = [
  {
    id: 'spain-2026',
    sample: true,
    title: 'Spain Cybersecurity & Digital Trust Summit 2026',
    city: 'Madrid', country: 'Spain',
    date: '2026-11-12', time: '8:00 am',
    format: 'In-person event', access: 'Private',
    image: 'assets/img/evento-1.jpg',
    short: 'Focused on national cyber resilience, critical infrastructure protection, data trust, NIS2 and DORA compliance.',
    topics: ['National cyber resilience', 'Critical infrastructure protection', 'NIS2 & DORA compliance', 'Data trust & privacy', 'AI and emerging threats', 'Public-private collaboration'],
    speakers: 24,
    venue: 'Venue to be confirmed, Madrid'
  },
  {
    id: 'mexico-2027',
    sample: true,
    title: 'Mexico Cybersecurity & Digital Trust Summit 2027',
    city: 'Mexico City', country: 'Mexico',
    date: '2027-02-18', time: '8:00 am',
    format: 'In-person event', access: 'Private',
    image: 'assets/img/evento-2.jpg',
    short: 'Bringing together CISOs, regulators and critical infrastructure operators to discuss cyber policy, AI risk and digital identity.',
    topics: ['Cyber policy & regulation', 'AI risk', 'Digital identity', 'Financial sector security', 'Cloud security', 'Talent & skills'],
    speakers: 18,
    venue: 'Venue to be confirmed, Mexico City'
  },
  {
    id: 'argentina-2027',
    sample: true,
    title: 'Argentina Cybersecurity & Digital Trust Summit 2027',
    city: 'Buenos Aires', country: 'Argentina',
    date: '2027-04-22', time: '8:00 am',
    format: 'In-person event', access: 'Private',
    image: 'assets/img/evento-3.jpg',
    short: 'Public-private collaboration on digital risk, data protection, financial sector security and emerging threats.',
    topics: ['Digital risk', 'Data protection', 'Financial sector security', 'Emerging threats', 'Government collaboration', 'Incident response'],
    speakers: 20,
    venue: 'Venue to be confirmed, Buenos Aires'
  },
  {
    id: 'portugal-2027',
    sample: true,
    title: 'Portugal Cybersecurity & Digital Trust Summit 2027',
    city: 'Lisbon', country: 'Portugal',
    date: '2027-06-10', time: '8:30 am',
    format: 'In-person event', access: 'Private',
    image: 'assets/photos/p13.jpg',
    short: 'A closed-door forum on cyber resilience for public administration, healthcare and energy operators.',
    topics: ['Public administration', 'Healthcare cybersecurity', 'Energy & utilities', 'Supply chain risk', 'Cyber insurance', 'Board-level governance'],
    speakers: 16,
    venue: 'Venue to be confirmed, Lisbon'
  },
  {
    id: 'spain-forum-2026',
    sample: false,
    title: 'Spain Cybersecurity and Data Trust Forum 2026',
    city: 'Madrid', country: 'Spain',
    date: '2026-05-21', time: '8:30 am',
    format: 'In-person event', access: 'Private',
    image: 'assets/img/summit-series.jpg',
    short: 'Building digital trust: an institutional and business vision for the digital economy.',
    topics: ['Digital trust', 'Data governance', 'Compliance (NIS2, DORA, ENS)', 'Identity & access', 'Public-private collaboration'],
    speakers: 20,
    venue: 'Madrid, Spain'
  }
];

BS.today = new Date('2026-09-21');
BS.upcoming = () => BS.events.filter(e => new Date(e.date) >= BS.today).sort((a, b) => a.date.localeCompare(b.date));
BS.past = () => BS.events.filter(e => new Date(e.date) < BS.today).sort((a, b) => b.date.localeCompare(a.date));
BS.byId = id => BS.events.find(e => e.id === id);

BS.fmtDate = iso => new Date(iso + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

// Fotos: álbum de Flickr "Spain Cybersecurity and Data Trust Forum 2026"
BS.photos = Array.from({ length: 20 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return { full: `assets/photos/p${n}.jpg`, thumb: `assets/photos/thumbs/p${n}.jpg` };
});

const pin = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>';
const person = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8z"/></svg>';
BS.icons = { pin, person };

// Tarjeta de evento (misma estructura que las de Bamberg Health)
BS.eventCard = e => {
  const isPast = new Date(e.date) < BS.today;
  return `
  <article class="event-card">
    <a class="event-media" href="event.html?id=${e.id}">
      <img src="${e.image}" alt="" loading="lazy">
      <div class="event-meta">
        <div>${pin}${e.city}, ${e.country}</div>
        <div>${person}${e.format}</div>
      </div>
      <span class="event-tag label">${isPast ? 'Past event' : e.access}</span>
    </a>
    <div class="event-body">
      <h3 class="heading"><a href="event.html?id=${e.id}">${e.title}</a></h3>
      <p class="event-date data">${BS.fmtDate(e.date)} | ${e.time} (local time)</p>
      <p class="event-desc">${e.short}</p>
    </div>
    <div class="event-speakers">
      <div class="speaker"><span class="avatar">SN</span><div><strong>Speaker name</strong><small>Organization · Role</small></div></div>
      <div class="speaker"><span class="avatar">SN</span><div><strong>Speaker name</strong><small>Organization · Role</small></div></div>
    </div>
    <p class="event-more">See more <a href="event.html?id=${e.id}#speakers"><b class="data">${e.speakers} speakers</b></a></p>
    ${isPast
      ? `<a class="btn btn-outline" href="event.html?id=${e.id}">View event</a>`
      : `<a class="btn btn-purple" href="event.html?id=${e.id}#register">Participate</a>`}
  </article>`;
};

// Testimonios enviados por el cliente (Google Sheet del Spain Cybersecurity and Data Trust Forum 2026)
BS.testimonials = [
  {
    "name": "Jesús Valverde Romero",
    "role": "Profesor Asociado del Máster en Ciberseguridad",
    "org": "UC3M",
    "quote": "Cybersecurity is the foundation Digital Trust.",
    "linkedin": "https://www.linkedin.com/in/jesusvalverderomero/",
    "initials": "JV"
  },
  {
    "name": "Pilar Dolç",
    "role": "DPO (Spain)",
    "org": "Airbus",
    "quote": "In the era of the AI Act and complex data ecosystems, governance is no longer just a legal requirement — it is a strategic pillar. For the aerospace industry and beyond, building trust through transparent, ethical, and proactive compliance is the only way to ensure that technological innovation is sustainable and resilient",
    "linkedin": "https://www.linkedin.com/in/pilar-dol%C3%A7-93877569?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    "initials": "PD"
  },
  {
    "name": "Alfonso Martínez",
    "role": "Country Sales Manager",
    "org": "Thales Cyber Security Products",
    "quote": "Do we really have the control over our own digital destiny?",
    "linkedin": "https://linkedin.com/in/alfonso-martinez-93600a6",
    "initials": "AM"
  },
  {
    "name": "Vicente Camús",
    "role": "Cybersecurity Manager",
    "org": "Globalvia",
    "quote": "My expectations for this event are to exchange views with CISOs from other organisations, to understand how each organisation is incorporating resilience into its strategic planning, and to identify common challenges where collaboration can strengthen the continuity of the critical infrastructure we manage.",
    "linkedin": "https://www.linkedin.com/in/vicentecamusmartinez",
    "initials": "VC"
  },
  {
    "name": "Jaime Pérez Badía",
    "role": "CDO",
    "org": "Cajasiete",
    "quote": "Estos foros son una oportunidad única para compartir visión, impulsar la innovación y acelerar el impacto del dato en nuestras organizaciones. Me permiten conectar con líderes que están transformando el sector y llevar nuevas ideas a nuestra estrategia de datos e IA. Nos ayudan a anticipar tendencias, inspirar a nuestro ecosistema y consolidar una cultura impulsada por el dato. Son espacios que potencian la colaboración y convierten el conocimiento en valor real para clientes y negocio.",
    "linkedin": "https://www.linkedin.com/in/jaimeperezbadiaimprovedigital/",
    "initials": "JP"
  },
  {
    "name": "Javier Montoya Tomás",
    "role": "Responsable de zona de Ciberseguridad, Continuidad y Riesgos",
    "org": "VEOLIA",
    "quote": "Compartir, colaborar e innovar son clave para sobrevivir.",
    "linkedin": "https://linkedin.com/in/javier-montoya-tomás-27bb386",
    "initials": "JM"
  },
  {
    "name": "Mabel Gonzalez Centenera",
    "role": "Subdirectora General de Operaciones",
    "org": "Agencia de Ciberseguridad de la Comunidad de Madrid",
    "quote": "Para mí, participar en la mesa inaugural del Spain Cybersecurity and Data Trust Forum es importante porque conecta plenamente con aquello en lo que creo: la ciberseguridad es compartir. Este foro nace precisamente para reforzar la confianza digital y la resiliencia en los sectores más críticos, y eso solo es posible si abrimos el conocimiento, si aprendemos unos de otros y si construimos juntos. Cuando compartimos experiencias y aprendizajes, no solo crecemos como profesionales: fortalecemos la confianza, elevamos el nivel de protección y contribuimos a una verdadera soberanía digital",
    "linkedin": "https://www.linkedin.com/in/mabel-gonzalez",
    "initials": "MG"
  }
];

const inIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6zM8 19H5V9.5h3zM6.5 8.2a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5zM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5S12.7 13 12.7 14.3V19h-3V9.5h2.8v1.3c.4-.8 1.4-1.5 2.9-1.5 3 0 3.6 2 3.6 4.6z"/></svg>';

BS.testimonialCard = t => `
  <article class="t-card">
    <div>
      <svg class="t-quote" width="36" height="29" viewBox="0 0 40 32" fill="currentColor" aria-hidden="true"><path d="M0 32V19C0 8.5 5.2 2.2 15.6 0l1.9 4C12 5.6 9.4 9 9 14h8v18zm22 0V19C22 8.5 27.2 2.2 37.6 0l1.9 4C34 5.6 31.4 9 31 14h8v18z"/></svg>
      <blockquote>${t.quote}</blockquote>
      ${t.quote.length > 260 ? '<button class="t-more" type="button">Read more</button>' : ''}
    </div>
    <div class="t-person">
      <span class="avatar">${t.initials}</span>
      <div>
        <strong>${t.name}</strong>
        <small>${t.role}</small>
        <small class="t-org">${t.org}</small>
      </div>
      ${t.linkedin ? `<a class="t-in" href="${t.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${inIcon}</a>` : ''}
    </div>
  </article>`;

// Carrusel de testimonios con flechas laterales
BS.initCarousel = root => {
  const track = root.querySelector('.t-track');

  // "Read more" en los testimonios largos
  track.addEventListener('click', e => {
    const btn = e.target.closest('.t-more');
    if (!btn) return;
    const card = btn.closest('.t-card');
    const open = card.classList.toggle('open');
    btn.textContent = open ? 'Read less' : 'Read more';
  });

  const prev = root.querySelector('.t-nav.prev');
  const next = root.querySelector('.t-nav.next');
  const step = () => (track.firstElementChild ? track.firstElementChild.offsetWidth : 320) + 28;
  prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  const update = () => {
    prev.disabled = track.scrollLeft < 8;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
  };
  track.addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
};

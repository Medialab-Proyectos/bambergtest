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

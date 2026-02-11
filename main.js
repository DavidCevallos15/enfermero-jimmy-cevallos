import './style.css'

const whatsappMessage = 'Hola Lic. Jimmy Cevallos. Necesito información sobre sus servicios de enfermería a domicilio en Portoviejo. Quisiera solicitar una consulta y coordinar atención. Gracias.';
const whatsappUrl = `https://wa.me/593963251076?text=${encodeURIComponent(whatsappMessage)}`;

const baseUrl = import.meta.env?.BASE_URL ?? '/';
const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
const resolveAssetPath = (relativePath) => `${normalizedBaseUrl}${relativePath.replace(/^\/+/, '')}`;

const heroImageUrl = resolveAssetPath('assets/jimmycevallos.png');
const authorityImageUrl = resolveAssetPath('assets/jimmycevallos2.png');

// Signal that JS is active for progressive enhancement
document.body.classList.add('js-loaded');

const appRoot = document.querySelector('#app');

if (!appRoot) {
  console.error('Elemento raíz #app no encontrado en el DOM.');
} else {
  appRoot.innerHTML = `
  <header>
    <div class="container d-flex justify-content-between align-items-center py-2">
      <div class="logo d-flex align-items-center gap-2">
        <span class="logo-icon text-success fs-3"><i class="fas fa-heartbeat"></i></span>
        <h3 class="logo-text m-0 fs-5 text-dark fw-bold">Lic. Jimmy Cevallos</h3>
      </div>
      <a href="${whatsappUrl}" class="btn btn-primary sm-btn">Contactar</a>
    </div>
  </header>
  
  <section class="hero d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6 text-center text-lg-start hero-text">
          <h1 class="animate-on-scroll display-4 fw-bold text-dark mb-4">Enfermero Profesional a Domicilio en Portoviejo</h1>
          <p class="hero-subtitle animate-on-scroll delay-100 lead text-secondary mb-4">
            8 años de experiencia hospitalaria en áreas de Clínica, Cirugía y UCI. Atención segura y responsable en la comodidad de tu hogar.
          </p>
          <a href="${whatsappUrl}" class="btn btn-success btn-lg animate-on-scroll delay-200 shadow-lg px-4 py-3 rounded-pill">
            <i class="fab fa-whatsapp me-2"></i> Solicitar Atención por WhatsApp
          </a>
        </div>
        <div class="col-lg-6 text-center hero-image-container animate-on-scroll delay-300">
          <div class="float-wrapper hero-image-frame d-inline-block position-relative">
            <img src="${heroImageUrl}" alt="Lic. Jimmy Cevallos" class="hero-img img-fluid rounded-4" onerror="this.onerror=null; this.src='https://placehold.co/400x400?text=Foto+Profesional';"/>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="problem bg-white">
    <div class="container">
      <h2 class="animate-on-scroll text-center text-primary mb-5 fw-bold">¿Buscas tranquilidad y cuidado profesional?</h2>
      <div class="row g-4 problem-grid">
        <div class="col-md-4">
          <div class="problem-item animate-on-scroll delay-100 h-100 p-4 rounded-4 bg-light text-center shadow-sm border border-light-subtle d-flex flex-column align-items-center justify-content-center hover-lift">
            <i class="fas fa-ambulance display-4 text-primary mb-3"></i>
            <p class="mb-0 fw-medium text-dark">¿Se te dificulta trasladar a tu familiar a un centro médico?</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="problem-item animate-on-scroll delay-200 h-100 p-4 rounded-4 bg-light text-center shadow-sm border border-light-subtle d-flex flex-column align-items-center justify-content-center hover-lift">
            <i class="fas fa-procedures display-4 text-primary mb-3"></i>
            <p class="mb-0 fw-medium text-dark">¿Necesitas seguimiento postoperatorio seguro en casa?</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="problem-item animate-on-scroll delay-300 h-100 p-4 rounded-4 bg-light text-center shadow-sm border border-light-subtle d-flex flex-column align-items-center justify-content-center hover-lift">
            <i class="fas fa-syringe display-4 text-primary mb-3"></i>
            <p class="mb-0 fw-medium text-dark">¿Requiere control especializado de diabetes o signos vitales?</p>
          </div>
        </div>
      </div>
      <p class="problem-solution animate-on-scroll delay-300 text-center mt-5 pt-4 fs-3 text-success fw-bold" style="max-width: 800px; margin-left: auto; margin-right: auto;">Brindo atención ética y profesional para que tu familia esté tranquila.</p>
    </div>
  </section>

  <section class="services bg-light">
    <div class="container">
      <h2 class="animate-on-scroll text-center text-primary mb-5 fw-bold">Servicios Profesionales</h2>
      <div class="row g-4 services-grid">
        <div class="col-md-4">
          <div class="service-category animate-on-scroll delay-100 bg-white p-4 rounded-4 shadow-sm h-100 border-top border-4 border-primary hover-lift position-relative overflow-hidden">
            <h3 class="h4 text-primary mb-3 d-flex align-items-center gap-2"><i class="fas fa-briefcase-medical"></i> Procedimientos Clínicos</h3>
            <ul class="list-unstyled text-secondary">
              <li class="mb-2 d-flex align-items-start"><span class="text-success fw-bold me-2">•</span> <span>Curación de heridas</span></li>
              <li class="mb-2 d-flex align-items-start"><span class="text-success fw-bold me-2">•</span> <span>Curación pie diabético</span></li>
              <li class="mb-2 d-flex align-items-start"><span class="text-success fw-bold me-2">•</span> <span>Administración de medicamentos</span></li>
              <li class="mb-2 d-flex align-items-start"><span class="text-success fw-bold me-2">•</span> <span>Inyecciones (IV, IM, SC, ID)</span></li>
              <li class="mb-2 d-flex align-items-start"><span class="text-success fw-bold me-2">•</span> <span>Canalización de vías</span></li>
              <li class="mb-2 d-flex align-items-start"><span class="text-success fw-bold me-2">•</span> <span>Sueroterapia</span></li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-category animate-on-scroll delay-200 bg-white p-4 rounded-4 shadow-sm h-100 border-top border-4 border-primary hover-lift position-relative overflow-hidden">
            <h3 class="h4 text-primary mb-3 d-flex align-items-center gap-2"><i class="fas fa-stethoscope"></i> Control y Monitoreo</h3>
            <ul class="list-unstyled text-secondary">
              <li class="mb-2 d-flex align-items-start"><span class="text-success fw-bold me-2">•</span> <span>Toma de signos vitales</span></li>
              <li class="mb-2 d-flex align-items-start"><span class="text-success fw-bold me-2">•</span> <span>Control de glucemias</span></li>
              <li class="mb-2 d-flex align-items-start"><span class="text-success fw-bold me-2">•</span> <span>Seguimiento de crónicos</span></li>
            </ul>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-category animate-on-scroll delay-300 bg-white p-4 rounded-4 shadow-sm h-100 border-top border-4 border-primary hover-lift position-relative overflow-hidden">
            <h3 class="h4 text-primary mb-3 d-flex align-items-center gap-2"><i class="fas fa-user-nurse"></i> Atención Especializada</h3>
            <ul class="list-unstyled text-secondary">
              <li class="mb-2 d-flex align-items-start"><span class="text-success fw-bold me-2">•</span> <span>Cuidados postoperatorios</span></li>
              <li class="mb-2 d-flex align-items-start"><span class="text-success fw-bold me-2">•</span> <span>Atención al adulto mayor</span></li>
              <li class="mb-2 d-flex align-items-start"><span class="text-success fw-bold me-2">•</span> <span>Acompañamiento hospitalario</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="services-cta animate-on-scroll delay-300 text-center mt-5">
        <a href="${whatsappUrl}" class="btn btn-outline-primary rounded-pill px-4 py-2">Consultar Servicio Específico</a>
      </div>
    </div>
  </section>

  <section class="authority bg-white">
    <div class="container">
      <div class="row align-items-center authority-content g-5">
        <div class="col-lg-6 authority-text animate-on-scroll">
          <h2 class="text-primary fw-bold mb-4">Experiencia y Confianza</h2>
          <ul class="list-unstyled d-flex flex-column gap-3">
            <li class="fs-5 d-flex align-items-center gap-3"><i class="fas fa-check-circle text-success fs-4"></i> <strong>Licenciado en Enfermería</strong></li>
            <li class="fs-5 d-flex align-items-center gap-3"><i class="fas fa-check-circle text-success fs-4"></i> <strong>8 años de experiencia</strong> en el IESS</li>
            <li class="fs-5 d-flex align-items-center gap-3"><i class="fas fa-check-circle text-success fs-4"></i> Experiencia en Clínica, Cirugía y UCI</li>
            <li class="fs-5 d-flex align-items-center gap-3"><i class="fas fa-check-circle text-success fs-4"></i> Protocolos hospitalarios en domicilio</li>
            <li class="fs-5 d-flex align-items-center gap-3"><i class="fas fa-check-circle text-success fs-4"></i> Puntualidad y trato humano</li>
          </ul>
        </div>
        <div class="col-lg-6 text-center authority-icon animate-on-scroll delay-200">
            <div class="float-wrapper authority-image-frame d-inline-block bg-white p-2 rounded-4 shadow">
              <img src="${authorityImageUrl}" alt="Lic. Jimmy Cevallos Certificado" class="authority-img img-fluid rounded-3" style="max-height: 400px;" onerror="this.style.display='none'; document.querySelector('.authority-icon').innerHTML='<i class=\'fas fa-user-md display-1 text-primary opacity-25\'></i>'"/>
            </div>
         </div>
      </div>
    </div>
  </section>

  <section class="testimonials bg-primary text-white text-center">
    <div class="container">
      <h2 class="animate-on-scroll text-white mb-5 fw-bold">Lo que dicen mis pacientes</h2>
      <div class="testimonial-card animate-on-scroll delay-200 bg-white bg-opacity-10 p-5 rounded-4 mx-auto hover-lift backdrop-blur" style="max-width: 800px;">
        <p class="fs-4 fst-italic mb-4">"Excelente atención, muy profesional y con una calidad humana increíble. Nos dio mucha tranquilidad con el cuidado de mi papá."</p>
        <div class="stars text-warning fs-5 mb-3">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
        <span class="fw-bold fs-5">- Familia M. (Portoviejo)</span>
      </div>
    </div>
  </section>

  <section class="final-cta text-center">
    <div class="container">
      <h2 class="animate-on-scroll fw-bold mb-4">La salud de tu familia merece atención profesional y segura</h2>
      <a href="${whatsappUrl}" class="btn btn-success btn-lg animate-on-scroll delay-100 shadow-lg px-5 py-3 rounded-pill fw-bold">
        <i class="fab fa-whatsapp me-2"></i> Agendar Atención por WhatsApp
      </a>
    </div>
  </section>

  <section class="survey position-relative overflow-hidden">
    <div class="container">
      <div class="survey-card animate-on-scroll bg-white p-5 rounded-4 shadow-lg">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6 survey-text">
            <h2 class="fw-bold mb-3">Tu opinión nos ayuda a cuidar mejor</h2>
            <p class="text-secondary lead">
              Como paciente o familiar, tu retroalimentación nos da más confianza y nos permite
              ofrecer una experiencia clara, humana y segura.
            </p>
          </div>
          <div class="col-lg-6">
             <form class="survey-form d-flex flex-column gap-3" aria-label="Encuesta breve de retroalimentación">
              <div class="survey-field">
                <span class="field-label fw-bold d-block mb-2">¿Cómo calificas la experiencia en la web?</span>
                <div class="rating-stars d-inline-flex flex-row-reverse gap-2" role="radiogroup" aria-label="Calificación de 1 a 5 estrellas">
                  <input type="radio" id="star5" name="rating" value="5" class="d-none"/>
                  <label for="star5" title="5 estrellas" class="fs-2 text-secondary cursor-pointer hover-text-warning transition"><i class="fas fa-star"></i></label>
                  <input type="radio" id="star4" name="rating" value="4" class="d-none"/>
                  <label for="star4" title="4 estrellas" class="fs-2 text-secondary cursor-pointer hover-text-warning transition"><i class="fas fa-star"></i></label>
                  <input type="radio" id="star3" name="rating" value="3" class="d-none"/>
                  <label for="star3" title="3 estrellas" class="fs-2 text-secondary cursor-pointer hover-text-warning transition"><i class="fas fa-star"></i></label>
                  <input type="radio" id="star2" name="rating" value="2" class="d-none"/>
                  <label for="star2" title="2 estrellas" class="fs-2 text-secondary cursor-pointer hover-text-warning transition"><i class="fas fa-star"></i></label>
                  <input type="radio" id="star1" name="rating" value="1" class="d-none"/>
                  <label for="star1" title="1 estrella" class="fs-2 text-secondary cursor-pointer hover-text-warning transition"><i class="fas fa-star"></i></label>
                </div>
              </div>
              <div class="survey-field">
                <label class="field-label fw-bold mb-2" for="survey-message">¿Qué te dio más confianza?</label>
                <textarea id="survey-message" name="message" rows="3" class="form-control rounded-3" placeholder="Ej: claridad de la información, trato humano, experiencia..."></textarea>
              </div>
              <div class="survey-actions d-flex flex-wrap align-items-center gap-3">
                <button class="btn btn-primary px-4 py-2 rounded-pill" type="submit">Enviar feedback</button>
                <span class="survey-note small text-muted"><i class="fas fa-lock me-1"></i> Tu respuesta es privada y breve.</span>
                <span class="survey-status small fw-bold d-block w-100 mt-2 opacity-0 transition"></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-dark text-white py-5 text-center">
    <div class="container">
      <p class="mb-0 text-secondary">&copy; 2026 Lic. Jimmy Cevallos - Servicios de Enfermería. Todos los derechos reservados.</p>
    </div>
  </footer>

  <a href="${whatsappUrl}" class="floating-whatsapp position-fixed bottom-0 end-0 m-4 btn btn-success rounded-circle shadow-lg d-flex align-items-center justify-content-center p-0" style="width: 60px; height: 60px; z-index: 1050;" aria-label="Chat en WhatsApp">
    <i class="fab fa-whatsapp fs-2"></i>
  </a>
`
}

// Animation Logic - Executed immediately after content injection
const initAnimations = () => {
  // Scroll Observer
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  // Check if elements exist to avoid errors
  if (animatedElements.length === 0) return;

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    animatedElements.forEach(el => el.classList.add('is-visible'));
  }

  // Sticky Header
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Survey feedback
  const surveyForm = document.querySelector('.survey-form');
  if (surveyForm) {
    const status = surveyForm.querySelector('.survey-status');
    surveyForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const rating = surveyForm.querySelector('input[name="rating"]:checked');
      const messageField = surveyForm.querySelector('#survey-message');
      const message = messageField ? messageField.value.trim() : '';

      if (status) {
        status.classList.remove('is-error');
      }

      if (!rating && !message) {
        if (status) {
          status.textContent = 'Selecciona una calificación o escribe un comentario para enviar.';
          status.classList.add('is-visible', 'is-error');
        }
        return;
      }

      const ratingText = rating ? `${rating.value}/5` : 'Sin calificación';
      const feedback = `Feedback web - Lic. Jimmy Cevallos:\n` +
        `Calificación: ${ratingText}\n` +
        `Comentario: ${message || 'Sin comentario'}`;

      const waUrl = `https://wa.me/593963251076?text=${encodeURIComponent(feedback)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      if (status) {
        status.textContent = 'Gracias por tu retroalimentación. Se abrirá WhatsApp para enviarla.';
        status.classList.add('is-visible');
      }
      surveyForm.reset();
    });
  }
};

// Run animations immediately
initAnimations();

import { useEffect, useState } from 'react'
import {
  Alert,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Nav,
  Navbar,
  Row,
} from 'react-bootstrap'
import './App.css'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#courses', label: 'Courses' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

const features = [
  {
    icon: 'bi-patch-check-fill',
    title: 'Certified Courses',
    description:
      'Industry-recognized certifications that strengthen your resume and career prospects.',
  },
  {
    icon: 'bi-person-workspace',
    title: 'Expert Trainers',
    description:
      'Learn from professionals with 10+ years of real industry and classroom experience.',
  },
  {
    icon: 'bi-briefcase-fill',
    title: 'Placement Support',
    description:
      'Dedicated guidance for interviews, portfolios, resume building, and job readiness.',
  },
]

const highlights = [
  {
    title: 'Practical Training',
    description: '80% practical sessions backed by live projects and guided exercises.',
  },
  {
    title: 'Flexible Timing',
    description:
      'Morning, afternoon, evening, and weekend batches for students and professionals.',
  },
  {
    title: 'Lab Facilities',
    description: 'Modern computer lab setup with updated tools and project-ready environments.',
  },
  {
    title: 'Affordable Fees',
    description: 'Value-focused pricing with the current 60% promotional offer.',
  },
]

const stats = [
  { value: '1200+', label: 'Students Trained' },
  { value: '25+', label: 'Courses Offered' },
  { value: '15+', label: 'Certified Trainers' },
  { value: '98%', label: 'Satisfaction Rate' },
]

const courseTabs = [
  { key: 'all', label: 'All Courses' },
  { key: 'development', label: 'Development' },
  { key: 'design', label: 'Design' },
  { key: 'marketing', label: 'Marketing' },
  { key: 'professional', label: 'Professional' },
]

const courses = [
  {
    title: 'Full Stack Web Development',
    category: 'development',
    label: 'Development',
    badgeBg: 'primary',
    duration: '3 Months',
    originalPrice: 'Rs. 25,000',
    price: 'Rs. 10,000',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1470&q=80',
    description:
      'Master front-end and back-end technologies to build complete web applications from scratch.',
  },
  {
    title: 'Professional Graphic Design',
    category: 'design',
    label: 'Design',
    badgeBg: 'success',
    duration: '2 Months',
    originalPrice: 'Rs. 18,000',
    price: 'Rs. 7,200',
    image:
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1470&q=80',
    description:
      'Master Adobe Creative Suite to create strong visuals for print, branding, and digital media.',
  },
  {
    title: 'Digital Marketing Mastery',
    category: 'marketing',
    label: 'Marketing',
    badgeBg: 'warning',
    badgeText: 'dark',
    duration: '2.5 Months',
    originalPrice: 'Rs. 20,000',
    price: 'Rs. 8,000',
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1528&q=80',
    description:
      'Comprehensive training in SEO, SEM, social media, analytics, email campaigns, and Google Ads.',
  },
  {
    title: 'Python Programming',
    category: 'professional',
    label: 'Professional',
    badgeBg: 'dark',
    duration: '2 Months',
    originalPrice: 'Rs. 16,000',
    price: 'Rs. 6,400',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1470&q=80',
    description:
      'Build a solid programming base with Python fundamentals, logic building, automation, and projects.',
  },
  {
    title: 'Data Science with Python',
    category: 'professional',
    label: 'Professional',
    badgeBg: 'info',
    duration: '3 Months',
    originalPrice: 'Rs. 22,000',
    price: 'Rs. 8,800',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80',
    description:
      'Learn analytics, dashboards, machine learning workflows, and practical data problem solving.',
  },
  {
    title: 'Mobile App Development',
    category: 'development',
    label: 'Development',
    badgeBg: 'primary',
    duration: '2.5 Months',
    originalPrice: 'Rs. 21,000',
    price: 'Rs. 8,400',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1470&q=80',
    description:
      'Create modern mobile apps with responsive UI, API integration, testing, and deployment basics.',
  },
]

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1471&q=80',
    alt: 'Classroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1469&q=80',
    alt: 'Computer Lab',
  },
  {
    src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1470&q=80',
    alt: 'Students Learning',
  },
  {
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1470&q=80',
    alt: 'Workshop',
  },
  {
    src: 'https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?auto=format&fit=crop&w=1470&q=80',
    alt: 'Certificate Distribution',
  },
  {
    src: 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?auto=format&fit=crop&w=1471&q=80',
    alt: 'Group Project',
  },
]

const testimonials = [
  {
    name: 'Priya Patel',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    rating: 5,
    quote:
      'The Full Stack Web Development course at MD16 completely transformed my career. The practical approach helped me land a job as a front-end developer within 2 months of completing the course.',
  },
  {
    name: 'Rahul Sharma',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 5,
    quote:
      'I took the Python Programming course and was amazed by the depth of knowledge our trainer had. The real-world projects gave me confidence to start freelancing immediately after completion.',
  },
  {
    name: 'Neha Gupta',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 4.5,
    quote:
      'The Graphic Design course exceeded my expectations. The faculty helped me build a strong portfolio that got me multiple job offers. The 60% discount made it incredibly affordable too!',
  },
]

const popupItems = [
  { icon: 'bi-telephone-fill', title: 'Call Us:', body: '+91 9313567098' },
  { icon: 'bi-whatsapp', title: 'Chat on WhatsApp:', body: '+91 9313567098' },
  {
    icon: 'bi-geo-alt-fill',
    title: 'Address:',
    body: 'Vishwanath Samam, EL-14, opp. Club O7 Road, Shela, Ahmedabad, Gujarat 380058',
  },
  {
    icon: 'bi-sign-turn-right-fill',
    title: 'Directions:',
    body: 'View the academy location on Google Maps.',
    href: 'https://maps.google.com/?q=MD16+Computer+Academy+Bopal',
  },
]

const footerCourses = [
  'Full Stack Web Development',
  'Professional Graphic Design',
  'Python Programming',
  'Digital Marketing',
  'Data Science with Python',
]

const socialLinks = [
  { icon: 'bi-facebook', href: 'https://www.facebook.com ', label: 'Facebook' },
  { icon: 'bi-instagram', href: 'https://www.instagram.com', label: 'Instagram' },
  { icon: 'bi-linkedin', href: 'https://www.linkedin.com', label: 'LinkedIn' },
  { icon: 'bi-youtube', href: 'https://www.youtube.com', label: 'YouTube' },
]

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  course: '',
  message: '',
}

function renderStars(rating) {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  for (let index = 0; index < fullStars; index += 1) {
    stars.push(<i key={`full-${index}`} className="bi bi-star-fill"></i>)
  }

  if (hasHalfStar) {
    stars.push(<i key="half" className="bi bi-star-half"></i>)
  }

  const emptyStars = 5 - Math.ceil(rating)

  for (let index = 0; index < emptyStars; index += 1) {
    stars.push(<i key={`empty-${index}`} className="bi bi-star"></i>)
  }

  return stars
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [activeCourseTab, setActiveCourseTab] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [showPromo, setShowPromo] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState(initialFormState)

  useEffect(() => {
    document.title = 'MD16 Computer Academy | React Bootstrap'

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const popupShown = Number(localStorage.getItem('popupShown') ?? '0')

    if (popupShown >= 2) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      setShowPromo(true)
      localStorage.setItem('popupShown', String(popupShown + 1))
    }, 3000)

    return () => window.clearTimeout(timer)
  }, [])

  const filteredCourses =
    activeCourseTab === 'all'
      ? courses
      : courses.filter((course) => course.category === activeCourseTab)

  const handleChange = ({ target }) => {
    const { name, value } = target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setFormData(initialFormState)
  }

  const handleNavClick = () => {
    setExpanded(false)
  }

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        className={`academy-navbar ${scrolled ? 'scrolled' : ''}`}
      >
        <Container>
          <Navbar.Brand href="#home" className="academy-brand" onClick={handleNavClick}>
            <span className="brand-md">MD16</span>{' '}
            <span className="brand-academy">Computer Academy</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="academy-navbar-nav"
            onClick={() => setExpanded((current) => !current)}
          />
          <Navbar.Collapse id="academy-navbar-nav">
            <Nav className="ms-auto align-items-lg-center">
              {navItems.map((item) => (
                <Nav.Link key={item.href} href={item.href} onClick={handleNavClick}>
                  {item.label}
                </Nav.Link>
              ))}
              <Button
                href="https://api.whatsapp.com/qr/PDAVETCRSSMQL1?autoload=1&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="ms-lg-3 mt-3 mt-lg-0 enquire-btn"
              >
                <i className="bi bi-whatsapp me-2"></i>
                Enquire Now
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <section id="home" className="hero-section">
          <Container>
            <Row className="align-items-center gy-5">
              <Col lg={6} className="hero-content">
                <Badge className="hero-badge">Bopal&apos;s Trusted IT Academy</Badge>
                <h1 className="hero-title">
                  Transform Your Career With <span>IT Skills</span>
                </h1>
                <p className="hero-copy">
                  Join MD16 Computer Academy with a live <strong>60% OFF</strong> offer
                  on practical courses in web development, design, Python, and digital
                  skills.
                </p>
                <div className="hero-actions">
                  <a href="#courses" className="btn btn-light btn-lg fw-bold px-4">
                    Explore Courses
                  </a>
                  <a
                    href="https://api.whatsapp.com/qr/PDAVETCRSSMQL1?autoload=1&app_absent=0"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light btn-lg px-4"
                  >
                    <i className="bi bi-whatsapp me-2"></i>
                    Chat Now
                  </a>
                </div>
                <div className="hero-review">
                  <div className="avatar-stack">
                    <img
                      src="https://randomuser.me/api/portraits/women/32.jpg"
                      alt="Student Priya"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/42.jpg"
                      alt="Student Arjun"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/63.jpg"
                      alt="Student Nisha"
                    />
                  </div>
                  <div>
                    <p className="mb-1">Trusted by 1200+ students across Bopal and Shela</p>
                    <div className="hero-stars">
                      {renderStars(5)}
                      <span>4.9/5 from 380 reviews</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} className="d-none d-lg-block">
                <div className="hero-illustration-wrap">
                  <img
                    src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
                    className="hero-illustration"
                    alt="Learning illustration"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section-padding feature-strip">
          <Container>
            <Row className="g-4">
              {features.map((feature) => (
                <Col key={feature.title} md={4}>
                  <div className="feature-card text-center">
                    <div className="feature-icon mx-auto">
                      <i className={`bi ${feature.icon}`}></i>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section id="about" className="section-padding academy-section">
          <Container>
            <Row className="align-items-center gy-5">
              <Col lg={6}>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1471&q=80"
                  alt="MD16 Computer Academy classroom"
                  className="about-image"
                />
              </Col>
              <Col lg={6}>
                <Badge className="section-label">About Us</Badge>
                <h2 className="section-heading">
                  Why Choose <span>MD16 Computer Academy</span>?
                </h2>
                <p className="section-copy">
                  Bopal&apos;s practical learning academy for students, freshers, and
                  working professionals who want job-ready IT skills.
                </p>
                <p className="section-copy section-copy-muted">
                  At MD16, project-based training bridges the gap between academic theory
                  and industry expectations. The goal is simple: make students capable of
                  building, presenting, and applying real skills quickly.
                </p>
                <Row className="g-3 mt-2">
                  {highlights.map((item) => (
                    <Col key={item.title} md={6}>
                      <div className="check-list-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
                <Button href="#courses" className="btn-gradient mt-4">
                  View Our Courses
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="stats-section section-padding">
          <Container>
            <Row className="g-4 text-center">
              {stats.map((stat) => (
                <Col key={stat.label} md={6} lg={3}>
                  <div className="counter-box">
                    <div className="counter-value">{stat.value}</div>
                    <h5>{stat.label}</h5>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section id="courses" className="section-padding courses-section">
          <Container>
            <div className="section-intro text-center">
              <Badge className="section-label">Our Courses</Badge>
              <h2 className="section-heading">
                Popular <span>Courses</span>
              </h2>
              <p className="section-copy section-copy-muted">
                Get a 60% discount on all featured courses this month. Limited seats
                available for new batches.
              </p>
            </div>

            <Nav
              variant="pills"
              className="justify-content-center course-pills"
              activeKey={activeCourseTab}
              onSelect={(key) => setActiveCourseTab(key ?? 'all')}
            >
              {courseTabs.map((tab) => (
                <Nav.Item key={tab.key}>
                  <Nav.Link eventKey={tab.key}>{tab.label}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>

            <Row className="g-4 mt-2">
              {filteredCourses.map((course) => (
                <Col key={course.title} md={6} xl={4}>
                  <Card className="course-card h-100">
                    <div className="discount-badge">
                      <span>60%</span>
                      <span>OFF</span>
                    </div>
                    <Card.Img
                      variant="top"
                      src={course.image}
                      alt={course.title}
                      className="course-category-img"
                    />
                    <Card.Body className="d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
                        <Badge bg={course.badgeBg} text={course.badgeText}>
                          {course.label}
                        </Badge>
                        <span className="course-duration">
                          <i className="bi bi-clock me-1"></i>
                          {course.duration}
                        </span>
                      </div>
                      <Card.Title>{course.title}</Card.Title>
                      <Card.Text className="flex-grow-1">{course.description}</Card.Text>
                      <div className="d-flex justify-content-between align-items-center gap-3 mt-3 flex-wrap">
                        <div className="price-row">
                          <span className="original-price">
                            <del>{course.originalPrice}</del>
                          </span>
                          <span className="sale-price">{course.price}</span>
                        </div>
                        <Button
                          href="https://api.whatsapp.com/qr/PDAVETCRSSMQL1?autoload=1&app_absent=0"
                          target="_blank"
                          rel="noreferrer"
                          className="btn-gradient btn-sm"
                        >
                          Enroll Now
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <div className="text-center mt-5">
              <Button
                variant="outline-primary"
                size="lg"
                href="https://api.whatsapp.com/qr/PDAVETCRSSMQL1?autoload=1&app_absent=0"
                target="_blank"
                rel="noreferrer"
              >
                View All 25+ Courses
              </Button>
            </div>
          </Container>
        </section>

        <section id="gallery" className="section-padding academy-section">
          <Container>
            <div className="section-intro text-center">
              <Badge className="section-label">Gallery</Badge>
              <h2 className="section-heading">
                Our <span>Campus</span> &amp; <span>Activities</span>
              </h2>
              <p className="section-copy section-copy-muted">
                Take a visual tour of the academy environment, workshops, and student
                activities.
              </p>
            </div>

            <Row className="g-3">
              {galleryImages.map((image) => (
                <Col key={image.src} md={6} lg={4}>
                  <button
                    type="button"
                    className="gallery-button"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img src={image.src} alt={image.alt} className="gallery-image" />
                  </button>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section id="testimonials" className="section-padding testimonials-section">
          <Container>
            <div className="section-intro text-center">
              <Badge className="section-label">Testimonials</Badge>
              <h2 className="section-heading">
                What Our <span>Students</span> Say
              </h2>
              <p className="section-copy section-copy-muted">
                Feedback from learners who used MD16 to start freelancing, get placed,
                and build stronger portfolios.
              </p>
            </div>

            <Row className="g-4">
              {testimonials.map((testimonial) => (
                <Col key={testimonial.name} md={6} lg={4}>
                  <div className="testimonial-card h-100">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="testimonial-avatar"
                      />
                      <div>
                        <h5 className="mb-1">{testimonial.name}</h5>
                        <div className="testimonial-stars">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <p>&quot;{testimonial.quote}&quot;</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="cta-section section-padding">
          <Container>
            <Row className="align-items-center gy-4">
              <Col lg={8}>
                <h2>Ready to Start Your IT Career?</h2>
                <p className="mb-0">
                  Limited seats are available for the next batch. Enroll now to avail the
                  current 60% discount offer.
                </p>
              </Col>
              <Col lg={4} className="text-lg-end">
                <a
                  href="https://api.whatsapp.com/qr/PDAVETCRSSMQL1?autoload=1&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light btn-lg px-4 me-lg-2 mb-2 mb-lg-0"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  Chat Now
                </a>
                <a href="tel:+919313567098" className="btn btn-outline-light btn-lg px-4">
                  <i className="bi bi-telephone-fill me-2"></i>
                  Call Us
                </a>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="contact" className="section-padding academy-section">
          <Container>
            <Row className="gy-5">
              <Col lg={6}>
                <Badge className="section-label">Contact Us</Badge>
                <h2 className="section-heading">
                  Get In <span>Touch</span>
                </h2>
                <p className="section-copy">
                  Have questions about courses, fees, timings, or admissions? Reach out
                  directly and we'll help you choose the right batch.
                </p>

                <div className="contact-card mt-4">
                  <div className="contact-list-item">
                    <div className="contact-list-icon">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div>
                      <h5>Our Location</h5>
                      <p className="mb-0">
                        Vishwanath Samam, EL-14, opp. Club O7 Road, Shela, Ahmedabad,
                        Gujarat 380058
                      </p>
                    </div>
                  </div>
                  <div className="contact-list-item">
                    <div className="contact-list-icon">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div>
                      <h5>Call Us</h5>
                      <p className="mb-0">+91 9313567098</p>
                    </div>
                  </div>
                  <div className="contact-list-item">
                    <div className="contact-list-icon">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div>
                      <h5>Email Us</h5>
                      <p className="mb-0">info@md16academy.com</p>
                    </div>
                  </div>
                  <div className="contact-list-item mb-0">
                    <div className="contact-list-icon">
                      <i className="bi bi-clock-fill"></i>
                    </div>
                    <div>
                      <h5>Working Hours</h5>
                      <p className="mb-0">Monday to Saturday: 10:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="social-link-row mt-4">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                    >
                      <i className={`bi ${item.icon}`}></i>
                    </a>
                  ))}
                </div>
              </Col>

              <Col lg={6}>
                <div className="contact-card form-card">
                  <h3 className="mb-4">Send Us a Message</h3>
                  {submitted ? (
                    <Alert variant="success" className="mb-4">
                      Your enquiry has been prepared on the frontend. Connect it to a
                      backend or form service to store submissions.
                    </Alert>
                  ) : null}
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="contactName">
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="contactEmail">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="contactPhone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="contactCourse">
                      <Form.Label>Course Interested In</Form.Label>
                      <Form.Select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a course</option>
                        {courses.map((course) => (
                          <option key={course.title} value={course.title}>
                            {course.title}
                          </option>
                        ))}
                        <option value="Other">Other</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="contactMessage">
                      <Form.Label>Your Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Button type="submit" className="btn-gradient w-100 py-3 fw-bold">
                      Send Message
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <div className="map-wrap">
          <iframe
            title="MD16 Computer Academy map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4438455810587!2d72.45254967509142!3d23.00747007918425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b2db2dfdfed%3A0xfad6221dd67bbf1a!2sMD16%20Computer%20Academy%20%7C%20Bopal!5e0!3m2!1sen!2sin!4v1744398427999!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>

      <footer className="footer">
        <Container>
          <Row className="gy-4">
            <Col lg={4}>
              <div className="footer-brand">
                <span className="brand-md">MD16</span>{' '}
                <span className="brand-academy">Computer Academy</span>
              </div>
              <p className="mt-3">
                Bopal's practical institute for industry-aligned IT education,
                portfolio-driven learning, and guided career support.
              </p>
              <div className="footer-socials mt-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </a>
                ))}
              </div>
            </Col>
            <Col lg={2} md={6}>
              <h5>Quick Links</h5>
              <ul className="footer-links">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg={3} md={6}>
              <h5>Popular Courses</h5>
              <ul className="footer-links">
                {footerCourses.map((course) => (
                  <li key={course}>
                    <a href="#courses">{course}</a>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg={3}>
              <h5>Contact Info</h5>
              <ul className="footer-contact">
                <li>
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>
                    Vishwanath Samam, EL-14, opp. Club O7 Road, Shela, Ahmedabad,
                    Gujarat 380058
                  </span>
                </li>
                <li>
                  <i className="bi bi-telephone-fill"></i>
                  <span>+91 9313567098</span>
                </li>
                <li>
                  <i className="bi bi-envelope-fill"></i>
                  <span>info@md16academy.com</span>
                </li>
              </ul>
              <Button
                href="https://api.whatsapp.com/qr/PDAVETCRSSMQL1?autoload=1&app_absent=0"
                target="_blank"
                rel="noreferrer"
                variant="success"
                size="sm"
              >
                <i className="bi bi-whatsapp me-2"></i>
                Chat Now
              </Button>
            </Col>
          </Row>

          <hr className="footer-divider" />

          <Row className="footer-bottom gy-2">
            <Col md={6}>
              <p className="mb-0">© 2025 MD16 Computer Academy. All rights reserved.</p>
            </Col>
            <Col md={6} className="text-md-end">
              <p className="mb-0">
                Designed with <i className="bi bi-heart-fill text-danger"></i> by MD16
                Team
              </p>
            </Col>
          </Row>
        </Container>
      </footer>

      <a
        href="https://api.whatsapp.com/qr/PDAVETCRSSMQL1?autoload=1&app_absent=0"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

      {showPromo ? (
        <div
          className="promo-overlay"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setShowPromo(false)
            }
          }}
        >
          <div className="promo-panel">
            <button
              type="button"
              className="promo-close"
              aria-label="Close promotional popup"
              onClick={() => setShowPromo(false)}
            >
              ×
            </button>
            <h3>Bopal&apos;s #1 IT and Multimedia Education Provider</h3>
            <div className="promo-items">
              {popupItems.map((item) => (
                <div key={item.title} className="promo-item">
                  <div className="promo-item-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div>
                    <strong>{item.title}</strong>{' '}
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer">
                        {item.body}
                      </a>
                    ) : (
                      <span>{item.body}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://api.whatsapp.com/qr/PDAVETCRSSMQL1?autoload=1&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className="btn btn-gradient w-100 mt-4"
            >
              <i className="bi bi-whatsapp me-2"></i>
              Enquire Now
            </a>
          </div>
        </div>
      ) : null}

      <Modal
        show={Boolean(selectedImage)}
        onHide={() => setSelectedImage(null)}
        centered
        size="lg"
        dialogClassName="academy-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          {selectedImage ? (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="academy-modal-image"
            />
          ) : null}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default App

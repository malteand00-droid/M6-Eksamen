# Project Architecture - Aalborg Ultimate Frisbee Klub

Komplet oversigt over projektets struktur, teknologi og arkitektur.

---

## 📁 MAPPESTRUKTUR

```
M6-Eksamen/
├── README.md                    # Projektbeskrivelse
├── CODING_STANDARDS.md          # Best practices guide
├── PROJECT_ARCHITECTURE.md      # Denne fil (arkitektur guide)
│
├── Design/                      # Design filer
│   ├── Figma/
│   │   └── M6.fig               # Design fil
│   └── UML/                     # UML diagrammer
│
├── Dokumenter/                  # Projekt dokumentation
│   ├── Projektbeskrivelse
│   ├── Projektplan
│   ├── Retrospective
│   └── Rollebeskrivelse
│
└── Source kode/                 # Alle kode filer
    ├── index.html               # Forside
    ├── om-os.html               # Om klubben
    ├── hold.html                # Teams/Hold
    ├── traening.html            # Training schedule
    ├── kampe.html               # Matches/Kampe
    ├── nyheder.html             # News/Nyheder
    ├── bliv-medlem.html         # Membership
    ├── kontakt.html             # Contact form
    │
    ├── css/                     # Stylesheet filer
    │   ├── layout.css           # Layout & struktur
    │   └── style.css            # Styling & komponenter
    │
    └── img/                     # Billeder & assets
        ├── logo.png
        ├── icon-user.png
        ├── icon-calendar.png
        ├── icon-trophy.png
        └── [andre billeder]
```

---

## 🎯 TEKNOLOGI STACK

### HTML5
- **Semantic Markup**: `<header>`, `<main>`, `<section>`, `<footer>`
- **Responsive Meta Tags**: Viewport, charset, description
- **Accessibility**: Alt-text, ARIA labels

### CSS3
- **Flexbox Layout**: Bruges til hele layoutet
- **CSS Grid**: Potentielt til 3-kolonne footer
- **CSS Variables**: For tema-farver
- **Mobile-First**: Base styles for mobil, media queries for desktop
- **Media Queries**: 768px (tablet), 480px (mobil)

### Vanilla JavaScript
- **No Frameworks**: Kun plain JavaScript
- **DOM Manipulation**: Hamburger menu toggle
- **Event Listeners**: Click events for menu

### Color System
```
Primær:     #1D61FF (AUFK blå)
Mørkere:    #0044CC (hover)
Dark BG:    #1A202C (footer)
Light Text: #FFFFFF
Dark Text:  #333333
```

---

## 📱 RESPONSIVE BREAKPOINTS

### Mobile-First Approach
Alle styles starter for mobil, så tilføjes desktop styles via media queries.

```css
/* Default: Mobil (0px - 480px) */
.hero { min-height: 40vh; }

/* Tablet: 481px - 768px */
@media (max-width: 768px) { 
    .hero { min-height: 50vh; }
}

/* Desktop: 769px+ */
@media (min-width: 769px) {
    .hero { min-height: 80vh; }
}
```

### Breakpoints
- **Desktop**: 769px+
- **Tablet**: 481px - 768px
- **Mobil**: 480px og under

---

## 🧩 KOMPONENTER

### Layout Components

#### Header/Navigation
- Logo + tekst
- Horizontal nav på desktop
- Hamburger menu på mobil (< 768px)
- Dropdown nav på mobil med position absolute

#### Hero Section
```html
<section class="hero">
    <div class="container hero-content">
        <h1>...</h1>
        <p>...</p>
        <a href="#" class="btn-main">Button</a>
    </div>
</section>
```

#### Container Pattern
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```
Bruges rundt omkring alt indhold for konsistent max-width og padding.

### Content Components

#### Feature Card
```html
<div class="feature-card">
    <img class="icon" src="..." alt="...">
    <h3>Title</h3>
    <p>Description</p>
</div>
```
Bruges for 3-kolonne "Hvorfor vælge os" sektion.

#### Event Card
```html
<div class="event-card">
    <span class="event-date">Dato</span>
    <h3>Titel</h3>
    <p>Beskrivelse</p>
</div>
```
Bruges for events, nyheder, kampe osv.

#### Value Card
```html
<div class="value-card">
    <h3>Værdi</h3>
    <p>Beskrivelse</p>
</div>
```
Bruges for værdier, benefits osv.

### Button Styles

#### Primary Button
```html
<a href="#" class="btn-main">Tekst</a>
```
- Blå baggrund (#1D61FF)
- Hvid tekst
- Padding: 15px 35px

#### Secondary Button
```html
<a href="#" class="btn-cta">Tekst</a>
```
- Hvid baggrund
- Blå tekst
- Bruges i CTA sektion

---

## 📄 SIDE-STRUKTUR

### Alle 8 Sider Følger Samme Template

```html
<header>...</header>

<main>
    <!-- Hero section -->
    
    <!-- Content sections -->
    
    <!-- CTA section -->
</main>

<footer>...</footer>

<script>toggleMenu()...</script>
```

### Sideliste

1. **index.html** - Forside
   - Hero banner
   - 3 feature cards
   - About teaser
   - CTA

2. **om-os.html** - Om klubben
   - Hero
   - Mission statement
   - 4 value cards
   - Historik/timeline
   - Stats

3. **hold.html** - Hold
   - Hero
   - Team showcase
   - Team info sections
   - Stats cards

4. **traening.html** - Træning
   - Hero with gradient
   - Training grid
   - Info/CTA flex
   - Map
   - Checklist

5. **kampe.html** - Kampe
   - Hero
   - 3 match cards
   - CTA

6. **nyheder.html** - Nyheder
   - Hero
   - News articles (event-cards)
   - CTA

7. **bliv-medlem.html** - Medlemskab
   - Hero
   - 3 pricing tier cards
   - 4-step process
   - CTA

8. **kontakt.html** - Kontakt
   - Hero
   - 3 contact info cards
   - Contact form with validation
   - CTA

---

## 🎨 CSS FILER

### css/layout.css
**Ansvar**: Layout struktur, grid, flexbox, responsive

**Sektioner**:
1. Global Reset
2. Container
3. Header & Navigation
4. Hero
5. Page Content
6. Grids
7. Footer
8. Media Queries

**Key Classes**:
- `.container` - Max-width center
- `.feature-grid` - 3-kolonne grid
- `.event-grid` - Responsiv event grid
- `.footer-grid` - 3-kolonne footer
- `.hero` - Hero banner
- `.menu-toggle` - Hamburger button
- `.main-header` - Header styling

### css/style.css
**Ansvar**: Farver, fonts, component styling, visuelt design

**Sektioner**:
1. Design System (CSS variabler, farver)
2. Header Styling
3. Hero Styling
4. Buttons & Links
5. Cards & Components
6. Sektioner
7. Footer
8. Media Queries

**Key Classes**:
- `.btn-main` - Primær knap
- `.btn-cta` - Secondary knap
- `.feature-card` - Feature kort
- `.event-card` - Event kort
- `.value-card` - Value kort
- `.section-title` - Sektion overskrift
- `.cta-section` - Call-to-action sektion

---

## 💻 JAVASCRIPT

### toggleMenu() Function
```javascript
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('menu-active');
}
```
- Toggles `.menu-active` class på nav elementet
- Gør mobil menu synlig/usynlig
- Findes i alle 8 HTML filer

### Auto-Close Menu
```javascript
const menuLinks = document.querySelectorAll('#mobile-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.remove('menu-active');
    });
});
```
- Lukker menu når link klikkes
- Gør navigation bedre på mobil

---

## 🔗 NAVIGATION STRUKTUR

Alle 8 sider linket i header navigation:

```
Forside → index.html
Om Klubben → om-os.html
Hold → hold.html
Træning → traening.html
Kampe → kampe.html
Nyheder → nyheder.html
Bliv Medlem → bliv-medlem.html
Kontakt → kontakt.html
```

Alle kontakt-links peger på **kontakt.html** (ikke kontakt-os.html).

---

## 📊 FARVE PALET

### CSS Variabler (:root)
```css
--primary-blue: #1D61FF      /* AUFK brand */
--dark-blue: #0044CC         /* Hover state */
--dark-bg: #1A202C           /* Footer */
--light-text: #FFFFFF        /* Hvid tekst */
--dark-text: #333333         /* Sort tekst */
--light-gray: #F5F5F5        /* Lys baggrund */
--border-gray: #E5E7EB       /* Kant */
```

---

## ✅ BEST PRACTICES

### HTML
- Semantisk markup
- Beskrivende klasse-navne
- Alt-tekster på billeder
- ARIA labels på interactive elementer
- Sektion kommentarer

### CSS
- Mobile-first approach
- CSS variabler for farver
- Reuseable komponenter
- BEM notation (valgfrit)
- Organized sections

### JavaScript
- Minimal kode
- Beskrivende funktions-navne
- Event listeners (ikke inline onclick)
- JSDoc comments

### Responsive Design
- Min-width media queries (mobile-first)
- Touch-friendly (min. 44x44px)
- Flexible grids
- Scaleable billeder

---

## 🚀 DEPLOYMENT CHECKLIST

- [ ] Alle links checker
- [ ] Alt-tekster på alle billeder
- [ ] Mobile responsive (480px, 768px)
- [ ] Hamburger menu virker
- [ ] Contact form virker
- [ ] No console errors
- [ ] CSS minified (valgfrit)
- [ ] Images optimized
- [ ] Meta tags correct
- [ ] Tested på alle browsere

---

## 📈 FREMTIDIGT POTENTIALE

### Muligheder for forbedring
- [ ] Backend for kontakt form (email-service)
- [ ] Database for medlemmer
- [ ] User login/dashboard
- [ ] Event booking system
- [ ] Gallery/fotoalbum
- [ ] Blog for nyheder
- [ ] Email newsletter
- [ ] Analytics integration

### Performance
- [ ] CSS minification
- [ ] JavaScript bundling
- [ ] Image optimization
- [ ] Caching strategy
- [ ] CDN setup

### Accessibility
- [ ] WCAG AA compliance
- [ ] Screen reader testing
- [ ] Keyboard navigation
- [ ] Color contrast audit

---

**Version**: 1.0  
**Sidst opdateret**: 28. maj 2026  
**Udvikler Team**: Aalborg Ultimate Frisbee Klub

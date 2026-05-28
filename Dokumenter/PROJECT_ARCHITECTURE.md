# Project Architecture - Aalborg Ultimate Frisbee Klub

Komplet oversigt over projektets struktur, teknologi og arkitektur.

---

Se [README.md](README.md) for mappestruktur.

---

##  TEKNOLOGI STACK

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
- **CSS Checkbox Hack**: Menu toggle uden JavaScript

### Color System
```
Primær:     #1D61FF (AUFK blå)
Mørkere:    #0044CC (hover)
Dark BG:    #1A202C (footer)
Light Text: #FFFFFF
Dark Text:  #333333
```

---

##  RESPONSIVE BREAKPOINTS

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

##  SIDE-STRUKTUR

### Alle 8 Sider Følger Samme Template

```html
<header>...</header>

<main>
    <!-- Hero section -->
    
    <!-- Content sections -->
    
    <!-- CTA section -->
</main>

<footer>...</footer>
```

---

##  CSS FILER

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

##  NAVIGATION STRUKTUR

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

##  FARVE PALET

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

##  BEST PRACTICES

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

### Responsive Design
- Min-width media queries (mobile-first)
- Touch-friendly (min. 44x44px)
- Flexible grids
- Scaleable billeder

---

##  DEPLOYMENT CHECKLIST

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

### Muligheder for forbedring
- [ ] Backend for kontakt form (email-service)
- [ ] Database for medlemmer
- [ ] User login/dashboard
- [ ] Event booking system
- [ ] Gallery/fotoalbum
- [ ] Blog for nyheder
- [ ] Email newsletter
- [ ] Analytics integration

---

**Version**: 1.0  
**Sidst opdateret**: 28. maj 2026  
**Udvikler Team**: Aalborg Ultimate Frisbee Klub

# Coding Standards - Aalborg Ultimate Frisbee Klub

Denne fil dokumenterer kodestandarder og best practices for projektet.

## 📋 Generelle Principper

### DRY (Don't Repeat Yourself)
- Genbrug CSS klasser
- Undgå duplikering i HTML struktur
- Brug CSS variabler for farver

### KISS (Keep It Simple Stupid)
- Simpel HTML struktur
- Minimal JavaScript
- Klare klassenames

### SEMANTIC HTML
- Brug `<header>`, `<main>`, `<section>`, `<footer>`
- Brug `<article>` for indholdsblokke
- Brug `<nav>` for navigationselementers
- Undgå unødvendige `<div>` elementer

---

## 🏗️ HTML STRUKTUR

### Fil Opbygning
```html
<!DOCTYPE html>
<html lang="da">
<head>
    <!-- Meta tags -->
    <!-- Title -->
    <!-- Stylesheets -->
</head>
<body>
    <!-- Header -->
    <!-- Main content -->
    <!-- Footer -->
    <!-- JavaScript -->
</body>
</html>
```

### Meta Tags (HEAD)
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="...">
<meta name="keywords" content="...">
```

### Alt-tekster på Billeder
```html
<!-- ✅ GOD - Beskrivende alt-tekst -->
<img src="team.jpg" alt="Aalborg Ultimate hold under træning">

<!-- ❌ DÅRLIG - Tom eller vag alt-tekst -->
<img src="team.jpg" alt="billede">
```

### Klassenames - Naming Convention
```html
<!-- ✅ GOD - Beskrivende, lowercase, hyphens -->
<div class="feature-card">
<button class="btn-main">
<section class="page-section">

<!-- ❌ DÅRLIG - PascalCase, vague -->
<div class="Card">
<button class="button">
<section class="content">
```

### Kommentarer i HTML
```html
<!-- ============================================================
     SEKTION NAVN - Anvend dette format
     ============================================================ -->
<section class="feature-grid">
    <!-- Feature Card 1 -->
    <div class="feature-card">
        ...
    </div>
</section>
```

---

## 🎨 CSS STRUKTUR

### Fil Opbygning
```css
/**
 * STYLESHEET NAVN
 * 
 * Struktur:
 * 1. Global Styles
 * 2. Components
 * 3. Utilities
 * 4. Media Queries
 */

/* === SEKTION 1: NAVN === */
/* Kode her */

/* === SEKTION 2: NAVN === */
/* Kode her */
```

### CSS Custom Properties (Variabler)
```css
/* ✅ GOD - Defineret i :root */
:root {
    --primary-blue: #1D61FF;
    --dark-text: #333333;
}

body {
    color: var(--dark-text);
    background: var(--light-bg);
}

/* ❌ DÅRLIG - Hard-codet farver */
body {
    color: #333333;
    background: #FFFFFF;
}
```

### Klassenames - BEM Notation (Anbefalet)
```css
/* Block - hovedkomponent */
.card { }

/* Element - del af block */
.card__title { }
.card__body { }

/* Modifier - variation */
.card--featured { }
.card--disabled { }

/* Alternativt: Simple names med – er OK */
.feature-card { }
.feature-card-title { }
```

### Media Queries - Mobile-First
```css
/* ✅ GOD - Mobile-first approach */
.hero h1 {
    font-size: 1.6rem;  /* mobil default */
}

@media (min-width: 768px) {
    .hero h1 {
        font-size: 2.2rem;  /* tablet+ */
    }
}

@media (min-width: 1200px) {
    .hero h1 {
        font-size: 3.5rem;  /* desktop */
    }
}

/* ❌ DÅRLIG - Desktop-first */
.hero h1 {
    font-size: 3.5rem;
}

@media (max-width: 768px) {
    .hero h1 {
        font-size: 1.6rem;
    }
}
```

### Farver - Brug Variabler
```css
/* ✅ GOD */
.btn {
    background: var(--primary-blue);
}

/* ❌ DÅRLIG */
.btn {
    background: #1D61FF;
}
```

### Kommentarer i CSS
```css
/**
 * Feature Card: Komponenten for at vise features
 * Bruges på forsiden i "Hvorfor vælge os" sektion
 */
.feature-card {
    /* Indre padding for content */
    padding: 30px 25px;
    
    /* Grå kant for separation */
    border: 1px solid var(--border-gray);
}
```

---

## 💻 JAVASCRIPT BEST PRACTICES

### Funktion Struktur
```javascript
/**
 * toggleMenu() - Åbner/lukker mobil navigation
 * 
 * Funktionalitet:
 * - Toggles klassen "menu-active" på nav elementet
 * - Gør menu synlig/usynlig
 */
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('menu-active');
}
```

### Event Listeners
```javascript
/* ✅ GOD - Beskrivende, separat fra HTML */
const menuLinks = document.querySelectorAll('#mobile-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Handler kode her
    });
});

/* ❌ DÅRLIG - Inline onclick attribut */
<a onclick="someFunction()">Link</a>
```

### Variabler
```javascript
/* ✅ GOD - Beskrivende navn */
const primaryButton = document.querySelector('.btn-main');
const isMenuOpen = menu.classList.contains('menu-active');

/* ❌ DÅRLIG - Uklare navn */
const btn = document.querySelector('.btn-main');
const x = menu.classList.contains('menu-active');
```

---

## 📱 RESPONSIVE DESIGN

### Breakpoints
```css
/* Mobile-first default */

/* Tablet: 481px - 768px */
@media (max-width: 768px) { }

/* Lille Mobil: 480px og under */
@media (max-width: 480px) { }
```

### Touch-venlige Elementer
```css
/* ✅ GOD - Min. 44x44px for touch targets */
.btn-main {
    min-height: 44px;
    min-width: 44px;
    padding: 12px 25px;
}

/* ❌ DÅRLIG - For små buttons */
.btn {
    padding: 5px 10px;  /* Svær at klikke på mobil */
}
```

### Responsive Images
```html
<!-- ✅ GOD - Billeder skaleres med viewport -->
<img src="image.jpg" alt="Beskrivelse" style="max-width: 100%;">

<!-- ❌ DÅRLIG - Fixed width -->
<img src="image.jpg" alt="Beskrivelse" width="1200px">
```

---

## 🔍 ACCESSIBILITY (A11Y)

### Alt-tekster
```html
<!-- ✅ GOD - Beskrivende alt-tekst -->
<img src="team.jpg" alt="Aalborg Ultimate hold under træning">

<!-- ❌ DÅRLIG - "image", "billede", "foto" -->
<img src="team.jpg" alt="image">
```

### ARIA Labels
```html
<!-- ✅ GOD - Hjælper skærmlæsere -->
<button class="menu-toggle" aria-label="Åbn navigation menu">

<!-- ❌ DÅRLIG - Ingen labels -->
<button class="menu-toggle">☰</button>
```

### Heading Struktur
```html
<!-- ✅ GOD - Hierarkisk struktur -->
<h1>Forside</h1>
<h2>Hvorfor vælge os</h2>
<h3>Fællesskab</h3>

<!-- ❌ DÅRLIG - Springende heading levels -->
<h1>Forside</h1>
<h3>Hvorfor vælge os</h3>  <!-- Skippet h2 -->
```

---

## 📝 KOMMENTARER & DOKUMENTATION

### CSS Sektion Kommentarer
```css
/* ============================================================
   SEKTION NAVN
   ============================================================ */
```

### HTML Sektion Kommentarer
```html
<!-- ============================================================
     SEKTION NAVN
     ============================================================ -->
```

### Inline Kommentarer
```css
/* Kort forklaring */
padding: 20px;

/**
 * Længere forklaring når det er komplekst
 * - Punkt 1
 * - Punkt 2
 */
```

---

## ✅ CHECKLIST FOR COMMITS

- [ ] HTML er semantisk korrekt
- [ ] Alt-tekster på alle billeder
- [ ] CSS bruger variabler for farver
- [ ] Mobile-first responsive design
- [ ] Ingen hard-codede værdier
- [ ] Klassenames er beskrivende
- [ ] Sektion kommentarer tilføjet
- [ ] Ingen console errors
- [ ] Tested på mobil (480px), tablet (768px), desktop

---

## 📚 RESSOURCER

- [MDN HTML Best Practices](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [CSS Guidelines](https://cssguidelin.es/)
- [WCAG Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web.dev Performance Tips](https://web.dev/performance/)

---

**Version**: 1.0  
**Sidst opdateret**: 28. maj 2026

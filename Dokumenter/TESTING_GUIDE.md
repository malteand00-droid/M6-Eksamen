# Testing Guide - Aalborg Ultimate Frisbee Klub

Komplet guide til testing af alle aspekter af hjemmesiden.

---

## 📱 RESPONSIVE DESIGN TESTING

### Desktop (1200px+)
Test ved at åbne i browser på fuld skærm.

**Elementer der skal ses:**
- Horizontal navigation (ingen hamburger menu)
- 3-kolonne feature grid
- Full-size hero banner (80vh)
- Footer med 3 kolonner

**Command Line Test:**
```bash
# Se siderne ved forskellige skærmbredder
# Åbn DevTools: F12 eller Ctrl+Shift+I
```

### Tablet (481px - 768px)
Test med DevTools simulering eller faktisk tablet.

**Elementer der skal ses:**
- Hamburger menu button (≡ ikon)
- Vertical navigation stacks
- 2-kolonne layouts
- Adjusted padding og font sizes

**Test i Chrome/Edge DevTools:**
1. Åbn DevTools (F12)
2. Klik "Toggle device toolbar" (Ctrl+Shift+M)
3. Vælg "Tablet" eller 768px bredde
4. Hamburger menu skal være synlig

### Mobile (480px og under)
Test på faktisk mobil eller DevTools.

**Elementer der skal ses:**
- Hamburger menu prominent
- Single-column layout
- Minimal padding (12px)
- Touch-friendly buttons (min. 44x44px)
- All text readable uden scroll

**Test i Chrome/Edge DevTools:**
1. Åbn DevTools (F12)
2. Klik "Toggle device toolbar" (Ctrl+Shift+M)
3. Vælg iPhone SE, iPhone 12, eller 375px bredde
4. Alle elementer skal være synlige uden horizontal scroll

---

## 🔗 NAVIGATION TESTING

### Hamburger Menu (Mobil)
1. Åbn site på mobil / 480px width
2. Klik på ≡ (hamburger button)
3. Menu skal:
   - Slide ned fra header
   - Vise alle 8 menu links
   - Have blå baggrund
   - Kunne lukkes ved click på link

### Links - Alle Skal Virke
Test hvert link fra navigation:
- [ ] Forside → index.html
- [ ] Om Klubben → om-os.html
- [ ] Hold → hold.html
- [ ] Træning → traening.html
- [ ] Kampe → kampe.html
- [ ] Nyheder → nyheder.html
- [ ] Bliv Medlem → bliv-medlem.html
- [ ] Kontakt → kontakt.html

### Internal Links
Test kontakt-links fra hver side:
- [ ] CTA buttons peger på bliv-medlem.html
- [ ] "Læs mere" links virker
- [ ] Alle billede alt-tekster er tilstede

---

## 🎨 VISUAL CONSISTENCY TESTING

### Colors
Tjek at disse farver bruges konsistent:
- [ ] Primær blå (#1D61FF) på buttons og links
- [ ] Mørkere blå (#0044CC) på hover
- [ ] Hvid tekst på blå baggrund
- [ ] Sort tekst på hvid baggrund

### Buttons
Test alle knapper:
- [ ] `.btn-main` (blå) - hover virker (mørkere blå)
- [ ] `.btn-cta` (hvid) - hover virker (lyst grå)
- [ ] Buttons responsive (44px min på mobil)

### Typography
- [ ] H1 størrelse: 3.5rem (desktop), 2.2rem (tablet), 1.6rem (mobil)
- [ ] Tekst læselig på alle skærmstørrelser
- [ ] Line-height giver god læsbarhed

### Cards
- [ ] Feature cards har konsistent styling
- [ ] Event cards viser korrekt
- [ ] Hover effects virker

---

## 📄 PAGE-SPECIFIC TESTING

### index.html (Forside)
- [ ] Hero banner vises korrekt med blå gradient
- [ ] 3 feature cards vises
- [ ] "Hvorfor vælge os" sektion korrekt
- [ ] About teaser med billede (hvis eksisterer)
- [ ] CTA sektion synlig
- [ ] Alle links virker

### om-os.html (Om Klubben)
- [ ] Hero med "Om Os" titel
- [ ] Mission statement vises
- [ ] Value cards displayes
- [ ] Timeline/historik layout
- [ ] Stats cards vises

### hold.html (Hold)
- [ ] Hold sektion vises
- [ ] Team showcase layout
- [ ] Stats cards vises
- [ ] Responsive layout stablet på mobil

### traening.html (Træning)
- [ ] Hero med gradient
- [ ] Training grid vises (2 col → 1 col på mobil)
- [ ] Info/CTA flex layout
- [ ] Alle checkpoints vises
- [ ] Map placeholder (hvis tilføjet)

### kampe.html (Kampe)
- [ ] Hero vises
- [ ] Event cards vises
- [ ] Dato, titel, lokation korrekt
- [ ] CTA synlig

### nyheder.html (Nyheder)
- [ ] Hero vises
- [ ] News articles vises
- [ ] Datoer korrekt
- [ ] Responsive layout

### bliv-medlem.html (Bliv Medlem)
- [ ] Hero vises
- [ ] 3 pricing tier cards vises
- [ ] Priser synlige
- [ ] 4-step process vises
- [ ] CTA button synlig

### kontakt.html (Kontakt)
- [ ] Hero vises
- [ ] 3 kontakt info cards vises
- [ ] Email/telefon korrekt
- [ ] Kontakt form vises
- [ ] Form validation virker (tjek ved submit)

---

## 💻 BROWSER COMPATIBILITY

Test på disse browsers:
- [ ] Chrome (sidste version)
- [ ] Firefox (sidste version)
- [ ] Safari (Mac)
- [ ] Edge (sidste version)

**Test mindst:**
- Hamburger menu virker
- Layout responsivt
- Farver korrekte
- No console errors

---

## ♿ ACCESSIBILITY TESTING

### Keyboard Navigation
1. Åbn side
2. Tryk Tab gentagne gange
3. Alt skal kunne navigeres med keyboard
4. Tab-orden skal være logisk (top → bottom)
5. Hamburger menu skal kunne åbnes med keyboard

### Alt-tekster
1. Deaktiver billeder (DevTools)
2. Check at alle billeder har meningsfyldt alt-tekst:
   - [ ] Logo: "AUFK Logo - Aalborg Ultimate Frisbee Klub"
   - [ ] Feature icons: "Fællesskab", "Træning", "Turneringer"
   - [ ] Team foto: Beskrivende
   - [ ] Dekorative billeder: Kan være tomt

### Screen Reader (NVDA / JAWS)
Test med NVDA (gratis, Windows):
1. Download: https://www.nvaccess.org/
2. Start NVDA
3. Lav fundet en side fra hjemmesiden
4. Check at:
   - Struktur læses logisk
   - Headings læses som headings
   - Links har meningsfyldt tekst
   - Form labels læses

### Color Contrast
Brug: https://webaim.org/resources/contrastchecker/

Test disse:
- [ ] Hvid tekst på blå baggrund
- [ ] Sort tekst på hvid baggrund
- [ ] Alle links har tilstrækkelig kontrast

---

## 🔧 TECHNICAL TESTING

### HTML Validation
1. Gå til: https://validator.w3.org/
2. Upload hver HTML-fil
3. Ingen errors (warnings OK)

### CSS Validation
1. Gå til: https://jigsaw.w3.org/css-validator/
2. Vælg hver CSS-fil
3. Ingen errors (vendor prefixes OK)

### JavaScript Console
Test på alle sider:
1. Åbn DevTools (F12)
2. Gå til Console tab
3. Skal være: **Ingen fejl, ingen warnings**
4. Test menu toggle funktioner uden fejl

### Page Load Performance
DevTools Lighthouse:
1. Åbn DevTools (F12)
2. Gå til Lighthouse tab
3. Kør audit
4. Target: 90+ på alle kategorier
5. Se Performance report for forbedringer

---

## 🧪 FORM TESTING (kontakt.html)

### Contact Form
1. Åbn kontakt.html
2. Test hvert felt:

**Navn felt:**
- [ ] Kan skrive tekst
- [ ] Required? (hvis ja, tjek error message)

**Email felt:**
- [ ] Kan skrive email
- [ ] Required? (hvis ja, tjek error message)

**Telefon felt:**
- [ ] Kan skrive nummer
- [ ] Valgfrit felt?

**Emne felt:**
- [ ] Kan skrive tekst
- [ ] Required? (hvis ja, tjek error message)

**Besked felt:**
- [ ] Kan skrive længere tekst
- [ ] Required? (hvis ja, tjek error message)

**Submit button:**
- [ ] Kan klikkes
- [ ] Hvis backend: kontroller at data sendes
- [ ] Hvis frontend-only: Alert vises ved submit

---

## 📊 TESTING CHECKLIST

### Launch Checklist (Før Publishing)

**Responsive:**
- [ ] Desktop (1200px) - alle elementer synlige
- [ ] Tablet (768px) - hamburger menu virker
- [ ] Mobile (480px) - ingen horizontal scroll

**Navigation:**
- [ ] Alle 8 links virker
- [ ] Hamburger menu toggle virker
- [ ] Menu lukker ved link click (mobil)

**Pages:**
- [ ] Alle 8 sider loader
- [ ] Titles korrekte
- [ ] Meta descriptions sat
- [ ] All content visible

**Visual:**
- [ ] Farver konsistent
- [ ] Buttons responsive
- [ ] Typography læselig
- [ ] Cards vises korrekt

**Functionality:**
- [ ] No JavaScript errors
- [ ] All links work
- [ ] Forms respond
- [ ] Images load (hvis eksisterer)

**Accessibility:**
- [ ] Alt-tekster på alle billeder
- [ ] ARIA labels på buttons
- [ ] Keyboard navigation virker
- [ ] Color contrast sufficient

**Quality:**
- [ ] HTML valid
- [ ] CSS valid
- [ ] Page speed acceptable
- [ ] Browser compatible

---

## 🐛 BUG REPORTING FORMAT

Hvis du finder en bug, dokumenter den sådan:

```
TITEL: [Component] - Issue Description
SEVERITY: Critical / High / Medium / Low

STEPS TO REPRODUCE:
1. Go to [page]
2. [Action]
3. [Expected vs Actual]

SCREENSHOT/VIDEO: [if possible]

BROWSER: [Chrome 120, Firefox 121, Safari, etc]
DEVICE: [Desktop, Tablet, Mobile]
SCREEN SIZE: [if known]

AFFECTED COMPONENTS:
- [Component 1]
- [Component 2]

NOTES: [Any additional context]
```

---

## 📝 TEST REPORT TEMPLATE

```markdown
# Test Report - [DATE]

## Test Environment
- Browser: [Chrome 120]
- OS: [Windows 11]
- Device: [Desktop / Tablet / Mobile]
- Screen Size: [1920x1080]

## Tests Performed
- [ ] Responsive Design
- [ ] Navigation
- [ ] Visual Consistency
- [ ] Accessibility
- [ ] Performance

## Issues Found
### Critical
- [ ] Issue 1

### Medium
- [ ] Issue 1

### Low
- [ ] Issue 1

## Passed Criteria
- [x] All pages load
- [x] No JavaScript errors
- [x] Mobile responsive

## Sign-Off
- Tester: [Name]
- Date: [Date]
- Status: [PASS / FAIL / CONDITIONAL]
```

---

**Version**: 1.0  
**Sidst opdateret**: 28. maj 2026

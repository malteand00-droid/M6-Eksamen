# Quick Start Guide - Aalborg Ultimate Frisbee Klub

Hurtig vejledning til at komme i gang med projektet.

---

## 🚀 START HER

### 1. Åbn siden i browser
```
Dobbelt-klik: Source kode/index.html
```

Eller:
```
Højreklik → Åbn med → Browser (Chrome, Firefox, Safari osv.)
```

### 2. Test responsivt design
**Desktop (default)**
- Åbn som normal

**Mobil (480px)**
- Højreklik → Inspect (F12)
- Klik "Toggle device toolbar" (Ctrl+Shift+M)
- Vælg iPhone SE (375px) eller set width 480px
- Hamburger menu skal vises

**Tablet (768px)**
- I DevTools, set width 768px
- Hamburger menu skal være synlig
- Grid elementer skal stables

---

## 📁 PROJEKTSTRUKTUR

```
Source kode/
├── index.html           ← Forside (start her)
├── om-os.html           ← Om klubben
├── hold.html            ← Hold/teams
├── traening.html        ← Træning
├── kampe.html           ← Kampe
├── nyheder.html         ← Nyheder
├── bliv-medlem.html     ← Medlemskab
├── kontakt.html         ← Kontakt
├── css/
│   ├── layout.css       ← Layout & struktur
│   └── style.css        ← Styling & komponenter
└── img/                 ← Billeder
```

---

## 🎨 FARVER & DESIGN

**Primær farve**: Blå (`#1D61FF`)
**Sekundær farve**: Mørkere blå (`#0044CC`)
**Text på blå**: Hvid (`#FFFFFF`)
**Baggrund**: Hvid (`#FFFFFF`)
**Text på hvid**: Sort (`#333333`)

Alle farver er defineret som CSS variabler i `css/style.css`:
```css
:root {
    --primary-blue: #1D61FF;
    --dark-blue: #0044CC;
    /* osv... */
}
```

---

## 📱 BREAKPOINTS

```css
/* Mobil (default) */
0px - 480px

/* Tablet */
481px - 768px

/* Desktop */
769px+
```

---

## 🔗 NAVIGATION

8 sider connected:
1. **Forside** → index.html
2. **Om Klubben** → om-os.html
3. **Hold** → hold.html
4. **Træning** → traening.html
5. **Kampe** → kampe.html
6. **Nyheder** → nyheder.html
7. **Bliv Medlem** → bliv-medlem.html
8. **Kontakt** → kontakt.html

Alle links virker - test ved at klikke rundt!

---

## 📝 REDIGERING

### Redigere Indhold (HTML)
```html
<!-- Find siden (fx index.html) -->
<!-- Åbn i teksteditor -->
<!-- Rediger tekst mellem tags -->
<!-- Gem (Ctrl+S) -->
<!-- Refresh browser (F5) -->
```

### Redigere Styling (CSS)
```css
/* layout.css: Layout, grid, mobile menu */
/* style.css: Farver, buttons, cards */

/* Rediger CSS -->
/* Gem (Ctrl+S) -->
/* Refresh browser (F5) -->
```

### Tilføje Billeder
1. Placer billede i `img/` mappen
2. Brug i HTML:
```html
<img src="img/billede.png" alt="Beskrivelse">
```

---

## ☑️ TJEKLISTE

### Efter redigering:
- [ ] Gem fil (Ctrl+S)
- [ ] Refresh browser (F5)
- [ ] Test på desktop
- [ ] Test på mobil (DevTools)
- [ ] Tjek alle links virker
- [ ] Se for stavefejl

### Før launch:
- [ ] Alle 8 sider virker
- [ ] Mobile responsive (480px, 768px, 1200px)
- [ ] Hamburger menu virker
- [ ] Alle links virker
- [ ] Billeder loader
- [ ] Ingen fejl i DevTools (F12 → Console)

---

## 🛠️ SHORTCUTS

| Genvej | Funktion |
|--------|----------|
| F5 | Refresh side |
| Ctrl+S | Gem fil |
| F12 | Åbn DevTools |
| Ctrl+Shift+M | Toggle mobil view |
| Ctrl+Shift+K | Åbn console |
| Ctrl+Shift+I | Inspect element |

---

## 🐛 FEJLFINDING

### Siden ser underlig ud
1. Refresh (F5)
2. Tøm cache (Ctrl+Shift+Delete)
3. Check DevTools (F12) for fejl

### Links virker ikke
1. Check filnavn i `href="`
2. Check at filen eksisterer
3. Check stavning

### Mobil menu virker ikke
1. Åbn DevTools (F12)
2. Se Console for fejl
3. Check at `toggleMenu()` funktion er i HTML

### Billeder vises ikke
1. Check `src="img/..."`
2. Check at billede ligger i `img/` mappe
3. Check stavning af filnavn

---

## 📚 DOKUMENTATION

**I mappen findes:**
- `CODING_STANDARDS.md` - Skriveregler & best practices
- `PROJECT_ARCHITECTURE.md` - Fuldt projekt overblik
- `TESTING_GUIDE.md` - Test strategi
- `README.md` - Projektbeskrivelse

---

## 💡 TIPS

1. **Mobile-first**: Tænk mobil først - desktop kommer helt automatisk
2. **Reuse classes**: Brug samme klasser på tværs af sider
3. **Test ofte**: Test på mobil mens du udvikler
4. **Dokumenter**: Husk at dokumentere dine ændringer

---

## 🚀 NÆSTE SKRIDT

1. ✅ Se siden i browser (index.html)
2. ✅ Test mobile menu
3. ✅ Gå gennem alle 8 sider
4. ✅ Ret stavefejl/indhold efter behov
5. ✅ Læs `CODING_STANDARDS.md` for udvikling
6. ✅ Læs `TESTING_GUIDE.md` før launch

---

**Version**: 1.0  
**Sidst opdateret**: 28. maj 2026

For spørgsmål: Se dokumentationen eller DevTools (F12)

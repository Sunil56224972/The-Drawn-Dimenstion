# 🎨 Portfolio ITOM — Master To-Do List

> **Cel:** Dopieścić portfolio do poziomu **AWWWARDS SOTD / FWA** — zero kompromisów.  
> **Data startu:** 2026-02-13  
> **Stack:** React + Three.js (R3F) + GSAP + Vite

---

## 🔴 Priorytet 1 — Krytyczne błędy i brakujące funkcjonalności

### 1. Naprawić wyciekające chmury z About do Corridor
- [X] Zbadać `SkyChunk.jsx` — obecny `CORRIDOR_CLIP_Z = -8` nie trzyma, chmury "uciekają" do korytarza
- [X] Rozważyć dodanie clippingu per-kamera zamiast stałego Z-threshold
- [X] Dodać testy wizualne — wejście/wyjście z About w obie strony
- **Pliki:** [SkyChunk.jsx](file:///c:/Users/tomsz/Desktop/portfolio/portfolio-itom/src/components/canvas/rooms/About/SkyChunk.jsx), [InfiniteSkyManager.jsx](file:///c:/Users/tomsz/Desktop/portfolio/portfolio-itom/src/components/canvas/rooms/About/InfiniteSkyManager.jsx)

### 2. Naprawić wyświetlanie monitorów po kliknięciu w The Studio
- [X] Debugować `handleMonitorClick` w `StudioRoom.jsx` — kamera nie zawsze centruje monitora poprawnie
- [X] Sprawdzić czy `openOverlay(item)` faktycznie otwiera overlay z poprawnymi danymi
- [X] Przetestować na mobile i desktop — inne `responsiveParams`
- [X] Poprawić `GlobalOverlay.jsx` — `ContentCard` jeśli nie pokazuje contentu poprawnie
- **Pliki:** [StudioRoom.jsx](file:///c:/Users/tomsz/Desktop/portfolio/portfolio-itom/src/components/canvas/rooms/Studio/StudioRoom.jsx), [GlobalOverlay.jsx](file:///c:/Users/tomsz/Desktop/portfolio/portfolio-itom/src/components/ui/GlobalOverlay.jsx)

---

## 🟠 Priorytet 2 — Kluczowe ulepszenia (wizualne i UX)

### 3. Dopracować tekstury i Awards w About
- [X] Sprawdzić czytelność istniejących tekstur (SOTY, SOTD, SOTM, FEATURED) — czy nie są za małe/za duże
- [X] Poprawić pozycje i rozmiary kart Awards w `AwardsMilestone`
- [X] Dodać animację "View" — kliknięcie na kategorię nagród → wyświetlenie wszystkich nagród w danej kategorii
  - [X] Zaprojektować UI — popup/overlay na canvas lub HTML overlay
  - [X] Dodać interakcję kliknięcia na kartę Award
  - [X] Animować rozwinięcie listy (GSAP)
- **Pliki:** [InfiniteSkyManager.jsx](file:///c:/Users/tomsz/Desktop/portfolio/portfolio-itom/src/components/canvas/rooms/About/InfiniteSkyManager.jsx)

### 4. Dodać dekoracje do Corridor (jest pusty!)
- [X] Istniejące dekoracje (`Doodles.jsx`) — zweryfikować co jest renderowane i czego brakuje
- [X] Wykorzystać istniejące tekstury z `/textures/corridor/decorations/`:
  - `coffee_cup.webp`, `coffee_debug.webp`, `idea_process.webp`, `paper_airplane.webp`, `paper_ball.webp`, `pencil.webp`, `while_true_loop.webp`
- [X] Dodać nowe elementy:
  - [X] Ramki/obrazki na ścianach w stylu "hand-drawn" (np. szkice projektów)
  - [X] Biurko/stoliczek z kawą i notatkami
  - [X] Znaki/strzałki prowadzące do pokojów
  - [X] Rośliny w doniczkach (styl paper/sketch)
  - [X] Regał z książkami (cienkie prostokąty z teksturami)
  - [X] Tabliczki z cytatami (motywacyjne/programistyczne)
- [X] Rozłożyć dekoracje po obu stronach korytarza
- [X] Dodać subtelne animacje (floating, pulsing)
- **Pliki:** [Corridor.jsx](file:///c:/Users/tomsz/Desktop/portfolio/portfolio-itom/src/components/canvas/corridor/Corridor.jsx), [Doodles.jsx](file:///c:/Users/tomsz/Desktop/portfolio/portfolio-itom/src/components/canvas/corridor/Doodles.jsx), [CorridorWalls.jsx](file:///c:/Users/tomsz/Desktop/portfolio/portfolio-itom/src/components/canvas/corridor/CorridorWalls.jsx)

### 4.5. Rozbudowa detali i ożywienie pokojów (Wytyczne z audio)
- [ ] **The Gallery:** Dodać animowane mini-detale w tle, żeby ożywić scenę (np. dym z kominów, poruszające się dźwigi, lecące ptaki).
- [ ] **Corridor:** Uzupełnić puste obrazy/ramki na ścianach odpowiednimi grafikami.
- [X] **The Studio:** Zaktualizować UI (HTML), które wyskakuje po prawej po kliknięciu w monitor. Dodać do monitorów miniaturki oraz wstawić prawdziwe filmy.
- [ ] **About:** Popracować nad chmurami (mają wyglądać lepiej) i usunąć gwiazdki. Dodać interakcję dla balona: po kliknięciu balon pęka, odsłaniając pełną nazwę technologii w sekcji "Skills".
- [ ] **Contact:** Wzbogacić puste środowisko (gdzie jest tylko morze i beczki): dodać w tle minimalistyczne fale, wyspę na horyzoncie i chmury na niebie.

### 5. Poprawić grafiki — czytelność vs detale w tle
- [X] About Room: Sprawdzić kontrast tekstów na tle chmur (milestones)
- [X] Gallery Room: Upewnić się, że karty projektów są czytelne na tle domków i liny
- [X] Studio Room: Sprawdzić czy info na monitorach jest czytelne
- [X] Contact Room: Upewnić się, że opcje kontaktowe wyróżniają się
- [X] Korytarz: Sygnatura drzwi dobrze widoczna, dekoracje nie przytłaczają
- [X] Dodać głębię — elementy ważne z większą opacitą, tło z mniejszą
- **Pliki:** Wszystkie pokoje (About, Studio, Gallery, Contact)

### 6. Interaktywne elementy: B&W → kolor na hover
- [X] Zaprojektować shader/material swap: elementy interaktywne domyślnie w grayscale
- [X] Na hover → animowana tranzycja do pełnego koloru (GSAP lub shader uniform)
- [X] Elementy docelowe:
  - [X] Drzwi w korytarzu (sygnatura pokoju)
  - [X] Monitory w Studio
  - [X] Karty projektów w Gallery
  - [X] Beczki social media w Contact
  - [X] Karty Awards w About
- [X] Opcja: shader `saturation` uniform animowany od 0 do 1
- **Pliki:** Nowe utility + modyfikacja wszystkich pokojów

---

## 🟡 Priorytet 3 — Nowe funkcjonalności

### 7. Dodać poradnik/tutorial dla użytkownika
- [X] Zdecydować format:
  - **Opcja A:** Tooltips przy pierwszym wejściu (np. "Scroll to fly" w About)
  - **Opcja B:** Dymki informacyjne pojawiające się na 3-4 sek
  - **Opcja C:** Pomocnik/ikona "?" w narożniku z opisem interakcji
- [X] Poradnik per pokój:
  - [X] **Corridor:** "Click a door to enter" + "Use map to teleport"
  - [X] **About:** "Scroll to fly through my story"
  - [X] **Studio:** "Drag to rotate • Scroll to browse • Click to view"
  - [X] **Gallery:** "Scroll to browse • Click to inspect"
  - [X] **Contact:** "Choose a contact method"
- [X] Wyświetlać tylko za pierwszym razem (localStorage)
- [X] Animacja wejścia/wyjścia (fade + slide)
- **Pliki:** Nowy komponent UI

### 8. Dodać dźwięki (na końcu)
- [X] `AudioManager.jsx` jest ready — ma `play()`, `stop()`, `fade()`, volume control
- [X] Lista dźwięków do dodania:
  - [X] **Ambient:** Cichy background loop (papier, wiatr?)
  - [X] **Corridor:** Kroki / szuranie
  - [X] **Doors:** Otwieranie/zamykanie drzwi
  - [X] **About:** Wiatr podczas lotu, whoosh przy chmurach
  - [X] **Studio:** Bzyczenie elektroniki, klik przy wyborze monitora
  - [X] **Gallery:** Szelest papieru/ubrań na linie
  - [X] **Contact:** Szum morza, splash przy rzucaniu butelki
  - [X] **UI:** Hover sounds, teleport swoosh
- [X] Utworzyć folder `/public/sounds/`
- [X] Dodać UI toggle (już istnieje `AudioControls.jsx`)
- **Pliki:** [AudioManager.jsx](file:///c:/Users/tomsz/Desktop/portfolio/portfolio-itom/src/context/AudioManager.jsx), [AudioControls.jsx](file:///c:/Users/tomsz/Desktop/portfolio/portfolio-itom/src/components/ui/AudioControls.jsx)

### 9. Easter Eggs & detale
- [ ] Konami code? Sekretny pokój?
- [ ] Kliknięcie w avatar w About → animacja zmiany wyrazu twarzy
- [ ] Kliknięcie wielokrotne w samolot papierowy → looping/spin  
- [ ] Ukryty element gdzieś w korytarzu (np. pod obrazkiem)
- [ ] Secret mode: Dark mode toggle (cały świat B&W → negatyw)
- [ ] Progress bar/counter: "You discovered X/Y secrets"
- [ ] Kliknięcie w kawę w korytarzu → animacja pary
- [ ] "404" drzwi gdzieś w korytarzu → zabawna animacja
- **Pliki:** Różne — zależnie od pomysłu

---

## 🟢 Priorytet 4 — Polish & Optymalizacja

### 10. Poprawić content data w Studio
- [X] Uzupełnić prawdziwe URL-e (YouTube, Blog, TikTok)
- [X] Dodać thumbnails (prawdziwe grafiki lub wygenerowane)
- [X] Zaktualizować daty i metryki
- **Pliki:** [contentData.js](file:///c:/Users/tomsz/Desktop/portfolio/portfolio-itom/src/components/canvas/rooms/Studio/contentData.js)

### 11. Performance & responsywność
- [ ] Audit na mobile (szczególnie About — dużo clouds + milestones)
- [ ] Sprawdzić `PerformanceContext.jsx` — quality reduction na słabych urządzeniach
- [ ] Przetestować teleportację na wszystkie pokoje — brak glitchy
- [ ] Sprawdzić memory leaks (tworzące się `new THREE.Vector3()` w useFrame!)
  - `InfiniteSkyManager.jsx` linijki 155-157, 470-471, 710-711 — nowe Vector3 co klatkę!
  - `SkyChunk.jsx` linia 145 — `new THREE.Vector3()` co klatkę
- [ ] LOD (Level of Detail) — mniejsza ilość chmur/doodli daleko od kamery

### 12. Accessibility & SEO (Plan Naprawczy A11y 🚨)
- [X] **A1 — Nawigacja klawiaturą w 3D:** ~~Dodać `keydown` listener (Strzałki, Spacja, PgUp/PgDn) w `useInfiniteCamera.js` i zmapować na scroll.~~ ✅ DONE
- [X] **A2 — Spacja aktywuje Contact:** ~~Naprawić focus management — `tabIndex={-1}` na pin-slot buttons gdy mapa zamknięta.~~ ✅ Naprawione przez A3 (inert blokuje focus)
- [X] **A3 — Tab po zamkniętych menu:** ~~Dodać `inert` na zamkniętych panelach (mapa, audio, achievements) w `NavigationUI.jsx`.~~ ✅ DONE
- [X] **A4 — Focus Trap w mapie:** ~~Auto-focus na close button po otwarciu + obsługa `Escape` + focus trap (Tab wraca do pierwszego elementu).~~ ✅ DONE
- [X] **A5 — Aria labels na suwakach:** ~~Dodać `aria-label` i `aria-valuetext` do suwaków Music/SFX.~~ ✅ DONE
- [X] **A6 — Map hover zones jako `<button>`:** ~~Zamienić `<div>` hover zones na `<button>` z `aria-label` i `onFocus/onBlur` w `NavigationUI.jsx`.~~ ✅ DONE
- [X] **A7 — SR fallback dla Canvas:** ~~Stworzyć niewidoczną warstwę HTML z przyciskami odpowiadającymi interaktywnym elementom 3D.~~ ✅ DONE
- [ ] **Responsywność (Mobile):** Poprawić FOV/pozycję Z kamery na małych ekranach, viewport ucina sceny.
- [ ] **Optymalizacja ładowania:** Dodać wizualny feedback po kliknięciu drzwi (spinner) + preload tekstur najbliższych pokojów.
- [X] **SEO Meta Tags:** ~~Dodać title, description, OG, Twitter Card, JSON-LD, canonical, noscript fallback.~~ ✅ DONE
- [ ] **Meta tagi i OG image:** Dodać `<meta description>`, Open Graph tags, Twitter Card do `index.html`.
- [ ] Preloader pokaże % ładowania assetów (jest `Preloader.jsx`, może wymaga update)

### 13. Animacje i microinterakcje
- [ ] Cursor customowy na hover nad elementami interaktywnymi (jest w `/public/cursors/`)
- [ ] Parallax na tłach pokojów (hook `useMouseParallax.js` istnieje)
- [ ] Smooth page transitions — paper texture transitions (jest `PaperTransition.jsx`)
- [ ] Dodać subtelne particle effects (pyłki w korytarzu? Świetliki w About?)

### 14. Jakość kodu i Performance
- [X] **P1 — `new THREE.Vector3()` w useFrame:** ~~Przenieść do stałych modułowych.~~ ✅ DONE (4 pliki)
- [X] **P2 — `setState` w useFrame (SkillsMilestone):** ~~Zamienić na `useRef` + imperatywne update.~~ ✅ DONE
- [X] **P3 — `console.log` w produkcji:** ~~`StudioRoom.jsx:49,338,389` usunięte.~~ ✅ DONE
- [X] **P4 — Martwy hook `useCorridorCamera`:** ~~Nie jest nigdzie importowany → usunięty.~~ ✅ DONE
- [X] **P5 — Import `r3f-perf` w produkcji:** ~~`App.jsx:4` → import usunięty.~~ ✅ DONE

---

## 📊 Dodatkowe obserwacje z analizy kodu

| Kwestia | Szczegóły | Priorytet |
|---------|-----------|-----------|
| `contentData.js` — placeholder data | Wszystkie URL-e, thumbnails = null, dane przykładowe | 🟠 |
| `Doodles.jsx` — 310 linii ale mogą nie renderować się w pełni | Sprawdzić czy `SketchElement`, `AnimatedStar`, `ThoughtBubble` etc. są aktywne | 🟡 |
| `AudioManager.jsx` — fade() jest stub | `fade()` natychmiast pauzuje zamiast gradualnie ściszać | 🟡 |
| Brak textur w Gallery | Karty projektów mogą nie mieć prawdziwych screenshot'ów | 🟠 |

---

## ⏱ Sugerowana kolejność pracy

```
Tydzień 1: #1 (chmury) → #2 (monitory) → #4 (dekoracje korytarza)
Tydzień 2: #3 (awards) → #5 (czytelność grafik) → #6 (B&W→kolor hover)
Tydzień 3: #7 (tutorial) → #10 (prawdziwy content) → #11 (performance)
Tydzień 4: #9 (easter eggs) → #13 (microinterakcje) → #8 (dźwięki)
Na koniec: #12 (accessibility) → Final QA
```

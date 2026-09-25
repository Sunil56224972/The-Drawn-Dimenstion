# 🎨 The Drawn Dimension — Master To-Do List

> **Goal:** Polish this portfolio to a world-class level — no compromises.  
> **Project Start:** 2026-02-13  
> **Stack:** React + Three.js (R3F) + GSAP + Vite  
> **Author:** Sunil Yogi

---

## 🔴 Priority 1 — Critical Bugs & Missing Features

### 1. Fix cloud leaking from About into Corridor
- [X] Investigate `SkyChunk.jsx` — current `CORRIDOR_CLIP_Z = -8` doesn't hold, clouds "escape" into the corridor
- [X] Consider adding per-camera clipping instead of a fixed Z-threshold
- [X] Add visual tests — enter/exit About room from both directions
- **Files:** `SkyChunk.jsx`, `InfiniteSkyManager.jsx`

### 2. Fix monitor display on click in The Studio
- [X] Debug `handleMonitorClick` in `StudioRoom.jsx` — camera doesn't always center the monitor correctly
- [X] Verify `openOverlay(item)` actually opens the overlay with correct data
- [X] Test on mobile and desktop — different `responsiveParams`
- [X] Fix `GlobalOverlay.jsx` — `ContentCard` if content not displaying correctly
- **Files:** `StudioRoom.jsx`, `GlobalOverlay.jsx`

---

## 🟠 Priority 2 — Key Improvements (Visual & UX)

### 3. Refine textures and Awards in About
- [X] Check readability of existing textures (SOTY, SOTD, SOTM, FEATURED) — not too small/large
- [X] Fix positions and sizes of Award cards in `AwardsMilestone`
- [X] Add "View" animation — click on award category → display all awards in that category
  - [X] Design UI — popup/overlay on canvas or HTML overlay
  - [X] Add click interaction on Award card
  - [X] Animate expansion (GSAP)
- **Files:** `InfiniteSkyManager.jsx`

### 4. Add decorations to Corridor (it's empty!)
- [X] Existing decorations (`Doodles.jsx`) — verify what's rendering and what's missing
- [X] Use existing textures from `/textures/corridor/decorations/`:
  - `coffee_cup.webp`, `coffee_debug.webp`, `idea_process.webp`, `paper_airplane.webp`, `paper_ball.webp`, `pencil.webp`, `while_true_loop.webp`
- [X] Add new elements:
  - [X] Frames/pictures on walls in "hand-drawn" style (e.g. project sketches)
  - [X] Desk with coffee and notes
  - [X] Signs/arrows pointing to rooms
  - [X] Plants in pots (paper/sketch style)
  - [X] Bookshelf with books (thin rectangles with textures)
  - [X] Boards with quotes (motivational/programming)
- [X] Spread decorations on both sides of the corridor
- [X] Add subtle animations (floating, pulsing)
- **Files:** `Corridor.jsx`, `Doodles.jsx`, `CorridorWalls.jsx`

### 4.5. Expand details and liven up rooms
- [ ] **The Gallery:** Add animated mini-details in the background to bring the scene to life (e.g. smoke from chimneys, moving cranes, flying birds).
- [ ] **Corridor:** Fill empty picture frames on the walls with appropriate graphics.
- [X] **The Studio:** Update the UI (HTML) that pops up on the right after clicking a monitor. Add thumbnails and insert real videos.
- [ ] **About:** Work on clouds (should look better) and remove stars. Add balloon interaction: clicking the balloon pops it, revealing the full technology name in the "Skills" section.
- [ ] **Contact:** Enrich the sparse environment (just sea and barrels): add minimalist background waves, an island on the horizon, and clouds in the sky.

### 5. Improve graphics — readability vs background details
- [X] About Room: Check text contrast against cloud backgrounds (milestones)
- [X] Gallery Room: Ensure project cards are readable against house and rope backgrounds
- [X] Studio Room: Check if info on monitors is readable
- [X] Contact Room: Ensure contact options stand out
- [X] Corridor: Door signature clearly visible, decorations not overwhelming
- [X] Add depth — important elements with higher opacity, background with lower
- **Files:** All rooms (About, Studio, Gallery, Contact)

### 6. Interactive elements: B&W → color on hover
- [X] Design shader/material swap: interactive elements default in grayscale
- [X] On hover → animated transition to full color (GSAP or shader uniform)
- [X] Target elements:
  - [X] Doors in corridor (room signature)
  - [X] Monitors in Studio
  - [X] Project cards in Gallery
  - [X] Social media barrels in Contact
  - [X] Award cards in About
- [X] Option: `saturation` uniform shader animated from 0 to 1
- **Files:** New utility + modification of all rooms

---

## 🟡 Priority 3 — New Features

### 7. Add user guide/tutorial
- [X] Decide format:
  - **Option A:** Tooltips on first entry (e.g. "Scroll to fly" in About)
  - **Option B:** Info bubbles appearing for 3-4 seconds
  - **Option C:** "?" helper/icon in corner with interaction description
- [X] Guide per room:
  - [X] **Corridor:** "Click a door to enter" + "Use map to teleport"
  - [X] **About:** "Scroll to fly through my story"
  - [X] **Studio:** "Drag to rotate • Scroll to browse • Click to view"
  - [X] **Gallery:** "Scroll to browse • Click to inspect"
  - [X] **Contact:** "Choose a contact method"
- [X] Display only on first visit (localStorage)
- [X] Entry/exit animation (fade + slide)
- **Files:** New UI component

### 8. Add sounds (at the end)
- [X] `AudioManager.jsx` is ready — has `play()`, `stop()`, `fade()`, volume control
- [X] Sound list:
  - [X] **Ambient:** Quiet background loop (paper, wind?)
  - [X] **Corridor:** Footsteps / shuffling
  - [X] **Doors:** Opening/closing doors
  - [X] **About:** Wind during flight, whoosh with clouds
  - [X] **Studio:** Electronics hum, click on monitor selection
  - [X] **Gallery:** Paper/clothing rustle on clothesline
  - [X] **Contact:** Sea sound, splash when throwing bottle
  - [X] **UI:** Hover sounds, teleport swoosh
- [X] Create `/public/sounds/` folder
- [X] Add UI toggle (AudioControls.jsx already exists)
- **Files:** `AudioManager.jsx`, `AudioControls.jsx`

### 9. Easter Eggs & Details
- [ ] Konami code? Secret room?
- [ ] Click avatar in About → face expression change animation
- [ ] Multiple clicks on paper airplane → looping/spin  
- [ ] Hidden element somewhere in the corridor (e.g. under a picture)
- [ ] Secret mode: Dark mode toggle (whole world B&W → negative)
- [ ] Progress bar/counter: "You discovered X/Y secrets"
- [ ] Click on coffee in corridor → steam animation
- [ ] "404" door somewhere in corridor → funny animation
- **Files:** Various — depends on idea

---

## 🟢 Priority 4 — Polish & Optimization

### 10. Fix content data in Studio
- [X] Fill in real URLs (YouTube, Blog, GitHub)
- [X] Add thumbnails (real graphics or generated)
- [X] Update dates and metrics
- **Files:** `contentData.js`

### 11. Performance & Responsiveness
- [ ] Mobile audit (especially About — many clouds + milestones)
- [ ] Check `PerformanceContext.jsx` — quality reduction on weak devices
- [ ] Test teleportation to all rooms — no glitches
- [ ] Check memory leaks (new `THREE.Vector3()` in useFrame!)
  - `InfiniteSkyManager.jsx` lines 155-157, 470-471, 710-711 — new Vector3 every frame!
  - `SkyChunk.jsx` line 145 — `new THREE.Vector3()` every frame
- [ ] LOD (Level of Detail) — fewer clouds/doodles far from camera

### 12. Accessibility & SEO
- [X] **A1 — Keyboard navigation in 3D:** Added `keydown` listener (Arrows, Space, PgUp/PgDn) in `useInfiniteCamera.js` and mapped to scroll. ✅ DONE
- [X] **A2 — Space activates Contact:** Fixed focus management — `tabIndex={-1}` on pin-slot buttons when map is closed. ✅ Fixed
- [X] **A3 — Tab past closed menus:** Added `inert` to closed panels (map, audio, achievements) in `NavigationUI.jsx`. ✅ DONE
- [X] **A4 — Focus Trap in map:** Auto-focus on close button after opening + `Escape` handling + focus trap (Tab returns to first element). ✅ DONE
- [X] **A5 — Aria labels on sliders:** Added `aria-label` and `aria-valuetext` to Music/SFX sliders. ✅ DONE
- [X] **A6 — Map hover zones as `<button>`:** Replaced `<div>` hover zones with `<button>` with `aria-label` and `onFocus/onBlur` in `NavigationUI.jsx`. ✅ DONE
- [X] **A7 — SR fallback for Canvas:** Created invisible HTML layer with buttons corresponding to interactive 3D elements. ✅ DONE
- [ ] **Responsiveness (Mobile):** Fix FOV/camera Z position on small screens, viewport cuts off scenes.
- [ ] **Load optimization:** Add visual feedback after clicking doors (spinner) + preload textures of nearest rooms.
- [X] **SEO Meta Tags:** Added title, description, OG, Twitter Card, JSON-LD, canonical, noscript fallback. ✅ DONE

### 13. Animations & Micro-interactions
- [ ] Custom cursor on hover over interactive elements (cursors in `/public/cursors/`)
- [ ] Parallax on room backgrounds (`useMouseParallax.js` hook exists)
- [ ] Smooth page transitions — paper texture transitions (`PaperTransition.jsx`)
- [ ] Add subtle particle effects (dust in corridor? Fireflies in About?)

### 14. Code Quality & Performance
- [X] **P1 — `new THREE.Vector3()` in useFrame:** Moved to module-level constants. ✅ DONE (4 files)
- [X] **P2 — `setState` in useFrame (SkillsMilestone):** Replaced with `useRef` + imperative update. ✅ DONE
- [X] **P3 — `console.log` in production:** `StudioRoom.jsx:49,338,389` removed. ✅ DONE
- [X] **P4 — Dead hook `useCorridorCamera`:** Not imported anywhere → removed. ✅ DONE
- [X] **P5 — `r3f-perf` import in production:** `App.jsx:4` → import removed. ✅ DONE

---

## 📊 Additional Code Observations

| Issue | Details | Priority |
|-------|---------|----------|
| `contentData.js` — placeholder data | All URLs, thumbnails = null, sample data | 🟠 |
| `Doodles.jsx` — 310 lines but may not render fully | Check if `SketchElement`, `AnimatedStar`, `ThoughtBubble` etc. are active | 🟡 |
| `AudioManager.jsx` — fade() is stub | `fade()` immediately pauses instead of gradually fading | 🟡 |
| Missing textures in Gallery | Project cards may not have real screenshots | 🟠 |

---

## ⏱ Suggested Work Order

```
Week 1: #1 (clouds) → #2 (monitors) → #4 (corridor decorations)
Week 2: #3 (awards) → #5 (graphics readability) → #6 (B&W→color hover)
Week 3: #7 (tutorial) → #10 (real content) → #11 (performance)
Week 4: #9 (easter eggs) → #13 (micro-interactions) → #8 (sounds)
Final:  #12 (accessibility) → Final QA
```

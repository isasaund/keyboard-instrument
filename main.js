function ensureQDot() {
  let dot = document.getElementById("q_dot");
  if (dot) return dot;

  dot = document.createElement("div");
  dot.id = "q_dot";
  dot.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const CIRCLES_Y_SHIFT_PX = -200;
  const size = 10 + SIZE_BUMP_PX;
  const half = size / 2;
  Object.assign(dot.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${CIRCLES_Y_SHIFT_PX}px)`,
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: `-${half}px`,
    marginTop: `-${half}px`,
    borderRadius: "9999px",
    background: "#e00000",
    zIndex: "9999",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
  });
  document.body.appendChild(dot);
  return dot;
}

function toggleElementVisibility(el) {
  const current = (el.style.opacity || "0").trim();
  el.style.opacity = current === "1" ? "0" : "1";
}

function ensureWRing() {
  let ring = document.getElementById("w_ring");
  if (ring) return ring;

  ring = document.createElement("div");
  ring.id = "w_ring";
  ring.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const CIRCLES_Y_SHIFT_PX = -200;
  // Slightly larger than the q dot, centered the same way.
  const size = 22 + SIZE_BUMP_PX;
  Object.assign(ring.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${CIRCLES_Y_SHIFT_PX}px)`,
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: `-${size / 2}px`,
    marginTop: `-${size / 2}px`,
    borderRadius: "9999px",
    background: "transparent",
    border: "2px solid #ff4d4d",
    zIndex: "9998",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
    boxSizing: "border-box",
  });

  document.body.appendChild(ring);
  return ring;
}

function ensureERing() {
  let ring = document.getElementById("e_ring");
  if (ring) return ring;

  ring = document.createElement("div");
  ring.id = "e_ring";
  ring.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const CIRCLES_Y_SHIFT_PX = -200;
  // Slightly larger than the w ring, centered the same way.
  const size = 34 + SIZE_BUMP_PX;
  Object.assign(ring.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${CIRCLES_Y_SHIFT_PX}px)`,
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: `-${size / 2}px`,
    marginTop: `-${size / 2}px`,
    borderRadius: "9999px",
    background: "transparent",
    border: "2px solid #ff7a7a",
    zIndex: "9997",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
    boxSizing: "border-box",
  });

  document.body.appendChild(ring);
  return ring;
}

function ensureRRing() {
  let ring = document.getElementById("r_ring");
  if (ring) return ring;

  ring = document.createElement("div");
  ring.id = "r_ring";
  ring.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const CIRCLES_Y_SHIFT_PX = -200;
  // Slightly larger than the e ring, centered the same way.
  const size = 46 + SIZE_BUMP_PX;
  Object.assign(ring.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${CIRCLES_Y_SHIFT_PX}px)`,
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: `-${size / 2}px`,
    marginTop: `-${size / 2}px`,
    borderRadius: "9999px",
    background: "transparent",
    border: "2px solid #ffaaaa",
    zIndex: "9996",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
    boxSizing: "border-box",
  });

  document.body.appendChild(ring);
  return ring;
}

function ensureTRing() {
  let ring = document.getElementById("t_ring");
  if (ring) return ring;

  ring = document.createElement("div");
  ring.id = "t_ring";
  ring.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const CIRCLES_Y_SHIFT_PX = -200;
  // Slightly larger than the r ring, centered the same way.
  const size = 58 + SIZE_BUMP_PX;
  Object.assign(ring.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${CIRCLES_Y_SHIFT_PX}px)`,
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: `-${size / 2}px`,
    marginTop: `-${size / 2}px`,
    borderRadius: "9999px",
    background: "transparent",
    border: "2px solid #ffd0d0",
    zIndex: "9995",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
    boxSizing: "border-box",
  });

  document.body.appendChild(ring);
  return ring;
}

function ensureYRing() {
  let ring = document.getElementById("y_ring");
  if (ring) return ring;

  ring = document.createElement("div");
  ring.id = "y_ring";
  ring.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const CIRCLES_Y_SHIFT_PX = -200;
  // Slightly larger than the t ring, centered the same way.
  const size = 70 + SIZE_BUMP_PX;
  Object.assign(ring.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${CIRCLES_Y_SHIFT_PX}px)`,
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: `-${size / 2}px`,
    marginTop: `-${size / 2}px`,
    borderRadius: "9999px",
    background: "transparent",
    border: "2px solid #ffe6e6",
    zIndex: "9994",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
    boxSizing: "border-box",
  });

  document.body.appendChild(ring);
  return ring;
}

function ensureURing() {
  let ring = document.getElementById("u_ring");
  if (ring) return ring;

  ring = document.createElement("div");
  ring.id = "u_ring";
  ring.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const CIRCLES_Y_SHIFT_PX = -200;
  // Slightly larger than the y ring, centered the same way.
  const size = 82 + SIZE_BUMP_PX;
  Object.assign(ring.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${CIRCLES_Y_SHIFT_PX}px)`,
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: `-${size / 2}px`,
    marginTop: `-${size / 2}px`,
    borderRadius: "9999px",
    background: "transparent",
    border: "2px solid #fff0f0",
    zIndex: "9993",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
    boxSizing: "border-box",
  });

  document.body.appendChild(ring);
  return ring;
}

function ensureIRing() {
  let ring = document.getElementById("i_ring");
  if (ring) return ring;

  ring = document.createElement("div");
  ring.id = "i_ring";
  ring.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const CIRCLES_Y_SHIFT_PX = -200;
  // Slightly larger than the u ring, centered the same way.
  const size = 94 + SIZE_BUMP_PX;
  Object.assign(ring.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${CIRCLES_Y_SHIFT_PX}px)`,
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: `-${size / 2}px`,
    marginTop: `-${size / 2}px`,
    borderRadius: "9999px",
    background: "transparent",
    border: "2px solid #fff8f8",
    zIndex: "9992",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
    boxSizing: "border-box",
  });

  document.body.appendChild(ring);
  return ring;
}

function ensureORing() {
  let ring = document.getElementById("o_ring");
  if (ring) return ring;

  ring = document.createElement("div");
  ring.id = "o_ring";
  ring.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const CIRCLES_Y_SHIFT_PX = -200;
  // Slightly larger than the i ring, centered the same way.
  const size = 106 + SIZE_BUMP_PX;
  Object.assign(ring.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${CIRCLES_Y_SHIFT_PX}px)`,
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: `-${size / 2}px`,
    marginTop: `-${size / 2}px`,
    borderRadius: "9999px",
    background: "transparent",
    border: "2px solid rgba(255, 255, 255, 0.95)",
    zIndex: "9991",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
    boxSizing: "border-box",
  });

  document.body.appendChild(ring);
  return ring;
}

function ensurePRing() {
  let ring = document.getElementById("p_ring");
  if (ring) return ring;

  ring = document.createElement("div");
  ring.id = "p_ring";
  ring.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const CIRCLES_Y_SHIFT_PX = -200;
  // Slightly larger than the o ring, centered the same way.
  const size = 118 + SIZE_BUMP_PX;
  Object.assign(ring.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${CIRCLES_Y_SHIFT_PX}px)`,
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: `-${size / 2}px`,
    marginTop: `-${size / 2}px`,
    borderRadius: "9999px",
    background: "transparent",
    border: "2px solid rgba(255, 255, 255, 0.85)",
    zIndex: "9990",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
    boxSizing: "border-box",
  });

  document.body.appendChild(ring);
  return ring;
}

function ensureAStar() {
  let star = document.getElementById("a_star");
  if (star) return star;

  star = document.createElement("div");
  star.id = "a_star";
  star.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const STARS_Y_SHIFT_PX = -75;
  // Place the star below the circle stack (outermost ring is 218px wide).
  const outerCircleSize = 118 + SIZE_BUMP_PX;
  const size = 14 + SIZE_BUMP_PX;
  const yOffsetFromCenterPx = outerCircleSize / 2 + 36;
  Object.assign(star.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${yOffsetFromCenterPx + STARS_Y_SHIFT_PX}px)`,
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: `-${size / 2}px`,
    marginTop: `-${size / 2}px`,
    zIndex: "9999",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
  });

  star.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <polygon
        points="50,4 61,36 95,36 67,56 78,90 50,70 22,90 33,56 5,36 39,36"
        fill="#1e6bff"
      />
    </svg>
  `;

  document.body.appendChild(star);
  return star;
}

function ensureSStarRing() {
  let star = document.getElementById("s_star");
  if (star) return star;

  star = document.createElement("div");
  star.id = "s_star";
  star.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const STARS_Y_SHIFT_PX = -75;
  // Same position as the "a" star, but slightly larger and outlined.
  const outerCircleSize = 118 + SIZE_BUMP_PX;
  const size = 24 + SIZE_BUMP_PX;
  const yOffsetFromCenterPx = outerCircleSize / 2 + 36;
  Object.assign(star.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${yOffsetFromCenterPx + STARS_Y_SHIFT_PX}px)`,
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: `-${size / 2}px`,
    marginTop: `-${size / 2}px`,
    zIndex: "9998",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
  });

  star.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <polygon
        points="50,4 61,36 95,36 67,56 78,90 50,70 22,90 33,56 5,36 39,36"
        fill="none"
        stroke="#6fa2ff"
        stroke-width="9"
        stroke-linejoin="miter"
      />
    </svg>
  `;

  document.body.appendChild(star);
  return star;
}

function ensureDStarRing() {
  let star = document.getElementById("d_star");
  if (star) return star;

  star = document.createElement("div");
  star.id = "d_star";
  star.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const STARS_Y_SHIFT_PX = -75;
  // Slightly larger than the "s" outline, same position, slightly lighter color.
  const outerCircleSize = 118 + SIZE_BUMP_PX;
  const size = 24 + SIZE_BUMP_PX + 50;
  const yOffsetFromCenterPx = outerCircleSize / 2 + 36;
  Object.assign(star.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${yOffsetFromCenterPx + STARS_Y_SHIFT_PX}px)`,
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: `-${size / 2}px`,
    marginTop: `-${size / 2}px`,
    zIndex: "9997",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
  });

  star.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <polygon
        points="50,4 61,36 95,36 67,56 78,90 50,70 22,90 33,56 5,36 39,36"
        fill="none"
        stroke="#9bbcff"
        stroke-width="8"
        stroke-linejoin="miter"
      />
    </svg>
  `;

  document.body.appendChild(star);
  return star;
}

function ensureFStarRing() {
  let star = document.getElementById("f_star");
  if (star) return star;

  star = document.createElement("div");
  star.id = "f_star";
  star.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const STARS_Y_SHIFT_PX = -75;
  // Slightly larger than the "d" outline, same position, slightly lighter color.
  const outerCircleSize = 118 + SIZE_BUMP_PX;
  const size = 24 + SIZE_BUMP_PX + 100;
  const yOffsetFromCenterPx = outerCircleSize / 2 + 36;
  Object.assign(star.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${yOffsetFromCenterPx + STARS_Y_SHIFT_PX}px)`,
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: `-${size / 2}px`,
    marginTop: `-${size / 2}px`,
    zIndex: "9996",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
  });

  star.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <polygon
        points="50,4 61,36 95,36 67,56 78,90 50,70 22,90 33,56 5,36 39,36"
        fill="none"
        stroke="#c2d6ff"
        stroke-width="7"
        stroke-linejoin="miter"
      />
    </svg>
  `;

  document.body.appendChild(star);
  return star;
}

function ensureGStarRing() {
  let star = document.getElementById("g_star");
  if (star) return star;

  star = document.createElement("div");
  star.id = "g_star";
  star.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const STARS_Y_SHIFT_PX = -75;
  // Slightly larger than the "f" outline, same position, slightly lighter color.
  const outerCircleSize = 118 + SIZE_BUMP_PX;
  const size = 24 + SIZE_BUMP_PX + 150;
  const yOffsetFromCenterPx = outerCircleSize / 2 + 36;
  Object.assign(star.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${yOffsetFromCenterPx + STARS_Y_SHIFT_PX}px)`,
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: `-${size / 2}px`,
    marginTop: `-${size / 2}px`,
    zIndex: "9995",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
  });

  star.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <polygon
        points="50,4 61,36 95,36 67,56 78,90 50,70 22,90 33,56 5,36 39,36"
        fill="none"
        stroke="#e1ecff"
        stroke-width="6"
        stroke-linejoin="miter"
      />
    </svg>
  `;

  document.body.appendChild(star);
  return star;
}

function ensureHStarRing() {
  let star = document.getElementById("h_star");
  if (star) return star;

  star = document.createElement("div");
  star.id = "h_star";
  star.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const STARS_Y_SHIFT_PX = -75;
  // Slightly larger than the "g" outline, same position, slightly lighter color.
  const outerCircleSize = 118 + SIZE_BUMP_PX;
  const size = 24 + SIZE_BUMP_PX + 200;
  const yOffsetFromCenterPx = outerCircleSize / 2 + 36;
  Object.assign(star.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${yOffsetFromCenterPx + STARS_Y_SHIFT_PX}px)`,
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: `-${size / 2}px`,
    marginTop: `-${size / 2}px`,
    zIndex: "9994",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
  });

  star.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <polygon
        points="50,4 61,36 95,36 67,56 78,90 50,70 22,90 33,56 5,36 39,36"
        fill="none"
        stroke="#f0f6ff"
        stroke-width="5"
        stroke-linejoin="miter"
      />
    </svg>
  `;

  document.body.appendChild(star);
  return star;
}

function ensureJStarRing() {
  let star = document.getElementById("j_star");
  if (star) return star;

  star = document.createElement("div");
  star.id = "j_star";
  star.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const STARS_Y_SHIFT_PX = -75;
  // Slightly larger than the "h" outline, same position, slightly lighter color.
  const outerCircleSize = 118 + SIZE_BUMP_PX;
  const size = 24 + SIZE_BUMP_PX + 250;
  const yOffsetFromCenterPx = outerCircleSize / 2 + 36;
  Object.assign(star.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${yOffsetFromCenterPx + STARS_Y_SHIFT_PX}px)`,
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: `-${size / 2}px`,
    marginTop: `-${size / 2}px`,
    zIndex: "9993",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
  });

  star.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <polygon
        points="50,4 61,36 95,36 67,56 78,90 50,70 22,90 33,56 5,36 39,36"
        fill="none"
        stroke="#f7fbff"
        stroke-width="4"
        stroke-linejoin="miter"
      />
    </svg>
  `;

  document.body.appendChild(star);
  return star;
}

function ensureKStarRing() {
  let star = document.getElementById("k_star");
  if (star) return star;

  star = document.createElement("div");
  star.id = "k_star";
  star.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const STARS_Y_SHIFT_PX = -75;
  // Slightly larger than the "j" outline, same position, slightly lighter color.
  const outerCircleSize = 118 + SIZE_BUMP_PX;
  const size = 24 + SIZE_BUMP_PX + 300;
  const yOffsetFromCenterPx = outerCircleSize / 2 + 36;
  Object.assign(star.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${yOffsetFromCenterPx + STARS_Y_SHIFT_PX}px)`,
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: `-${size / 2}px`,
    marginTop: `-${size / 2}px`,
    zIndex: "9992",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
  });

  star.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <polygon
        points="50,4 61,36 95,36 67,56 78,90 50,70 22,90 33,56 5,36 39,36"
        fill="none"
        stroke="#fcfeff"
        stroke-width="3"
        stroke-linejoin="miter"
      />
    </svg>
  `;

  document.body.appendChild(star);
  return star;
}

function ensureLStarRing() {
  let star = document.getElementById("l_star");
  if (star) return star;

  star = document.createElement("div");
  star.id = "l_star";
  star.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const STARS_Y_SHIFT_PX = -75;
  // Slightly larger than the "k" outline, same position, slightly lighter (fainter) stroke.
  const outerCircleSize = 118 + SIZE_BUMP_PX;
  const size = 24 + SIZE_BUMP_PX + 350;
  const yOffsetFromCenterPx = outerCircleSize / 2 + 36;
  Object.assign(star.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${yOffsetFromCenterPx + STARS_Y_SHIFT_PX}px)`,
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: `-${size / 2}px`,
    marginTop: `-${size / 2}px`,
    zIndex: "9991",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
  });

  star.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <polygon
        points="50,4 61,36 95,36 67,56 78,90 50,70 22,90 33,56 5,36 39,36"
        fill="none"
        stroke="rgba(220, 235, 255, 0.9)"
        stroke-width="3"
        stroke-linejoin="miter"
      />
    </svg>
  `;

  document.body.appendChild(star);
  return star;
}

function ensureZSquare() {
  let square = document.getElementById("z_square");
  if (square) return square;

  square = document.createElement("div");
  square.id = "z_square";
  square.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const SQUARE_Y_SHIFT_PX = -100;
  const size = (16 + SIZE_BUMP_PX) * (2 / 3);

  // Place below the star stack (largest ring is 474px; center is already offset down).
  const outerCircleSize = 118 + SIZE_BUMP_PX; // 218px
  const starCenterOffsetFromScreenCenterPx = outerCircleSize / 2 + 36; // matches star functions
  const largestStarRingSize = 24 + SIZE_BUMP_PX + 350; // "l" ring size (474px)
  const yOffsetFromCenterPx =
    starCenterOffsetFromScreenCenterPx +
    largestStarRingSize / 2 +
    60 +
    SQUARE_Y_SHIFT_PX;

  Object.assign(square.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${yOffsetFromCenterPx}px)`,
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: `-${size / 2}px`,
    marginTop: `-${size / 2}px`,
    background: "#1fbf3a",
    zIndex: "9999",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
  });

  document.body.appendChild(square);
  return square;
}

function ensureXSquareRing() {
  let ring = document.getElementById("x_square_ring");
  if (ring) return ring;

  ring = document.createElement("div");
  ring.id = "x_square_ring";
  ring.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const SQUARE_Y_SHIFT_PX = -100;
  const innerSize = (16 + SIZE_BUMP_PX) * (2 / 3);
  const ringSize = innerSize + 40;

  // Match `ensureZSquare()` positioning so it surrounds the square.
  const outerCircleSize = 118 + SIZE_BUMP_PX; // 218px
  const starCenterOffsetFromScreenCenterPx = outerCircleSize / 2 + 36;
  const largestStarRingSize = 24 + SIZE_BUMP_PX + 350;
  const yOffsetFromCenterPx =
    starCenterOffsetFromScreenCenterPx +
    largestStarRingSize / 2 +
    60 +
    SQUARE_Y_SHIFT_PX;

  Object.assign(ring.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${yOffsetFromCenterPx}px)`,
    width: `${ringSize}px`,
    height: `${ringSize}px`,
    marginLeft: `-${ringSize / 2}px`,
    marginTop: `-${ringSize / 2}px`,
    background: "transparent",
    border: "6px solid #5ee37a",
    boxSizing: "border-box",
    zIndex: "9998",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
  });

  document.body.appendChild(ring);
  return ring;
}

function ensureCSquareRing() {
  let ring = document.getElementById("c_square_ring");
  if (ring) return ring;

  ring = document.createElement("div");
  ring.id = "c_square_ring";
  ring.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const SQUARE_Y_SHIFT_PX = -100;
  const innerSize = (16 + SIZE_BUMP_PX) * (2 / 3);
  const ringSize = innerSize + 80;

  // Match `ensureZSquare()` positioning so it surrounds the square.
  const outerCircleSize = 118 + SIZE_BUMP_PX; // 218px
  const starCenterOffsetFromScreenCenterPx = outerCircleSize / 2 + 36;
  const largestStarRingSize = 24 + SIZE_BUMP_PX + 350;
  const yOffsetFromCenterPx =
    starCenterOffsetFromScreenCenterPx +
    largestStarRingSize / 2 +
    60 +
    SQUARE_Y_SHIFT_PX;

  Object.assign(ring.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${yOffsetFromCenterPx}px)`,
    width: `${ringSize}px`,
    height: `${ringSize}px`,
    marginLeft: `-${ringSize / 2}px`,
    marginTop: `-${ringSize / 2}px`,
    background: "transparent",
    border: "6px solid #9af0ad",
    boxSizing: "border-box",
    zIndex: "9997",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
  });

  document.body.appendChild(ring);
  return ring;
}

function ensureVSquareRing() {
  let ring = document.getElementById("v_square_ring");
  if (ring) return ring;

  ring = document.createElement("div");
  ring.id = "v_square_ring";
  ring.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const SQUARE_Y_SHIFT_PX = -100;
  const innerSize = (16 + SIZE_BUMP_PX) * (2 / 3);
  const ringSize = innerSize + 120;

  // Match `ensureZSquare()` positioning so it surrounds the square.
  const outerCircleSize = 118 + SIZE_BUMP_PX; // 218px
  const starCenterOffsetFromScreenCenterPx = outerCircleSize / 2 + 36;
  const largestStarRingSize = 24 + SIZE_BUMP_PX + 350;
  const yOffsetFromCenterPx =
    starCenterOffsetFromScreenCenterPx +
    largestStarRingSize / 2 +
    60 +
    SQUARE_Y_SHIFT_PX;

  Object.assign(ring.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${yOffsetFromCenterPx}px)`,
    width: `${ringSize}px`,
    height: `${ringSize}px`,
    marginLeft: `-${ringSize / 2}px`,
    marginTop: `-${ringSize / 2}px`,
    background: "transparent",
    border: "6px solid #c9f6d5",
    boxSizing: "border-box",
    zIndex: "9996",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
  });

  document.body.appendChild(ring);
  return ring;
}

function ensureBSquareRing() {
  let ring = document.getElementById("b_square_ring");
  if (ring) return ring;

  ring = document.createElement("div");
  ring.id = "b_square_ring";
  ring.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const SQUARE_Y_SHIFT_PX = -100;
  const innerSize = (16 + SIZE_BUMP_PX) * (2 / 3);
  const ringSize = innerSize + 160;

  // Match `ensureZSquare()` positioning so it surrounds the square.
  const outerCircleSize = 118 + SIZE_BUMP_PX; // 218px
  const starCenterOffsetFromScreenCenterPx = outerCircleSize / 2 + 36;
  const largestStarRingSize = 24 + SIZE_BUMP_PX + 350;
  const yOffsetFromCenterPx =
    starCenterOffsetFromScreenCenterPx +
    largestStarRingSize / 2 +
    60 +
    SQUARE_Y_SHIFT_PX;

  Object.assign(ring.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${yOffsetFromCenterPx}px)`,
    width: `${ringSize}px`,
    height: `${ringSize}px`,
    marginLeft: `-${ringSize / 2}px`,
    marginTop: `-${ringSize / 2}px`,
    background: "transparent",
    border: "6px solid #e7fbec",
    boxSizing: "border-box",
    zIndex: "9995",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
  });

  document.body.appendChild(ring);
  return ring;
}

function ensureNSquareRing() {
  let ring = document.getElementById("n_square_ring");
  if (ring) return ring;

  ring = document.createElement("div");
  ring.id = "n_square_ring";
  ring.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const SQUARE_Y_SHIFT_PX = -100;
  const innerSize = (16 + SIZE_BUMP_PX) * (2 / 3);
  const ringSize = innerSize + 200;

  // Match `ensureZSquare()` positioning so it surrounds the square.
  const outerCircleSize = 118 + SIZE_BUMP_PX; // 218px
  const starCenterOffsetFromScreenCenterPx = outerCircleSize / 2 + 36;
  const largestStarRingSize = 24 + SIZE_BUMP_PX + 350;
  const yOffsetFromCenterPx =
    starCenterOffsetFromScreenCenterPx +
    largestStarRingSize / 2 +
    60 +
    SQUARE_Y_SHIFT_PX;

  Object.assign(ring.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${yOffsetFromCenterPx}px)`,
    width: `${ringSize}px`,
    height: `${ringSize}px`,
    marginLeft: `-${ringSize / 2}px`,
    marginTop: `-${ringSize / 2}px`,
    background: "transparent",
    border: "6px solid #f6fef8",
    boxSizing: "border-box",
    zIndex: "9994",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
  });

  document.body.appendChild(ring);
  return ring;
}

function ensureMSquareRing() {
  let ring = document.getElementById("m_square_ring");
  if (ring) return ring;

  ring = document.createElement("div");
  ring.id = "m_square_ring";
  ring.setAttribute("aria-hidden", "true");

  const SIZE_BUMP_PX = 100;
  const SQUARE_Y_SHIFT_PX = -100;
  const innerSize = (16 + SIZE_BUMP_PX) * (2 / 3);
  const ringSize = innerSize + 240;

  // Match `ensureZSquare()` positioning so it surrounds the square.
  const outerCircleSize = 118 + SIZE_BUMP_PX; // 218px
  const starCenterOffsetFromScreenCenterPx = outerCircleSize / 2 + 36;
  const largestStarRingSize = 24 + SIZE_BUMP_PX + 350;
  const yOffsetFromCenterPx =
    starCenterOffsetFromScreenCenterPx +
    largestStarRingSize / 2 +
    60 +
    SQUARE_Y_SHIFT_PX;

  Object.assign(ring.style, {
    position: "fixed",
    left: "50%",
    top: `calc(50% + ${yOffsetFromCenterPx}px)`,
    width: `${ringSize}px`,
    height: `${ringSize}px`,
    marginLeft: `-${ringSize / 2}px`,
    marginTop: `-${ringSize / 2}px`,
    background: "transparent",
    border: "6px solid rgba(246, 254, 248, 0.7)",
    boxSizing: "border-box",
    zIndex: "9993",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 120ms ease-out",
  });

  document.body.appendChild(ring);
  return ring;
}

document.body.onkeydown = function (keypress_event) {
  var key = keypress_event.key;
  document.getElementById("key_display").innerHTML = key;

  if (key === "q") {
    const dot = ensureQDot();
    toggleElementVisibility(dot);
  }

  if (key === "w") {
    const ring = ensureWRing();
    toggleElementVisibility(ring);
  }

  if (key === "e") {
    const ring = ensureERing();
    toggleElementVisibility(ring);
  }

  if (key === "r") {
    const ring = ensureRRing();
    toggleElementVisibility(ring);
  }

  if (key === "t") {
    const ring = ensureTRing();
    toggleElementVisibility(ring);
  }

  if (key === "y") {
    const ring = ensureYRing();
    toggleElementVisibility(ring);
  }

  if (key === "u") {
    const ring = ensureURing();
    toggleElementVisibility(ring);
  }

  if (key === "i") {
    const ring = ensureIRing();
    toggleElementVisibility(ring);
  }

  if (key === "o") {
    const ring = ensureORing();
    toggleElementVisibility(ring);
  }

  if (key === "p") {
    const ring = ensurePRing();
    toggleElementVisibility(ring);
  }

  if (key === "a") {
    const star = ensureAStar();
    toggleElementVisibility(star);
  }

  if (key === "s") {
    const star = ensureSStarRing();
    toggleElementVisibility(star);
  }

  if (key === "d") {
    const star = ensureDStarRing();
    toggleElementVisibility(star);
  }

  if (key === "f") {
    const star = ensureFStarRing();
    toggleElementVisibility(star);
  }

  if (key === "g") {
    const star = ensureGStarRing();
    toggleElementVisibility(star);
  }

  if (key === "h") {
    const star = ensureHStarRing();
    toggleElementVisibility(star);
  }

  if (key === "j") {
    const star = ensureJStarRing();
    toggleElementVisibility(star);
  }

  if (key === "k") {
    const star = ensureKStarRing();
    toggleElementVisibility(star);
  }

  if (key === "l") {
    const star = ensureLStarRing();
    toggleElementVisibility(star);
  }

  if (key === "z") {
    const square = ensureZSquare();
    toggleElementVisibility(square);
  }

  if (key === "x") {
    const ring = ensureXSquareRing();
    toggleElementVisibility(ring);
  }

  if (key === "c") {
    const ring = ensureCSquareRing();
    toggleElementVisibility(ring);
  }

  if (key === "v") {
    const ring = ensureVSquareRing();
    toggleElementVisibility(ring);
  }

  if (key === "b") {
    const ring = ensureBSquareRing();
    toggleElementVisibility(ring);
  }

  if (key === "n") {
    const ring = ensureNSquareRing();
    toggleElementVisibility(ring);
  }

  if (key === "m") {
    const ring = ensureMSquareRing();
    toggleElementVisibility(ring);
  }
};
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #0c0e12;
  --panel: #151922;
  --line: #2a3040;
  --ink: #f3f5f8;
  --mute: #9aa4b5;
  --acc: #4d7cff;
  --accink: #fff;
  --hot: #c6ff3d;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: calc(env(safe-area-inset-top, 0px) + 60px);
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font: 400 16px/1.55 'Manrope', system-ui, sans-serif;
  padding-bottom: 72px;
}

h1,
h2,
h3,
button,
label,
input,
select,
.btn {
  font-family: 'Manrope', system-ui, sans-serif;
}

h1,
h2,
h3 {
  font-family: 'Anton', 'Impact', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
  line-height: 0.95;
  letter-spacing: 0.01em;
}

.wrap {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 20px;
}

a {
  color: inherit;
}

:focus-visible {
  outline: 3px solid var(--hot);
  outline-offset: 2px;
}

.btn {
  display: inline-block;
  background: var(--acc);
  color: var(--accink);
  border: 0;
  font: 800 0.95rem 'Manrope', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 15px 26px;
  text-decoration: none;
  cursor: pointer;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 92% 100%, 0 100%);
  transition: transform 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn.o {
  background: none;
  color: var(--ink);
  box-shadow: inset 0 0 0 2px var(--ink);
}

nav.top {
  position: sticky;
  top: env(safe-area-inset-top, 0px);
  z-index: 20;
  background: var(--bg);
  border-bottom: 1px solid var(--line);
}

nav.top .wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 58px;
}

.lg {
  font: 400 1.5rem 'Anton', sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.04em;
}

.lg i {
  color: var(--hot);
  font-style: normal;
}

.links {
  display: flex;
  gap: 24px;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.links a {
  text-decoration: none;
  color: var(--mute);
}

.links a:hover {
  color: var(--ink);
}

.hero {
  position: relative;
  overflow: hidden;
  padding: 64px 0 56px;
  border-bottom: 1px solid var(--line);
  color: #fff;
  min-height: 640px;
}

.hero:before {
  display: none;
}

.hero .wrap {
  position: relative;
  z-index: 2;
}

.eyebrow {
  display: inline-block;
  background: var(--hot);
  color: var(--bg);
  font: 800 0.8rem 'Manrope';
  text-transform: uppercase;
  letter-spacing: 0.14em;
  padding: 5px 12px;
  margin-bottom: 22px;
}

.hero h1 {
  font-size: clamp(4.2rem, 15vw, 11rem);
  line-height: 0.85;
}

.hero h1 span {
  color: transparent;
  -webkit-text-stroke: 2px var(--ink);
}

.hero p {
  max-width: 50ch;
  font-size: 1.15rem;
  color: #d3d9e6;
  margin: 24px 0 30px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  margin-top: 44px;
}

.stats div {
  padding: 18px 0;
  border-right: 1px solid rgba(255, 255, 255, 0.25);
  padding-left: 16px;
}

.stats div:first-child {
  padding-left: 0;
}

.stats div:last-child {
  border: 0;
}

.stats b {
  display: block;
  font: 400 2.2rem 'Anton', sans-serif;
}

.stats span {
  color: #c3cbdb;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.tick {
  background: var(--hot);
  color: #0c0e12;
  overflow: hidden;
  white-space: nowrap;
  font: 400 1.4rem 'Anton', sans-serif;
  text-transform: uppercase;
  padding: 10px 0;
}

.tick div {
  display: inline-block;
  animation: tk 28s linear infinite;
}

@keyframes tk {
  to {
    transform: translateX(-50%);
  }
}

section.s {
  padding: 80px 0;
  border-bottom: 1px solid var(--line);
}

.num {
  color: var(--acc);
  font: 800 0.9rem 'Manrope';
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

h2 {
  font-size: clamp(2.6rem, 7vw, 5rem);
  margin-bottom: 0;
}

.sub {
  color: var(--mute);
  max-width: 54ch;
  margin: 14px 0 34px;
}

.why {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin-top: 34px;
}

.why div {
  border: 1px solid var(--acc);
  padding: 30px 24px;
}

.why h3 {
  font-size: 1.7rem;
  margin-bottom: 12px;
}

.why p {
  color: var(--mute);
  margin: 0;
}

.prog {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.prog:nth-of-type(even) .ph {
  order: 2;
}

.prog .ph {
  min-height: 400px;
  position: relative;
  background: center/cover no-repeat;
}

.prog .tx {
  padding: 48px 44px;
  background: var(--panel);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
}

.prog h3 {
  font-size: 2.5rem;
}

.prog p {
  color: var(--mute);
  margin: 0;
  max-width: 46ch;
}

.seg {
  display: inline-flex;
  border: 2px solid var(--line);
  margin-bottom: 22px;
}

.seg button {
  background: none;
  border: 0;
  color: var(--mute);
  padding: 10px 20px;
  font: 700 0.85rem 'Manrope';
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
}

.seg button[aria-pressed='true'] {
  background: var(--ink);
  color: var(--bg);
}

.prow-list {
  display: grid;
  gap: 0;
}

.prow {
  display: grid;
  grid-template-columns: 1.1fr 2fr auto auto;
  gap: 22px;
  align-items: center;
  padding: 24px 0;
  border-top: 1px solid var(--line);
}

.prow:last-child {
  border-bottom: 1px solid var(--line);
}

.prow h3 {
  font-size: 2rem;
}

.prow small {
  color: var(--hot);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.72rem;
  display: block;
  margin-bottom: 6px;
}

.prow ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px 18px;
  color: var(--mute);
  font-size: 0.93rem;
}

.prow li:before {
  content: '+ ';
  color: var(--acc);
  font-weight: 800;
}

.pr {
  font: 400 2.6rem 'Anton', sans-serif;
}

.pr small {
  font: 600 0.8rem 'Manrope';
  color: var(--mute);
  display: block;
  text-transform: none;
  letter-spacing: 0;
}

.coach-list {
  display: grid;
  gap: 0;
}

.coach {
  display: grid;
  grid-template-columns: 70px 1fr 1.4fr 150px;
  gap: 20px;
  padding: 26px 0;
  border-top: 1px solid var(--line);
  align-items: center;
  transition: padding 0.2s ease;
}

.coach:hover {
  padding-left: 12px;
  background: linear-gradient(90deg, rgba(77, 124, 255, 0.12), transparent);
}

.coach .n {
  font: 400 2.4rem 'Anton', sans-serif;
  color: var(--acc);
}

.coach h3 {
  font-size: 2.1rem;
}

.coach em {
  font-style: normal;
  color: var(--mute);
  font-size: 0.9rem;
  display: block;
  margin-top: 5px;
}

.coach p {
  margin: 0;
  color: var(--mute);
}

.coach b {
  color: var(--hot);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.gw {
  overflow-x: auto;
  border: 1px solid var(--line);
}

table {
  border-collapse: collapse;
  width: 100%;
  min-width: 760px;
  background: var(--panel);
}

th {
  font: 400 1.2rem 'Anton', sans-serif;
  text-transform: uppercase;
  padding: 14px;
  text-align: left;
  border-bottom: 2px solid var(--acc);
}

td {
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
  padding: 6px;
  vertical-align: top;
  height: 78px;
}

td:first-child {
  border-left: 0;
  font: 800 0.85rem 'Manrope';
  color: var(--hot);
  white-space: nowrap;
  padding: 14px;
  width: 84px;
}

.cell {
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  color: var(--ink);
  border: 1px solid transparent;
  padding: 8px;
  font: 700 0.88rem/1.25 'Manrope';
  cursor: pointer;
}

.cell small {
  display: block;
  color: var(--mute);
  font-weight: 400;
  margin-top: 2px;
}

.cell:hover,
.cell.on {
  background: var(--acc);
  border-color: var(--acc);
  color: #fff;
}

.cell:hover small,
.cell.on small {
  color: #fff;
}

.note {
  color: var(--mute);
  font-size: 0.88rem;
  margin-top: 10px;
}

.join {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 56px;
}

.step {
  border-left: 3px solid var(--line);
  padding: 0 0 26px 22px;
  position: relative;
}

.step:before {
  content: attr(data-n);
  position: absolute;
  left: -17px;
  top: -4px;
  width: 31px;
  height: 31px;
  background: var(--acc);
  color: #fff;
  font: 800 0.85rem/31px 'Manrope';
  text-align: center;
}

.step h3 {
  font-size: 1.6rem;
  margin-bottom: 12px;
}

.opts {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.opts button {
  background: var(--panel);
  color: var(--ink);
  border: 2px solid var(--line);
  padding: 10px 16px;
  font: 700 0.9rem 'Manrope';
  cursor: pointer;
}

.opts button[aria-pressed='true'] {
  border-color: var(--hot);
  color: var(--hot);
}

label {
  display: block;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 6px;
}

input,
select {
  width: 100%;
  font: inherit;
  padding: 13px;
  background: var(--panel);
  color: var(--ink);
  border: 2px solid var(--line);
  margin-bottom: 6px;
  border-radius: 0;
}

.err {
  color: #ff6b6b;
  font-size: 0.88rem;
  min-height: 1.2em;
  margin-bottom: 8px;
}

.sum {
  background: var(--panel);
  border: 1px solid var(--line);
  padding: 26px;
  position: sticky;
  top: 90px;
  align-self: start;
}

.sum h3 {
  font-size: 1.8rem;
  margin-bottom: 14px;
}

.sum dl {
  margin: 0 0 20px;
}

.sum dt {
  color: var(--mute);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 12px;
}

.sum dd {
  margin: 2px 0 0;
  font-weight: 700;
}

.q {
  max-width: 900px;
}

.q p {
  font: 400 clamp(1.7rem, 4vw, 3rem)/1.1 'Anton', sans-serif;
  text-transform: uppercase;
  margin: 16px 0 20px;
  min-height: 3.4em;
}

.q cite {
  font-style: normal;
  color: var(--mute);
}

.q cite b {
  color: var(--ink);
}

.q .ctl {
  display: flex;
  gap: 10px;
  margin-top: 24px;
}

.q .ctl button {
  background: none;
  border: 2px solid var(--line);
  color: var(--ink);
  width: 48px;
  height: 48px;
  font-size: 1.2rem;
  cursor: pointer;
}

.q .ctl button:hover {
  border-color: var(--hot);
  color: var(--hot);
}

.ct {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  margin-top: 30px;
}

.ct div {
  background: var(--bg);
  padding: 22px;
}

.ct b {
  display: block;
  color: var(--hot);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
}

footer {
  padding: 26px 0;
  color: var(--mute);
  font-size: 0.85rem;
}

.dock {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  display: grid;
  grid-template-columns: 1fr 1.4fr 1fr;
  background: var(--panel);
  border-top: 2px solid var(--acc);
  padding-bottom: env(safe-area-inset-bottom, 0px);
}

.dock a {
  padding: 16px 6px;
  text-align: center;
  text-decoration: none;
  font: 800 0.85rem 'Manrope';
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.dock a.w {
  background: #1faf55;
  color: #fff;
}

@media (max-width: 800px) {
  .links {
    display: none;
  }
}

@media (max-width: 640px) {
  .stats {
    grid-template-columns: 1fr 1fr;
  }

  .stats div {
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  }
}

@media (max-width: 820px) {
  .prow {
    grid-template-columns: 1fr auto;
  }

  .prow ul {
    grid-column: 1 / -1;
    grid-row: 2;
  }

  .prow .btn {
    grid-column: 1 / -1;
  }

  .coach {
    grid-template-columns: 50px 1fr;
  }

  .coach p,
  .coach b {
    grid-column: 2;
  }
}

@media (max-width: 860px) {
  .join {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

@media (max-width: 760px) {
  .prog {
    grid-template-columns: 1fr;
  }

  .prog:nth-of-type(even) .ph {
    order: 0;
  }

  .prog .ph {
    min-height: 260px;
  }

  .prog .tx {
    padding: 28px 20px;
  }

  .hero {
    min-height: 0;
  }
}

@media (min-width: 900px) {
  .dock {
    left: auto;
    right: 20px;
    bottom: calc(20px + env(safe-area-inset-bottom, 0px));
    width: 340px;
    border: 2px solid var(--acc);
  }

  body {
    padding-bottom: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .tick div {
    animation: none;
  }
}

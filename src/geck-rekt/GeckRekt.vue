<template>
  <div class="game-page" id="top">
    <header class="game-header">
      <a class="wordmark" href="#top" aria-label="Geck Rekt home">
        <img src="/geck-rekt/LogoBox.png" alt="">
        <span>GECK REKT</span>
      </a>
      <nav aria-label="Page navigation">
        <a href="#about">About</a>
        <a href="#media">Media</a>
        <a class="nav-cta" href="#updates">Get updates</a>
      </nav>
    </header>

    <main>
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow"><span></span>One hit. New rules. You decide.</p>
          <h1 id="hero-title" class="sr-only">GECK REKT</h1>
          <img class="hero-logo" src="/geck-rekt/LogoWide.png" alt="GECK REKT">
          <p class="hero-line">Pull the trigger. Change the game.</p>
          <p class="hero-description">
            A fast paced, stylized multiplayer party shooter where every hit kills
            and every match evolves. Every few rounds, the whole lobby votes on a
            modifier that changes the rules, so no two games play the same.
          </p>
          <div class="platform-line" aria-label="Planned platforms">
            <span>Coming first to <strong>Steam</strong></span>
            <span>Consoles planned later</span>
          </div>
          <div class="hero-actions">
            <a class="button" href="#updates">Keep me posted <span aria-hidden="true">↗</span></a>
            <a class="text-link" href="#media">See what’s coming ↓</a>
          </div>
        </div>

        <div class="hero-art">
          <img src="/geck-rekt/Voting_Stage.png" alt="Players choosing between two match modifiers on the voting stage">
          <span class="sticker" aria-hidden="true">IN<br>DEV</span>
          <span class="image-tag">PLAYER-VOTED MODIFIERS</span>
        </div>
      </section>

      <div class="status-strip" aria-label="Game status">
        <span>In development</span><i>✦</i><span>First look coming soon</span><i>✦</i><span>In development</span>
      </div>

      <section class="about section" id="about">
        <div class="section-label">01 / About</div>
        <div class="about-copy">
          <p class="kicker">Cute faces. Wild weapons. Zero hit points.</p>
          <h2>Vote. Adapt.<br>Wreck.</h2>
          <p>
            Bright arenas and colorful characters collide with lethal
            weapons and split second fights. Every shot matters. Between bursts of
            combat, the whole lobby votes on what happens next.
          </p>
          <p>
            Fewer weapon spawns? Exploding dead players? The players decide, then everyone
            has to survive the consequences. Learn the new rules fast, or get rekt.
          </p>
          <div class="tongue-callout">
            <strong>Weaponize your tongue.</strong>
            <p>
              Land a lick to make an enemy drop their weapon, snatch them and fling
              them across the map, or launch rocks, barrels, and anything else in reach.
            </p>
          </div>
          <p>
            Pick your Geck and make it your own. Character customization is planned
            for the full release, with hats, skin colors, and more ways to stand out
            in every match.
          </p>
        </div>
        <aside class="status-card">
          <p class="card-label">Game details</p>
          <div><span>Genre</span><strong>Party shooter</strong></div>
          <div><span>Combat</span><strong>One-hit kills</strong></div>
          <div><span>Tongue</span><strong>Disarm, grab &amp; fling</strong></div>
          <div><span>Customization</span><strong>Planned</strong></div>
          <div><span>Launch platform</span><strong>Steam</strong></div>
          <small>Console versions are planned for the future.</small>
        </aside>
      </section>

      <section class="media section" id="media">
        <div class="section-heading">
          <div class="section-label">02 / Media</div>
          <h2>Chaos in<br>motion<span>.</span></h2>
        </div>
        <div class="media-grid">
          <article class="media-card feature">
            <div class="video-embed">
              <iframe
                src="https://www.youtube-nocookie.com/embed/fKN2s1GXaAs?rel=0"
                title="GECK REKT gameplay footage"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <p>Gameplay footage <em>Work in progress</em></p>
          </article>
          <article class="media-card">
            <img class="media-image" src="/geck-rekt/Forest_Map.png" alt="Three Gecks battling in a forest arena">
            <p>Forest arena <em>Fight among the ruins</em></p>
          </article>
          <article class="media-card">
            <img class="media-image" src="/geck-rekt/Island_Map.png" alt="Three Gecks battling on a tropical island arena">
            <p>Island arena <em>Watch your step</em></p>
          </article>
        </div>
      </section>

      <section class="updates" id="updates">
        <div>
          <p class="kicker">Choose what reaches your inbox.</p>
          <h2>Stay in<br>the match.</h2>
        </div>
        <form
          id="sib-form"
          class="signup"
          method="POST"
          target="_blank"
          rel="noopener"
          action="https://311a400a.sibforms.com/serve/MUIFALXCq7slJlHUIT6HFMwEYF4Dg8HsmkPk0HS0AvCc8IISbt54At0dijzh1bIBxaRemPvz6G2NnRAMX9_Gh3LD6DpHZGXQtB8d7NjlL_gH1q6vXQwLqHQmswPdRJgEn4BAJogZiCCuq6FQxXJjnii1ON9PxdEgd99e2D9hCBOdhwRie7bKw_mBcjvzkW1DQH8oOY9U6ihEtoS4QA=="
          data-type="subscription"
          @submit="validateSignup"
        >
          <label for="email">Get only the GECK REKT news you care about.</label>
          <div class="input-row">
            <input id="email" v-model="email" type="email" name="EMAIL" autocomplete="email" placeholder="YOUR EMAIL ADDRESS" required>
          </div>
          <fieldset>
            <legend>Tell me about:</legend>
            <label class="interest"><input v-model="selectedInterests" type="checkbox" name="lists_28[]" value="5"><span>Playtests</span></label>
            <label class="interest"><input v-model="selectedInterests" type="checkbox" name="lists_28[]" value="6"><span>Tournaments &amp; events</span></label>
            <label class="interest"><input v-model="selectedInterests" type="checkbox" name="lists_28[]" value="7"><span>Steam page &amp; release</span></label>
            <label class="interest"><input v-model="selectedInterests" type="checkbox" name="lists_28[]" value="8"><span>Development updates</span></label>
          </fieldset>
          <input class="honeypot" type="text" name="email_address_check" value="" tabindex="-1" autocomplete="off" aria-hidden="true">
          <input type="hidden" name="locale" value="en">
          <button class="signup-button" type="submit">Join the list ↗</button>
          <p class="consent-note">By subscribing, you agree to receive the email updates selected above.</p>
          <p class="form-note" :class="formState" aria-live="polite">{{ formMessage }}</p>
        </form>
      </section>
    </main>

    <footer>
      <span class="wordmark"><img src="/geck-rekt/LogoBox.png" alt=""><span>GECK REKT</span></span>
      <p>© {{ currentYear }} GECK REKT. All rights reserved.</p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'GeckRekt',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      email: '',
      selectedInterests: [] as string[],
      formState: '',
      formMessage: 'Double opt-in. Unsubscribe or update your preferences any time.'
    }
  },
  methods: {
    validateSignup(event: Event) {
      if (this.selectedInterests.length === 0) {
        event.preventDefault()
        this.formState = 'error'
        this.formMessage = 'Choose at least one type of update before joining.'
        return
      }

      this.formState = 'success'
      this.formMessage = 'Confirmation opened in a new tab. Check your inbox next to complete your subscription.'
    }
  }
})
</script>

<style lang="less">
@import '../css/variables.less';

// Standalone GECK REKT landing-page palette.
@bodyBgColor: #131713;
@contentBgColor: #222820;
@textColor: #f6f0d5;
@accentColor: #f4d63d;
@highlightColor: #dc4b36;

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: @bodyBgColor; }

.game-page {
  min-height: 100vh;
  overflow: hidden;
  background: @contentBgColor;
  color: @textColor;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 1.6;

  a { color: inherit; }
  h1, h2 { margin: 0; font-family: 'Lilita One', 'Roboto', sans-serif; font-weight: 400; line-height: .9; text-transform: uppercase; letter-spacing: -.025em; }
}

.game-header, footer {
  width: 92vw;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wordmark {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 850;
  font-family: 'Lilita One', 'Roboto', sans-serif;
  font-size: .85rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: .05em;
}

.wordmark img { width: 34px; height: 34px; border-radius: 8px; object-fit: cover; }
.sr-only { position: absolute !important; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }

nav { display: flex; align-items: center; gap: 38px; }
nav a { text-decoration: none; text-transform: uppercase; letter-spacing: .08em; font-size: .7rem; font-weight: 750; }
.nav-cta { border: 1px solid @textColor; padding: 9px 14px; }

.hero {
  width: 92vw;
  max-width: 1200px;
  min-height: calc(100vh - 78px);
  margin: 0 auto;
  padding: 5vh 0 10vh;
  display: grid;
  grid-template-columns: 1.08fr .92fr;
  align-items: center;
  gap: 5vw;
}

.hero-copy { position: relative; z-index: 2; }
.eyebrow, .kicker, .section-label, .card-label {
  text-transform: uppercase;
  letter-spacing: .15em;
  font-weight: 750;
  font-size: .68rem;
}
.eyebrow { display: flex; gap: 12px; align-items: center; }
.eyebrow span { width: 36px; height: 2px; background: @accentColor; }
.hero-logo { width: 100%; max-width: 630px; margin: 5vh 0 3vh; display: block; border: 0; border-radius: 0; transform: rotate(-2.5deg); box-shadow: none; }
.hero-line { margin: 0 0 10px; font-size: clamp(1.3rem, 2vw, 1.8rem); font-weight: 650; }
.hero-description { max-width: 580px; color: fade(@textColor, 72%); font-size: .98rem; }
.platform-line { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
.platform-line span { padding: 5px 9px; border: 1px solid fade(@textColor, 18%); color: fade(@textColor, 72%); font-size: .66rem; text-transform: uppercase; letter-spacing: .07em; }
.platform-line strong { color: @accentColor; }
.hero-actions { display: flex; gap: 28px; align-items: center; margin-top: 32px; }
.button { min-width: 215px; padding: 15px 18px; display: inline-flex; justify-content: space-between; background: @accentColor; color: @contentBgColor !important; box-shadow: 6px 6px 0 @highlightColor; text-decoration: none; text-transform: uppercase; letter-spacing: .06em; font-size: .7rem; font-weight: 750; }
.text-link { font-size: .7rem; font-weight: 750; text-transform: uppercase; text-underline-offset: 6px; }

.hero-art { width: 46vw; max-width: 620px; aspect-ratio: 16 / 10; position: relative; justify-self: end; transform: rotate(3.5deg); box-shadow: 14px 16px 0 @bodyBgColor; }
.hero-art > img { width: 100%; height: 100%; display: block; object-fit: cover; }
.hero-art::after { content: ''; position: absolute; inset: 0; border: 2px solid fade(@textColor, 16%); pointer-events: none; }
.sticker { position: absolute; right: -1%; top: 9%; width: 78px; height: 78px; border-radius: 50%; display: grid; place-items: center; background: @textColor; color: @contentBgColor; text-align: center; font-weight: 900; line-height: .9; transform: rotate(10deg); }
.image-tag { position: absolute; left: 14px; bottom: 14px; padding: 7px 10px; background: @contentBgColor; color: @textColor; font-size: .58rem; font-weight: 800; letter-spacing: .1em; }

.status-strip { padding: 14px 4vw; display: flex; justify-content: center; gap: 34px; background: @accentColor; color: @contentBgColor; text-transform: uppercase; font-size: .75rem; font-weight: 800; letter-spacing: .08em; transform: rotate(-2.5deg) scale(1.04); }
.status-strip i { color: @contentBgColor; font-style: normal; }

.section { width: 92vw; max-width: 1200px; margin: 0 auto; padding: 130px 0; }
.section-label { color: @accentColor; }
.about { display: grid; grid-template-columns: .4fr 1.1fr .72fr; gap: 5vw; align-items: start; }
.kicker { color: @accentColor; margin: 0 0 24px; }
.about h2, .media h2, .updates h2 { font-size: clamp(3.2rem, 6vw, 6.2rem); }
.about-copy > p:not(.kicker) { color: fade(@textColor, 72%); max-width: 640px; font-size: .98rem; }
.tongue-callout { max-width: 640px; margin: 32px 0 38px; padding: 22px 24px; border: 2px solid @accentColor; background: @highlightColor; color: white; transform: rotate(-3deg); box-shadow: 8px 9px 0 @bodyBgColor; }
.tongue-callout strong { display: block; font-family: 'Lilita One', 'Roboto', sans-serif; font-size: 1.7rem; font-weight: 400; line-height: 1; letter-spacing: .01em; text-transform: uppercase; }
.tongue-callout p { margin: 12px 0 0; font-size: .9rem; line-height: 1.55; }
.status-card { padding: 26px; border: 1px solid fade(@textColor, 18%); background: fade(@bodyBgColor, 22%); transform: rotate(3deg); }
.card-label { color: fade(@textColor, 58%); margin: 0 0 20px; }
.status-card > div { padding: 10px 0; display: flex; justify-content: space-between; border-bottom: 1px solid fade(@textColor, 14%); font-size: .82rem; }
.status-card strong { color: @accentColor; text-transform: uppercase; font-size: .68rem; }
.status-card small { display: block; margin-top: 22px; color: fade(@textColor, 55%); line-height: 1.5; }

.media { border-top: 1px solid fade(@textColor, 14%); }
.section-heading { margin-bottom: 60px; display: flex; justify-content: space-between; align-items: flex-start; }
.media h2 span { color: @highlightColor; }
.media-grid { display: grid; grid-template-columns: 1.35fr .75fr .75fr; gap: 20px; align-items: end; }
.video-embed { width: 100%; aspect-ratio: 16 / 9; background: @bodyBgColor; }
.video-embed iframe { width: 100%; height: 100%; display: block; border: 0; }
.media-image { width: 100%; aspect-ratio: 16 / 10; display: block; background: @bodyBgColor; object-fit: cover; }
.placeholder { position: relative; aspect-ratio: 16 / 10; display: grid; place-items: center; overflow: hidden; }
.trailer { background: @highlightColor; }
.trailer::before, .trailer::after { content: ''; position: absolute; width: 76%; aspect-ratio: 1; border: 2px solid fade(@contentBgColor, 24%); border-radius: 50%; }
.trailer::after { width: 42%; }
.play { z-index: 1; width: 68px; height: 68px; padding-left: 4px; display: grid; place-items: center; border-radius: 50%; background: @accentColor; color: white; }
.placeholder small { position: absolute; left: 16px; bottom: 12px; text-transform: uppercase; font-weight: 800; letter-spacing: .1em; font-size: .6rem; }
.still { background: @bodyBgColor; }
.behind { background: @accentColor; }
.placeholder b { color: fade(@textColor, 8%); font-size: 4.5rem; }
.behind b { color: fade(@contentBgColor, 15%); }
.media-card p { margin: 12px 0 0; font-weight: 700; font-size: .82rem; }
.media-card em { margin-left: 7px; color: fade(@textColor, 52%); font-style: normal; font-weight: 400; font-size: .72rem; }

.updates { padding: 100px ~"max(4vw, calc((100vw - 1200px) / 2))"; display: grid; grid-template-columns: 1fr .9fr; gap: 8vw; align-items: end; background: @highlightColor; color: white; }
.updates .kicker { color: white; }
.signup > label { display: block; margin-bottom: 16px; font-size: .98rem; font-weight: 600; }
.input-row { display: flex; }
.input-row input { width: 100%; min-width: 0; flex: 1; padding: 16px 4px; border: 0; border-bottom: 2px solid white; border-radius: 0; outline: 0; background: transparent; color: white; font: 700 .72rem 'Roboto', sans-serif; }
.input-row input::placeholder { color: fade(white, 75%); }
.input-row input:disabled { opacity: .7; }
.signup fieldset { margin: 24px 0; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 18px; border: 0; }
.signup legend { margin-bottom: 10px; text-transform: uppercase; letter-spacing: .09em; font-size: .64rem; font-weight: 800; }
.interest { display: flex; gap: 9px; align-items: center; font-size: .78rem; }
.interest input { width: 17px; height: 17px; margin: 0; accent-color: @accentColor; }
.signup-button { width: 100%; padding: 15px 18px; border: 0; background: @contentBgColor; color: white; text-transform: uppercase; font: 750 .68rem 'Roboto', sans-serif; letter-spacing: .06em; }
.signup-button { cursor: pointer; }
.signup-button:hover { background: @bodyBgColor; }
.honeypot { position: absolute !important; left: -9999px !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important; }
.consent-note { margin: 12px 0 0; font-size: .66rem; opacity: .76; }
.form-note { min-height: 1.4em; margin-bottom: 0; font-size: .68rem; opacity: .72; }
.form-note.success { opacity: 1; font-weight: 700; }
.form-note.error { opacity: 1; color: #fff; }

footer { min-height: 115px; color: fade(@textColor, 56%); font-size: .68rem; }

@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; }
  .hero-art { width: 88vw; max-width: 680px; justify-self: center; order: -1; }
  .hero-copy { width: 100%; }
  .hero-logo { margin-top: 24px; }
  .about { grid-template-columns: 1fr; }
  .status-card { max-width: 520px; }
  .media-grid { grid-template-columns: 1fr 1fr; }
  .feature { grid-column: span 2; }
  .updates { grid-template-columns: 1fr; }
}

@media (max-width: 620px) {
  nav a:not(.nav-cta) { display: none; }
  .hero-art { width: 104vw; margin-left: -8vw; }
  .hero-logo { width: 100%; margin-top: 20px; border-radius: 0; box-shadow: none; }
  .eyebrow { line-height: 1.35; }
  .hero-actions { flex-direction: column; align-items: flex-start; }
  .status-strip span:last-child, .status-strip i:last-of-type { display: none; }
  .section { padding: 90px 0; }
  .section-heading { display: block; }
  .section-heading .section-label { margin-bottom: 30px; }
  .media-grid { display: block; }
  .media-card { margin-bottom: 34px; }
  .signup fieldset { grid-template-columns: 1fr; }
  footer { padding: 34px 0; flex-direction: column; gap: 14px; text-align: center; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}
</style>

import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;
  
class PersonalProject extends LitElement {
  static properties = {
    header: { type: String },
    }

static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--personal-project-background-color);
    }
    .nat-qual header{
      font-size: 40px;
      color: green;
      border: 0 14 14 0 solid black;
    }

    .nat-qual textarea{
      background-color: lightblue;
      display: block;
      font-size: 20px;
    } 
    .nat-qual form{
      position: absolute;
      color: green;
      top: 62px;   
      right: 780px;
    }
  ;`

  constructor() {
    super();
    this.header = 'My app';
    
  }

  render() {
    return html`
      <main>
        <div class="nat-qual">
          <header class="header">Qualifting Total Calculator</header>
          <textarea class="unit">Unit</textarea>
          <textarea class="gender">Gender</textarea>
          <textarea class="weight-class">Weight Class</textarea>
          <textarea class="squat">Squat</textarea>
          <textarea class="bench">Bench</textarea>
          <textarea class="dead-lift">Dead Lift</textarea>
          <textarea class="total">Total</textarea>
          <textarea class="distance-from-total">Distance from Total</textarea>
        </div>

        <form id="unit-KGorLBS" action="/url" method="get">
          <label  for="Unit"> Please enter KG OR LBS:</label>
              <input type="text" name="username" minlength="1" maxlength="20" required>
          <button type="submit">Submit</button>  
        </form>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

customElements.define('personal-project', PersonalProject);
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
      width: 157px;
      height: 47px;
      font-family: sans-serif; 
    } 
    div.unit{
      position: absolute;
      color: green;
      top: 62px;   
      right: 100px;
      font-size: 15px;
      
    }
    div.gender{
      position: absolute;
      color: green;
      top: 115px;   
      right: 50px;
      font-size: 15px;
    }
    div.weight-class{
      position: absolute;
      color: green;
      top: 170px;   
      right: 60px;
      font-size: 15px;

    }
    div.squat{
      position: absolute;
      color: green;
      top: 220px;   
      right: 110px;
      font-size: 15px;
      
    }
    div.bench{
      position: absolute;
      color: green;
      top: 270px;   
      right: 110px;
      font-size: 15px;

    }
    div.deadlift{
      position: absolute;
      color: green;
      top: 320px;   
      right: 100px;
      font-size: 15px;

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
          <textarea class="dead-lift">Deadlift</textarea>
          <textarea class="total">Total</textarea>
          <textarea class="distance-from-total">Distance from Total</textarea>
        </div>

        <div class="unit">
          <form class="unit" action="/url" method="get">
            <label  for="Unit"> KG OR LBS:</label>
                <input type="text" name="username" minlength="1" maxlength="20" required>
            <button type="submit">Submit</button>  
          </form>
        </div>
        <div class="gender">
          <form class="Gender" action="/url" method="get">
            <label  for="Gender"> Male, Female, or RX</label>
                <input type="text" name="gender" minlength="1" maxlength="5" required>
            <button type="submit">Submit</button>  
          </form>
        </div>
        <div class="weight-class">
          <form class="weight-class" action="/url" method="get">
            <label  for="weight-class"> Weight Class is KG</label>
                <input type="text" name="weight-class" minlength="1" maxlength="5" required>
            <button type="submit">Submit</button>  
          </form>
        </div>
        <div class="squat">
          <form class="squat" action="/url" method="get">
            <label  for="squat"> Squat Total</label>
                <input type="text" name="squat" minlength="1" maxlength="5" required>
            <button type="submit">Submit</button>  
          </form>
        </div>
        <div class="bench">
          <form class="bench" action="/url" method="get">
            <label  for="bench"> Bench Total</label>
                <input type="text" name="bench" minlength="1" maxlength="5" required>
            <button type="submit">Submit</button>  
          </form>
        </div>
        <div class="deadlift">
          <form class="deadlift" action="/url" method="get">
            <label  for="deadlift"> Deadlift Total</label>
                <input type="text" name="deadlift" minlength="1" maxlength="5" required>
            <button type="submit">Submit</button>  
          </form>
        </div>
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
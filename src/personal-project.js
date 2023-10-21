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
      position: relative;
      display: block;
      font-size: 20px;
      width: 157px;
      height: 47px;
      font-family: sans-serif; 
    } 
    div.unit{
      position: absolute;
      color: green;
      left: 200px;
      top: 60px;   
      right: 200px;
      font-size: 15px;
      
    }
    div.gender{
      position: absolute;
      color: green;
      top: 115px;   
      right: 200px;
      left: 200px;
      font-size: 15px;
    }
    div.weight-class{
      position: absolute;
      color: green;
      top: 170px;   
      right: 200px;
      left: 200px;
      font-size: 15px;

    }
    div.squat{
      position: absolute;
      color: green;
      top: 220px;   
      right: 90px;
      left: 200px;
      font-size: 15px;
      
    }
    div.bench{
      position: absolute;
      color: green;
      top: 270px;   
      right: 90px;
      left: 200px;
      font-size: 15px;

    }
    div.dl{
      position: absolute;
      color: green;
      top: 320px;   
      right: 85px;
      left: 200px;
      font-size: 15px;
    }
    div.Total{
      position: absolute;
      color: green;
      top: 380px;   
      right: 20px;
      left: 200px;
      font-size: 15px;
    }
    div.total-needed{
      position: absolute;
      color: green;
      top: 430px;   
      right: 10px;
      left: 200px;
      font-size: 15px;
    }
    div.Dis-Total{
      position: absolute;
      color: green;
      top: 475px;   
      right: -220px;
      left: 150px;
      font-size: 15px;
    }
    
  ;`

  constructor() {
    super();
    this.header = 'My app'; 
    this.squatValue = 0;
    this.benchValue = 0;
    this.deadliftValue = 0;
    this.gender = "";
  }

  calculate() {
    const squat = parseInt(this.squatValue);
    const bench = parseInt(this.benchValue);
    const deadlift = parseInt(this.deadliftValue);

    if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift)) {
      const sum = squat+bench+deadlift;
      this.shadowRoot.querySelector('#display-total').value = sum;
    } else {
      alert('Please enter valid numbers for squat, bench, and deadlift.');
    }
  }

  disFromTot(){
    /*
    const squat = parseInt(this.querySelector('#squat').value);
    const bench = parseInt(this.querySelector('#bench').value);
    const deadlift = parseInt(this.querySelector('#dl').value);
    */
   /*
    const squat = parseInt(this.squatValue);
    const bench = parseInt(this.benchValue);
    const deadlift = parseInt(this.deadliftValue);
    const total = squat + bench + deadlift;
    const gender = parseFloat(this.gender);
    let totneeded = 0;
    /*
    if(this.querySelector('#gender').textContent==="Male"){
      totneeded = 485;
      const disfromtot = totneeded-total;
    
    if (gender === "male") {
      totneeded = 485;
      const disfromtot = totneeded - total;
      this.shadowRoot.querySelector('#Dis-total').value = disfromtot;
    }
    */
    const squat = parseInt(this.querySelector('#squat').value);
    const bench = parseInt(this.querySelector('#bench').value);
    const deadlift = parseInt(this.querySelector('#dl').value);
    const total = squat + bench + deadlift;
    const gender = this.querySelector('#gender').textContent.toLowerCase(); // Make it lowercase for case-insensitive comparison
    let totneeded = 0;

    if (gender === 'male') {
        totneeded = 485; // You might want to adjust this for different genders
        const disfromtot = totneeded - total;
        this.shadowRoot.querySelector('#dis-total').value = disfromtot;
    }
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
          <textarea class="total-needed">Total Needed</textarea>
          <textarea class="distance-from-total">Distance from Total</textarea>
        </div>

        <div class="unit" id="unit">
          <!--form class="unit" action="/url" method="get">
            <label  for="Unit"> KG OR LBS:</label>
                <input type="text" name="username" minlength="1" maxlength="20" required>
            <button type="submit">Submit</button>  
          </form -->
          <select>
            <option value="select">select</option>
            <option value="KG">KG</option>
            <option value="Lbs">LBS</option>
          </select>
        </div>
        <div class="gender" id="gender">
          <!--form class="Gender" action="/url" method="get">
            <label  for="Gender"> Male, Female, or RX</label>
                <input type="text" name="gender" minlength="1" maxlength="5" required>
            <button type="submit">Submit</button>  
          </form -->
          <select>
            <option value="select">select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="RX">RX</option>
          </select>
        </div>
        <div class="weight-class" id="weight-class">
          <!--form class="weight-class" action="/url" method="get">
            <label  for="weight-class"> Weight Class is KG</label>
                <input type="number" name="weight-class" minlength="1" maxlength="5" required>
            <button type="submit">Submit</button>  
          </form-->
          <select id="male">
            <option value="male">male</option>
            <option value="52">52</option>
            <option value="56">56</option>
            <option value="60">60</option>
            <option value="67.5">67.5</option>
            <option value="75">75</option>
            <option value="82.5">82.5</option>
            <option value="90">90</option>
            <option value="100">100</option>
            <option value="110">125</option>
            <option value="140">140</option>
            <option value="140+">140+</option>
          </select>
          <select id="female">
            <option value="female">female</option>
            <option value="44">44</option>
            <option value="48">48</option>
            <option value="52">52</option>
            <option value="56">56</option>
            <option value="60">60</option>
            <option value="67.5">67.5</option>
            <option value="75">75</option>
            <option value="82.5">82.5</option>
            <option value="90">90</option>
            <option value="100">100</option>
            <option value="100+">100+</option>
          </select>
        </div>
        <div class="squat">
          <label for="squat">Squat Total</label>
          <input type="number" name="squat" id="squat" minlength="1" maxlength="5" required @input="${(e) => (this.squatValue = e.target.value)}" >
        </div>
        <div class="bench">
          <label for="bench">Bench Total</label>
          <input type="number" name="bench" id="bench" minlength="1" maxlength="5" required @input="${(e) => (this.benchValue = e.target.value)}">
        </div>
        <div class="dl">
          <label for="dl">Deadlift Total</label>
          <input type="number" name="dl" id="dl" minlength="1" maxlength="5" required @input="${(e) => (this.deadliftValue = e.target.value)}">
        </div>
        <div class="Total">
          <label for="Total">Your total is </label>
          <input type="number" name="display-total" id="display-total">
          <button @click="${this.calculate}" type="button">Calculate</button>
        </div>
        <div class="total-needed">
          <label for="total-needed">Total Needed </label>
          <input type="number" name="total-needed" id="display-total">
          <button @click="${this.find}" type="button">Calculate</button>
        </div>
        <div class="Dis-Total">
          <label for="Dis-Total"> How far above or below the total you are </label>
          <input type="number" name="dis-total" id="Dis-total">
          <button @click="${this.disFromTot}" type="button">Calculate</button>
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
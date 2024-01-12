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
      color: white;
      border: 0 14 14 0 solid black;
      background-color: navy;
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
      color: black;
      left: 200px;
      top: 60px;   
      right: 200px;
      font-size: 15px;
      
    }
    div.gender{
      position: absolute;
      color: green;
      top: 115px;   
      right: 10px;
      left: 200px;
      font-size: 15px;
    }
    div.weight{
      position: absolute;
      color: green;
      top: 170px;   
      right: 110px;
      left: 300px;
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
    
    .nat-qual textarea{
      color: white;
      background-color: navy;
    }

    label{
      color: black;
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
    
    const squat = parseFloat(this.squatValue);
    const bench = parseFloat(this.benchValue);
    const deadlift = parseFloat(this.deadliftValue);
   
    const gender = this.gender;
    const weight = this.weight;

    if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "52") {
      const sum = squat+bench+deadlift;
      const disFromTot = 270 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    }
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "56") {
      const sum = squat+bench+deadlift;
      const disFromTot = 340- sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    }
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "60") {
      const sum = squat+bench+deadlift;
      const disFromTot = 375 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "67.5") {
      const sum = squat+bench+deadlift;
      const disFromTot = 485 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "75") {
      const sum = squat+bench+deadlift;
      const disFromTot = 565 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "82.5") {
      const sum = squat+bench+deadlift;
      const disFromTot = 610 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "90") {
      const sum = squat+bench+deadlift;
      const disFromTot = 635 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "100") {
      const sum = squat+bench+deadlift;
      const disFromTot = 650 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "110") {
      const sum = squat+bench+deadlift;
      const disFromTot = 655 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "125") {
      const sum = squat+bench+deadlift;
      const disFromTot = 660 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "140") {
      const sum = squat+bench+deadlift;
      const disFromTot = 665 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "140+") {
      const sum = squat+bench+deadlift;
      const disFromTot = 655 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "44") {
      const sum = squat+bench+deadlift;
      const disFromTot = 150 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    }
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "48") {
      const sum = squat+bench+deadlift;
      const disFromTot = 175- sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    }
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "52") {
      const sum = squat+bench+deadlift;
      const disFromTot = 210 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "56") {
      const sum = squat+bench+deadlift;
      const disFromTot = 240 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "60") {
      const sum = squat+bench+deadlift;
      const disFromTot = 270 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "67.5") {
      const sum = squat+bench+deadlift;
      const disFromTot = 295 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "75") {
      const sum = squat+bench+deadlift;
      const disFromTot = 325 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "82.5") {
      const sum = squat+bench+deadlift;
      const disFromTot = 335 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "90") {
      const sum = squat+bench+deadlift;
      const disFromTot = 345 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "100") {
      const sum = squat+bench+deadlift;
      const disFromTot = 350 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "100+") {
      const sum = squat+bench+deadlift;
      const disFromTot = 350 - sum;
      this.shadowRoot.querySelector('#Dis-total').value = disFromTot;
    }
    else {
      alert('Please enter valid numbers for squat, bench, and deadlift.');
    }
  }

  totalNeeded(){
    const squat = parseFloat(this.squatValue);
    const bench = parseFloat(this.benchValue);
    const deadlift = parseFloat(this.deadliftValue);
   
    const gender = this.gender;
    const weight = this.weight;

    if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "52") {
      const totNeeded = 270;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    }
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "56") {
      const totNeeded = 340;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    }
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "60") {

      const totNeeded = 375;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "67.5") {

      const totNeeded = 485;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "75") {

      const totNeeded = 565;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "82.5") {

      const totNeeded = 610;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "90") {

      const totNeeded = 635;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "100") {

      const totNeeded = 650;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "110") {

      const totNeeded = 655;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "125") {

      const totNeeded = 660;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "140") {

      const totNeeded = 665;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Male" && weight === "140+") {

      const totNeeded = 655;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "44") {

      const totNeeded = 150;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    }
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "48") {

      const totNeeded = 175;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    }
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "52") {

      const totNeeded = 210;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "56") {

      const totNeeded = 240;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "60") {

      const totNeeded = 270;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "67.5") {

      const totNeeded = 295;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "75") {

      const totNeeded = 325;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "82.5") {

      const totNeeded = 335;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "90") {
      const totNeeded = 345;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "100") {
      const totNeeded = 350;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    } 
    else if (!isNaN(squat) && !isNaN(bench) && !isNaN(deadlift) && gender === "Female" && weight === "100+") {
      const totNeeded = 350;
      this.shadowRoot.querySelector('#total-needed').value = totNeeded;
    }
    else {
      alert('Please enter valid numbers for squat, bench, and deadlift.');
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
          <select>
            <option value="select">select</option>
            <option value="KG">KG</option>
            <option value="Lbs">LBS</option>
          </select>
        </div>
        <div class="gender" id="gender">
          <label for="gender">Gender Male or Female</label>
          <input type="text" name="gender" id="gender" minlength="1" maxlength="6" required @input="${(e) => (this.gender = e.target.value)}" >
        
        </div>
        <div class="weight" id="weight">
          <label for="weight">Enter Weight Class</label>
          <input type="text" name="weight" id="weight" minlength="1" maxlength="5" step=".01" required @input="${(e) => (this.weight = e.target.value)}" >
        </div>
        <div class="squat">
          <label for="squat">Squat Total</label>
          <input type="number" name="squat" id="squat" minlength="1" maxlength="5" step=".01" required @input="${(e) => (this.squatValue = e.target.value)}" >
        </div>
        <div class="bench">
          <label for="bench">Bench Total</label>
          <input type="number" name="bench" id="bench" minlength="1" maxlength="5" step=".01" required @input="${(e) => (this.benchValue = e.target.value)}">
        </div>
        <div class="dl">
          <label for="dl">Deadlift Total</label>
          <input type="number" name="dl" id="dl" minlength="1" maxlength="5" step=".01" required @input="${(e) => (this.deadliftValue = e.target.value)}">
        </div>
        <div class="Total">
          <label for="Total">Your total is </label>
          <input type="number" name="display-total" id="display-total" step=".01">
          <button @click="${this.calculate}" type="button">Calculate</button>
        </div>
        <div class="total-needed">
          <label for="total-needed">Total Needed </label>
          <input type="number" name="total-needed" id="total-needed">
          <button @click="${this.totalNeeded}" type="button">Calculate</button>
        </div>
        <div class="Dis-Total">
          <label for="Dis-Total"> How far above or below the total you are </label>
          <input type="number" name="dis-total" id="Dis-total">
          <button @click="${this.disFromTot}" type="button">Calculate</button>
        </div>
      </main>

      <p class="app-footer" src="https://home-page-umber-six.vercel.app/">
        <button href="https://home-page-goonan24.vercel.app/">HOME</button>
      </p>
    `;
  }
}

customElements.define('personal-project', PersonalProject);
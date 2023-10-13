import { LitElement, html, css } from 'lit';

export class PersonalProject extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      active: {Type: Boolean, reflect: true}
    };
  }

static get styles() {
  return css`
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
    .header{
      font-size: 40px;
      color: green;
      border: 0 14 14 0 solid black;
    }


    textarea{
      background-color: blue;
    } 
  `;
}
  constructor() {
    super();
    this.header = 'Qualifting Total Calculator';
    
  }

  render() {
    return html`
      <script type="module"></script>
      
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

//customElements.define('personal-project', PersonalProject);
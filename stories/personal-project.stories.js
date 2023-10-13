import { html } from 'lit';
import '../src/personal-project.js';

export default {
  title: 'PersonalProject',
  component: 'personal-project',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <personal-project
      style="--personal-project-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </personal-project>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};

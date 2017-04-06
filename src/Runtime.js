import ReactDOM from 'react-dom';


export default (config) => {
  let currentState = config.state;
  let currentView = null;

  function messages(msg) {
    const stateAndEffect = config.update(msg, currentState);
    currentState = stateAndEffect[0];
    const effect = stateAndEffect[1];
    currentView = config.view(currentState, messages);
    renderView(currentView);
    config.execute(effect, messages);
  }

  function renderView(view) {
    ReactDOM.render(view, config.root);
  }

  // Render the initial state
  currentView = config.view(currentState, messages);
  renderView(currentView);
}

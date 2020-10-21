// grab all dom element objects and export them

const domElements = (() => {
  // name input and error span
  const name = document.getElementById('name');
  const nameError = document.querySelector(`#${name.id} + span.error`);

  return { name, nameError };
})();

export { domElements as default };

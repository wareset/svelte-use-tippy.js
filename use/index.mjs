import tippy from 'tippy.js';

function use(node, options = {}) {
  let Tippy;

  function destroy() {
    if (Tippy && Tippy.destroy) Tippy.destroy(), (Tippy = null);
  }

  function update(options = {}) {
    if (!options.content) options.content = '';
    if (!Tippy) Tippy = tippy(node, options);
    else Tippy.setProps(options);
    options.Tippy = Tippy;
  }

  update(options);
  return { update, destroy, Tippy }
}

export default use;

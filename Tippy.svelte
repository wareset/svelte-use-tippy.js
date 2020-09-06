<script>
  import { onMount } from 'svelte';
  import tippy from 'tippy.js';

  let tooltip;
  export let Tippy;

  export let target = 'prev'; // Element, next, prev(previous);
  export let props = {};

  let _content, _target, needUpdate;
  $: if (props) (_content = props.content), (needUpdate = true);

  function getButton(tooltip, target) {
    if (!tooltip || !target) return;

    if (typeof target !== 'string') _target = target;
    else {
      let sibling = target.toLowerCase();
      if (sibling === 'next') sibling = 'nextElementSibling';
      else if (sibling === 'parent') sibling = 'parentElement';
      else if (sibling === 'prev' || sibling === 'previous') {
        sibling = 'previousElementSibling';
      } else sibling = target;

      _target = tooltip[sibling];
    }
  }
  $: getButton(tooltip, target);

  function destroy() {
    Tippy && Tippy.destroy && Tippy.destroy(), (Tippy = null);
  }

  function createTooltip(tooltip, target) {
    destroy();
    if (!tooltip || !target) return;
    (Tippy = tippy(target, { ...props, content: tooltip })), (needUpdate = 0);
  }
  $: createTooltip(tooltip, _target);

  function updateTooltip(Tippy) {
    if (!Tippy || !needUpdate) return;
    Tippy.setProps({ ...props, content: tooltip }), (needUpdate = 0);
  }
  $: if (needUpdate) updateTooltip(Tippy);

  onMount(() => {
    return () => destroy();
  });
</script>

<div bind:this={tooltip}>
  <slot>
    {@html _content || ''}
  </slot>
</div>

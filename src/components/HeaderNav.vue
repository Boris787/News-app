<template>
  <header class="flex w-full item-center justify-center p-4">
    <div :class="`menu-toggle relateive z-50 ${menu_is_active ? 'is-active' : ''}`" @click="ToggleMenu">
      <div class="hamburger">
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore()

    const ToggleMenu = () => {
      store.dispatch('ToggleMenu')
    }

    return {
      menu_is_active: computed(() => store.state.menu_is_active),
      ToggleMenu
    }
  }
}
</script>
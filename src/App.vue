<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { label: "Home", to: "/home" },
        { label: "About", to: "/about" },
        { label: "Tutorials", to: "/tutorials" },
      ],
    };
  },
};
</script>

<template>
  <pv-toast></pv-toast>
  <header>
    <pv-toolbar>
      <template #start>
        <pv-button class="p-button-text" icon="pi pi-bars" @click="drawer=!drawer"></pv-button>
      </template>
      <template #end>
        <div class="flex-column">
          <router-link v-for="item in items" :to="item.to" custom v-slot="{ navigate, href }" :key="item.label">
            <pv-button class="p-button-text" :href="href" @click="navigate">{{ item.label }}</pv-button>
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>
  <pv-sidebar v-model:visible="drawer"></pv-sidebar>
  <RouterView />
</template>

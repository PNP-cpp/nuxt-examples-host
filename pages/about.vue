<script setup lang="ts">
const RemoteButton = defineAsyncComponent(() => import('remote_app/Button'));
</script>
<template>
  <div>About</div>
  <RemoteButton />
</template>

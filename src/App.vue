<template>
  <main>
    <RouterView />
  </main>
</template>

<script lang="ts" setup>
import { HubConnectionBuilder } from '@microsoft/signalr';

const connection = new HubConnectionBuilder()
  .withUrl('http://178.173.24.235:44312/signalr')
  .build();

connection.on('message', (message) => {
  console.log(message);
});

connection.start()
  .then(() => {
    console.log('Connected');
  })
  .catch((error) => {
    console.error(error);
  });

// fetch('http://178.173.24.235:44312/api/TokenAuth/Authenticate', {
//   method: 'POST',
//   body: JSON.stringify({
//     'userNameOrEmailAddress': 'admin',
//     'password': '123qwe',
//     'rememberClient': true
//   }),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// },).then((res) => {
//   console.log(res);
// }).catch((error) => {
//   console.error(error);
// });
</script>

<style>

</style>
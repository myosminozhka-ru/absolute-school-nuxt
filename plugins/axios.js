const setCookie = require('set-cookie-parser');

export default function ({ $axios, redirect, $nuxt }) {
    $axios.onResponse(response => {
        console.log(setCookie.parse(redirect));
    })
  }
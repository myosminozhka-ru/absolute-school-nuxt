const setCookie = require('set-cookie-parser');

export default function ({ $axios, redirect, app }) {
    $axios.onResponse(response => {
        console.log('PHPSESSID', app.$cookies.get('PHPSESSID'));
    })
  }
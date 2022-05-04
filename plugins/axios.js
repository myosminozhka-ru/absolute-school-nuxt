export default function ({ $axios, redirect }) {
    $axios.onResponse(response => {
        console.log(response);
    })
  }
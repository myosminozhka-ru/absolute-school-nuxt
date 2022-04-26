import SetCookieParser from 'set-cookie-parser'

export default function ({ $axios, $cookies }) {
  $axios.onResponse((response) => {
    SetCookieParser.parse(response).forEach((cookie) => {
      const { name, value, ...options } = cookie
      $cookies.set(name, value, options)
      console.log('onResponse', $cookies.get('PHPSESSID'))
    })
  })
}

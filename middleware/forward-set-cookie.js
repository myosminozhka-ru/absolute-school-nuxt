import SetCookieParser from 'set-cookie-parser'

export default function ({ $axios, $cookies }) {
  $axios.onResponse((response) => {
    // console.log('Ответ от сервера', response)
    const cookies = SetCookieParser.parse(response)
    // console.log('Куки', cookies)
    cookies.forEach((cookie) => {
      const { name, value, ...options } = cookie
      $cookies.set(name, value, options)
    })
  })
}

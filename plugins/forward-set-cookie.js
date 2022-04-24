import SetCookieParser from 'set-cookie-parser';

export default function ({
  $axios,
  $cookies,
}) {
  $axios.onResponse((response) => {
    const cookies = SetCookieParser.parse(response);
    console.log('cookies', cookies);
    cookies.forEach((cookie) => {
      const { name, value, ...options } = cookie;
      $cookies.set(name, value, options);
    });
  });
}
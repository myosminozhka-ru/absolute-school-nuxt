<template>
  <div
    class="auth-block__r-side"
    data-aos="slide-left"
    data-aos-delay="900"
    data-aos-duration="2000"
  >
    <div class="auth-block__in">
      <div class="auth-block__r-side--title">Авторизация</div>
      <form action="" class="auth-block__form" @submit.prevent="onLogin">
        <osm-input
          :value="login"
          text="Введите логин"
          @update:value="login = $event"
        ></osm-input>
        <osm-input
          :value="password"
          type="password"
          text="Введите пароль"
          @update:value="password = $event"
        ></osm-input>
        <osm-button class-name="button--back" type="submit">
          <svg
            width="311"
            height="100"
            viewBox="0 0 311 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75954 4.17817C6.75954 1.90067 8.65841 0.0827765 10.9337 0.181965L245.5 10.4073C245.837 10.422 246.174 10.394 246.504 10.324L290.338 1.02472C292.826 0.496915 295.168 2.3944 295.168 4.93763V46.6252C295.168 47.0322 295.23 47.4368 295.352 47.8251L309.874 94.0059C310.753 96.7983 308.432 99.5571 305.531 99.1709L201.496 85.3224C201.265 85.2916 201.031 85.2811 200.798 85.291L4.82166 93.6591C2.31728 93.7661 0.332776 91.5696 0.692418 89.0889L6.71816 47.5247C6.74571 47.3347 6.75954 47.1429 6.75954 46.9508V4.17817Z"
              fill="#E49535"
            />
          </svg>
          <span>Вход</span>
        </osm-button>
      </form>
      <div class="auth-block__warning">
        Если у вас нет логина и пароля, обратитесь к своему педагогу.
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'OsmAuthBlockRSide',
  components: {
    OsmButton: () => import('~/components/global/OsmButton.vue'),
    OsmInput: () => import('~/components/forms/OsmInput.vue'),
  },
  data: () => ({
    login: '',
    password: '',
    isLoading: false,
  }),
  methods: {
    ...mapActions('localStorage', [
      'signIn',
      'setAuthorization',
      'updateAuthData',
    ]),
    onLogin() {
      this.isLoading = true
      this.signIn({
        login: this.login,
        password: this.password,
      })
        .then((response) => {
          this.isLoading = false
          if (response.status === 'error') {
            this.$toast.error(response.message)
          } else {
            console.log('response', response)
            this.setAuthorization(true)
            this.updateAuthData({
              login: this.login,
              password: this.password,
              user: response.user
            })
            this.$router.push({ name: 'index' })
            this.$toast.success('Добро пожаловать')
          }
        })
        .catch((error) => {
          this.isLoading = false
          this.$toast.error(error)
        })
    },
  },
}
</script>

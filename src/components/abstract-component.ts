import { Vue } from 'vue-class-component';

export default class AbstractComponent extends Vue {
  showNotifyError (msg: string) :void {
    this.$q.notify({
      progress: true,
      message: msg,
      type: 'negative',
      group: false,
      timeout: msg && msg.length > 50 ? 10000 : 7000,
    })
  }

  showNotifySuccess (msg: string) {
    this.$q.notify({
      progress: true,
      message: msg,
      type: 'info',
      color: 'green',
      timeout: 10000,
      icon: 'check'
    })
  }

  showNotifyErrorCustom (msg: string) {
    this.$q.notify({
      progress: true,
      message: msg ? msg : 'Ocorreu um erro inesperado.. por favor, tente novamente.',
      type: 'info',
      color: 'negative',
      timeout: msg && msg.length > 50 ? 10000 : 7000,
      icon: 'warning'
    })
  }

  showLoading () {
    this.$q.loading.show({
      spinnerColor: 'secondary'
    })
  }

  hideLoading () {
    this.$q.loading.hide()
  }

  redirect () {
    window.location.href = `${process.env.BASE_WEBBANK as string}/`;
  }

  redirectRoute (route: string) {
    void this.$router.push(route)
  }
}
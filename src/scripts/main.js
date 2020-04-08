var app = new Vue({
  el: '#app',
  data: {
    width: 10,
    height: 10,
    borderRadius: 0,
    trackBg: '#766e63',
    thumbBg: '#ffc31f',
    showCorner: true,
    cornerBg: '#ff0000',
    modalVisible: false,
  },
  watch: {
    width() {
      document.documentElement.style.setProperty('--scrollbar-width', `${this.width}px`);
    },
    height() {
      document.documentElement.style.setProperty('--scrollbar-height', `${this.height}px`);
    },
    borderRadius() {
      document.documentElement.style.setProperty('--thumb-border-radius', `${this.borderRadius}px`);
    },
    showCorner() {
      document.documentElement.style.setProperty('--corner-visibility', this.cornerVisibility);
    },
    trackBg() {
      document.documentElement.style.setProperty('--track-bg', this.trackBg);
    },
    thumbBg() {
      document.documentElement.style.setProperty('--thumb-bg', this.thumbBg);
    },
    cornerBg() {
      document.documentElement.style.setProperty('--corner-bg', this.cornerBg);
    }
  },
  computed: {
    cornerVisibility() {
      return this.showCorner ? 'visible' : 'hidden'
    }
  },
  methods: {
    onChangeColor(element, event) {
      document.documentElement.style.setProperty(`--${element}-bg`, event.currentTarget.value);
    },
    toggleModal() {
      this.modalVisible = !this.modalVisible;
    }
  }
});

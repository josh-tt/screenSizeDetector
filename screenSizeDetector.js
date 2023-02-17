// Screensize detector using Alpine.js and Alpine Toolkit $screen
export default () => ({
  screenSize: '',
  breakpoints: {
    '2xl': 1536,
    xl: 1280,
    lg: 1024,
    md: 768,
    sm: 640,
    xs: 0,
  },
  get currentScreenSize() {
    for (const breakpoint in this.breakpoints) {
      if (this.$screen(breakpoint)) {
        this.screenSize = breakpoint;
        break;
      }
    }
    console.log(`Screen size changed to ${this.screenSize}, ${this.$screen(this.screenSize)}`);
    return this.screenSize;
  },
  init() {
    this.currentScreenSize;
  },
})


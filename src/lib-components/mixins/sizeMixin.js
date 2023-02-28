export default {
  data: () => ({
    sizeType: '',
    xxlBreakpoint: 1536,
    xlBreakpoint: 1280,
    lBreakpoint: 1024,
    mBreakpoint: 768,
    smBreakpoint: 640,
    windowWidth: undefined,
    windowHeight: undefined,
    orientation: '',
  }),
  mounted () {
    window.addEventListener('resize', this.resizeHandler);
    this.resizeHandler();
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeHandler);
  },
  computed: {
    isMobile () {
      return ['sm', 'xsm'].includes(this.sizeType);
    },
    isTablet () {
      return this.sizeType === 'm';
    },
    isDesktop () {
      return ['xxl', 'xl', 'l'].includes(this.sizeType);
    }
  },
  methods: {
    resizeHandler () {
      const { innerWidth, innerHeight } = window;
      this.windowWidth = innerWidth;
      this.windowHeight = innerHeight;
      this.orientation = window.screen.orientation.type.split('-')[0];
      const xxlResult = innerWidth >= this.xxlBreakpoint;
      const xlResult = this.inRange(this.xlBreakpoint, this.xxlBreakpoint, innerWidth);
      const lResult = this.inRange(this.lBreakpoint, this.xlBreakpoint, innerWidth);
      const mResult = this.inRange(this.mBreakpoint, this.lBreakpoint, innerWidth);
      const smResult = this.inRange(this.smBreakpoint, this.mBreakpoint, innerWidth);
      const xsmResult = innerWidth < this.smBreakpoint;
      if (xxlResult) {
        this.sizeType = 'xxl';
      } else if (xlResult) {
        this.sizeType = 'xl';
      } else if (lResult) {
        this.sizeType = 'l';
      } else if (mResult) {
        this.sizeType = 'm';
      } else if (smResult) {
        this.sizeType = 'sm';
      } else if (xsmResult) {
        this.sizeType = 'xsm';
      }
    },
    inRange(minValue, maxValue, value) {
      return minValue <= value && value < maxValue;
    }
  }
}
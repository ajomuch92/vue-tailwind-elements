export default {
  data: () => ({
    currentWidth: 0,
    resizeObserver: null
  }),
  mounted() {
    this.setResizeObserver();
  },
  beforeDestroy() {
    this.resizeObserver.unobserve(document.body);
  },
  computed: {
    windowSizeType() {
      if (this.currentWidth < 768) {
        return 'sm';
      } else if (this.currentWidth < 1280) {
        return 'md';
      }
      return 'lg';
    }
  },
  methods: {
    setResizeObserver() {
      this.resizeObserver = new ResizeObserver(entries => {
        const body = entries[0];
        this.currentWidth = body.contentBoxSize[0].inlineSize;
      });
      this.resizeObserver.observe(document.body);
    },
  }
}
export default {
  methods: {
    onBlurHandler(event) {
      this.$emit('blur', event);
    },
    onChangeHandler(event) {
      this.$emit('change', event);
    },
    onFocusHandler(event) {
      this.$emit('focus', event);
    },
    onKeyDownHandler(event) {
      this.$emit('keydown', event);
    },
    onKeyPressHandler(event) {
      this.$emit('keypress', event);
    },
    onKeyUpHandler(event) {
      this.$emit('keyup', event);
    },
    onClickHandler(event) {
      this.$emit('click', event);
    }
  }
};

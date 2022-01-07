<template>
  <input class="form-control
    block
    w-full
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    :class="sizeClass"
    type="file"
    :disabled="disabled"
    :accept="accept"
    :multiple="multiple"
    @change="fileChange"
  >
</template>

<script>
export default {
  name: 'teFile',
  props: {
    value: {
      type: [String, Array],
      default: ''
    },
    accept: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium','large'].includes(value)
    },
  },
  computed: {
    sizeClass() {
      return {
        'px-2 py-1 text-sm': this.size === 'small',
        'px-3 py-1.5 text-base': this.size === 'medium',
        'px-2 py-1.5 text-xl': this.size === 'large',
      }
    }
  },
  methods: {
    async fileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if(files.length) {
        const filesConverted = [];
        for(const file of files) {
          const base64 = await this.getBase64(file);
          filesConverted.push(base64);
        }
        if(filesConverted.length === 1) {
          this.$emit('input', filesConverted[0]);
        } else if (filesConverted.length > 1) {
          this.$emit('input', filesConverted);

        }
      }
    },
    getBase64(file) {
      return new Promise ((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      })
    }
  }
}
</script>

<style>

</style>
<template>
  <input class="form-control file-control"
    :class="[size]"
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
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
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
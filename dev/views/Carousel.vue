<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Carousel</h1>
    <h1 class="text-lg">Example</h1>
    <te-carousel :fade="fade" :loop="loop" :interval="interval">
      <te-carousel-item v-for="(image, key) in images2" :key="key" :img-url="image" :title="`Slide ${key+1}`">
        <p class="text-base bg-red-200 p-3">
          This is Slot
        </p>
      </te-carousel-item>
    </te-carousel>
    <div class="flex items-center mt-2">
      <te-checkbox v-model="fade" class="mx-2">Fade</te-checkbox>
      <te-checkbox v-model="loop" class="mx-2">Loop</te-checkbox>
      <label class="mr-1">Interval:</label>
      <te-input placeholder="Interval" v-model.number="interval"></te-input>
    </div>
    <code-view :code="code[0]" />
    <p>
      <b>Note:</b> Use images with same size to avoid wrong behavior.
    </p>
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue'
export default {
  components: { CodeView },
  name: 'CarouselEx',
  data: () => ({
    loop: false,
    interval: 1500,
    fade: false,
    images2: [
      'https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg',
      'https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg',
      'https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
    ],
    code: [
      `
      <te-carousel :fade="fade" :loop="loop" :interval="interval">
        <te-carousel-item v-for="(image, key) in images2" :key="key" :img-url="image" :title="...">
          <p class="text-base bg-red-200 p-3">
            This is Slot
          </p>
        </te-carousel-item>
      </te-carousel>
      `
    ]
  })
}
</script>

<style>

</style>
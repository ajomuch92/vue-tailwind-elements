<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Timeline</h1>
    <h1 class="text-lg my-1">Normal</h1>
    <te-timeline :inverted="inverted" :horizontal="horizontal">
      <te-timeline-item title="Title section 1" subtitle="Subtitle 1">
        <template v-if="withIcon" #icon>
          <te-icon class="text-xs" name="calendar" />
        </template>
        <template v-if="withSlots" #title>
          <span class="bg-red-500 text-white">
            Custom title with slot
          </span>
        </template>
        <template v-if="withSlots" #subtitle>
          <span class="bg-blue-500 text-white">
            Subtible
          </span>
        </template>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        scelerisque diam non nisi semper, et elementum lorem ornare.
        Maecenas placerat facilisis mollis. Duis sagittis ligula in
        sodales vehicula.
      </te-timeline-item>
      <te-timeline-item title="Title section 2" subtitle="Subtitle 2">
        <template v-if="withIcon" #icon>
          <te-icon class="text-xs" name="check-all" />
        </template>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        scelerisque diam non nisi semper, et elementum lorem ornare.
        Maecenas placerat facilisis mollis. Duis sagittis ligula in
        sodales vehicula.
      </te-timeline-item>
      <te-timeline-item title="Title section 3" subtitle="Subtitle 3">
        <template v-if="withIcon" #icon>
          <te-icon class="text-xs" name="send" />
        </template>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        scelerisque diam non nisi semper, et elementum lorem ornare.
        Maecenas placerat facilisis mollis. Duis sagittis ligula in
        sodales vehicula.
      </te-timeline-item>
    </te-timeline> 
    <div class="flex">
      <te-checkbox class="mx-2" v-model="horizontal">Horizontal</te-checkbox>
      <te-checkbox class="mx-2" v-model="inverted">Inverted</te-checkbox>
      <te-checkbox class="mx-2" v-model="withIcon">Icon</te-checkbox>
      <te-checkbox class="mx-2" v-model="withSlots">Slots</te-checkbox>
    </div>
    <code-view :code="code[0]" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';

export default {
  name: 'Toast',
  components: { CodeView },
  data: () => ({
    colors: ['normal','primary', 'success', 'warning', 'danger'],
    horizontal: false,
    inverted: false,
    colorClass: 'border-neutral-300 dark:border-neutral-500',
    withIcon: false,
    withSlots: false,
    code: [
      `
      <te-timeline :inverted="inverted" :horizontal="horizontal">
        <te-timeline-item title="Title section 1" subtitle="Subtitle 1">
          <template #icon>
            <te-icon class="text-xs" name="calendar" />
          </template>
          <template #title>
            <span class="bg-red-500 text-white">
              Custom title with slot
            </span>
          </template>
          <template #subtitle>
            <span class="bg-blue-500 text-white">
              Subtible
            </span>
          </template>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          scelerisque diam non nisi semper, et elementum lorem ornare.
          Maecenas placerat facilisis mollis. Duis sagittis ligula in
          sodales vehicula.
        </te-timeline-item>
        ....
      </te-timeline> 
      `,
    ]
  }),
}
</script>

<style>

</style>
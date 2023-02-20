<template>
  <div class="p-6 flex flex-col">
    <h1 class="text-3xl my-2">Scroll to Top Button</h1>
    <te-checkbox v-model="withIcon">Custom icon</te-checkbox>
    <p v-for="(p, key) in lorem" class="my-10 text-justify text-xl px-5" :key="key">{{ p }}</p>
    <te-scroll-to-top parent="#main">
      <te-icon v-if="withIcon" class="text-2xl" name="chevron-double-up" slot="icon"/>
    </te-scroll-to-top>
    <h1 class="text-lg">Example</h1>
    <p>Just put this code wherever you need it. <pre class="inline">trigger</pre> prop could be the id of any HTML element, if this is blank, is going to listen for document scroll event.</p>
    <code-view :code="code" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';

export default {
  name: 'ScrollToTop',
  components: { CodeView },
  data: () => ({
    withIcon: false,
    lorem: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies. Urna nec tincidunt praesent semper feugiat. Ultricies tristique nulla aliquet enim tortor at auctor urna. Auctor urna nunc id cursus metus aliquam. Facilisi cras fermentum odio eu feugiat pretium. Arcu risus quis varius quam quisque id diam. Accumsan tortor posuere ac ut consequat semper. Cursus euismod quis viverra nibh cras pulvinar.',
      'Felis eget velit aliquet sagittis id. Neque viverra justo nec ultrices dui. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Ultrices in iaculis nunc sed augue lacus. Aliquet enim tortor at auctor urna. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Vitae semper quis lectus nulla at volutpat diam. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Sed enim ut sem viverra aliquet eget. Eu mi bibendum neque egestas congue quisque egestas diam. Arcu risus quis varius quam quisque id. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Justo nec ultrices dui sapien. Proin sagittis nisl rhoncus mattis rhoncus urna neque.',
      'Nunc faucibus a pellentesque sit. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Sed arcu non odio euismod lacinia at quis risus. Orci nulla pellentesque dignissim enim sit. Nam libero justo laoreet sit amet cursus. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Aliquam faucibus purus in massa tempor nec. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. In egestas erat imperdiet sed euismod nisi porta. Maecenas pharetra convallis posuere morbi leo urna molestie at. Sit amet tellus cras adipiscing enim.',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Duis convallis convallis tellus id interdum velit laoreet id donec. Ullamcorper eget nulla facilisi etiam dignissim diam. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Id semper risus in hendrerit gravida. Elementum nibh tellus molestie nunc non blandit massa enim nec. Vulputate mi sit amet mauris commodo quis. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Malesuada proin libero nunc consequat interdum varius. Nisi vitae suscipit tellus mauris a diam. Nunc scelerisque viverra mauris in aliquam sem. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Tortor id aliquet lectus proin nibh nisl condimentum.',
      'Laoreet suspendisse interdum consectetur libero id. Sodales ut eu sem integer vitae. Tempus egestas sed sed risus pretium quam. Ultrices sagittis orci a scelerisque purus semper. Lorem dolor sed viverra ipsum nunc. Dui nunc mattis enim ut tellus. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Sit amet venenatis urna cursus eget. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Ac turpis egestas integer eget aliquet. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Senectus et netus et malesuada fames ac turpis. Diam maecenas sed enim ut sem. Enim nec dui nunc mattis enim ut. Est pellentesque elit ullamcorper dignissim cras. Pellentesque id nibh tortor id aliquet. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Diam maecenas ultricies mi eget mauris pharetra. Tortor pretium viverra suspendisse potenti nullam ac. Eu augue ut lectus arcu bibendum.',
      'Nisi vitae suscipit tellus mauris a diam maecenas. Imperdiet dui accumsan sit amet nulla facilisi. Mi proin sed libero enim. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Convallis tellus id interdum velit laoreet. Ut lectus arcu bibendum at. Sodales ut etiam sit amet nisl purus in. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Interdum posuere lorem ipsum dolor sit amet. Massa tincidunt dui ut ornare lectus sit. Ac turpis egestas integer eget aliquet nibh praesent tristique. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Tempor commodo ullamcorper a lacus vestibulum sed arcu.'
    ],
    code: `
    <te-scroll-to-top trigger="..." >
      <te-icon v-if="withIcon" class="text-2xl" name="..." slot="icon"/>
    </te-scroll-to-top>`
  })
}
</script>

<style>

</style>
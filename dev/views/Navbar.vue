<template>
  <div class="p-6">
    <h1 class="text-3xl my-2">Navbar</h1>
    <h1 class="text-lg my-1">Normal</h1>
    <te-navbar href-brand="#">
      <template slot="brand">
        <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" style="height: 15px" alt="" loading="lazy" />
      </template>
      <te-navbar-item>Dashboard</te-navbar-item>
      <te-navbar-item>Team</te-navbar-item>
      <te-navbar-item>Projects</te-navbar-item>
      <te-navbar-item disabled>Disabled</te-navbar-item>
      <template slot="right">
        <a class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4" href="#">
          <svg aria-hidden="true" focusable="false" data-prefix="fas"
            class="w-4" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512">
            <path fill="currentColor"
              d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
            </path>
          </svg>
        </a>
      </template>
    </te-navbar>
    <code-view :code="code[0]" />
    <h1 class="text-lg my-1">Dark</h1>
    <te-navbar href-brand="#" dark>
      <template slot="brand">
        <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" style="height: 15px" alt="" loading="lazy" />
      </template>
      <te-navbar-item dark>Dashboard</te-navbar-item>
      <te-navbar-item dark>Team</te-navbar-item>
      <te-navbar-item dark>Projects</te-navbar-item>
      <template slot="right">
        <a class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4" href="#">
          <svg aria-hidden="true" focusable="false" data-prefix="fas"
            class="w-4" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512">
            <path fill="currentColor"
              d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
            </path>
          </svg>
        </a>
      </template>
    </te-navbar>
    <code-view :code="code[1]" />
    <h1 class="text-lg my-1">Listening for Responsiveness button event</h1>
    <h1 class="text-sm my-1">Make screen smaller</h1>
    <te-navbar href-brand="#" @toggle-click="myMethod">
      <template slot="brand">
        <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" style="height: 15px" alt="" loading="lazy" />
      </template>
      <te-navbar-item>Dashboard</te-navbar-item>
      <te-navbar-item>Team</te-navbar-item>
      <te-navbar-item>Projects</te-navbar-item>
      <template slot="right">
        <a class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4" href="#">
          <svg aria-hidden="true" focusable="false" data-prefix="fas"
            class="w-4" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512">
            <path fill="currentColor"
              d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
            </path>
          </svg>
        </a>
      </template>
    </te-navbar>
    <code-view :code="code[2]" />
  </div>
</template>

<script>
import CodeView from '../components/CodeView.vue';
export default {
  components: { CodeView },
  name: 'Navbar',
  data: () => ({
    code: [
      `
      <te-navbar href-brand="#">
        <template slot="brand">
          <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" style="height: 15px" alt="" loading="lazy" />
        </template>
        <te-navbar-item >Dashboard</te-navbar-item>
        <te-navbar-item>Team</te-navbar-item>
        <te-navbar-item>Projects</te-navbar-item>
        <te-navbar-item disabled>Disabled</te-navbar-item>
        <template slot="right">
          <a class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4" href="#">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart"
              class="w-4" role="img" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512">
              <path fill="currentColor"
                d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
              </path>
            </svg>
          </a>
        </template>
      </te-navbar>
      `,
      `
      <te-navbar href-brand="#" dark>
        <template slot="brand">
          <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" style="height: 15px" alt="" loading="lazy" />
        </template>
        <te-navbar-item dark>Dashboard</te-navbar-item>
        <te-navbar-item dark>Team</te-navbar-item>
        <te-navbar-item dark>Projects</te-navbar-item>
        <template slot="right">
          <a class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4" href="#">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart"
              class="w-4" role="img" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512">
              <path fill="currentColor"
                d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
              </path>
            </svg>
          </a>
        </template>
      </te-navbar>
      `,
      `
      <te-navbar href-brand="#" @toggle-click="myMethod">
        <template slot="brand">
          <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" style="height: 15px" alt="" loading="lazy" />
        </template>
        <te-navbar-item>Dashboard</te-navbar-item>
        <te-navbar-item>Team</te-navbar-item>
        <te-navbar-item>Projects</te-navbar-item>
        <template slot="right">
          <a class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4" href="#">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart"
              class="w-4" role="img" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512">
              <path fill="currentColor"
                d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
              </path>
            </svg>
          </a>
        </template>
      </te-navbar>
      `,
    ]
  }),
  methods: {
    myMethod() {
      alert('click');
    }
  }
}
</script>

<style>

</style>
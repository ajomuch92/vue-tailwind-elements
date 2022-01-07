<template>
  <div class="container p-6">
    <h1 class="text-3xl my-2">Notifications</h1>
    <h1 class="text-lg my-1">Normal</h1>
    <te-notification text="1+">
      <te-button outlined>Button</te-button>
    </te-notification>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-notification text="1+">
            <te-button outlined>Button</te-button>
          </te-notification>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Positions</h1>
    <te-notification position="top-left" text="1">
      <te-button outlined>Button</te-button>
    </te-notification>
    <te-notification position="top-right" text="3">
      <te-button outlined>Button</te-button>
    </te-notification>
    <te-notification position="bottom-left" text="7">
      <te-button outlined>Button</te-button>
    </te-notification>
    <te-notification position="bottom-right" text="9">
      <te-button outlined>Button</te-button>
    </te-notification>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-notification position="top-left" text="1">
            <te-button outlined>Button</te-button>
          </te-notification>
          <te-notification position="top-right" text="3">
            <te-button outlined>Button</te-button>
          </te-notification>
          <te-notification position="bottom-left" text="7">
            <te-button outlined>Button</te-button>
          </te-notification>
          <te-notification position="bottom-right" text="9">
            <te-button outlined>Button</te-button>
          </te-notification>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Colors</h1>
    <te-notification text="1+" color="normal">
      <te-button outlined>Button</te-button>
    </te-notification>
    <te-notification text="1+" color="primary">
      <te-button outlined>Button</te-button>
    </te-notification>
    <te-notification text="1+" color="secondary">
      <te-button outlined>Button</te-button>
    </te-notification>
    <te-notification text="1+" color="success">
      <te-button outlined>Button</te-button>
    </te-notification>
    <te-notification text="1+" color="warning">
      <te-button outlined>Button</te-button>
    </te-notification>
    <te-notification text="1+" color="danger">
      <te-button outlined>Button</te-button>
    </te-notification>
    <te-notification text="1+" color="pink">
      <te-button outlined>Button</te-button>
    </te-notification>
    <te-notification text="1+" color="purple">
      <te-button outlined>Button</te-button>
    </te-notification>
    <te-notification text="1+" color="light">
      <te-button outlined>Button</te-button>
    </te-notification>
    <te-notification text="1+" color="dark">
      <te-button outlined>Button</te-button>
    </te-notification>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-notification text="1+" color="normal">
            <te-button outlined>Button</te-button>
          </te-notification>
          <te-notification text="1+" color="primary">
            <te-button outlined>Button</te-button>
          </te-notification>
          <te-notification text="1+" color="secondary">
            <te-button outlined>Button</te-button>
          </te-notification>
          <te-notification text="1+" color="success">
            <te-button outlined>Button</te-button>
          </te-notification>
          <te-notification text="1+" color="warning">
            <te-button outlined>Button</te-button>
          </te-notification>
          <te-notification text="1+" color="danger">
            <te-button outlined>Button</te-button>
          </te-notification>
          <te-notification text="1+" color="pink">
            <te-button outlined>Button</te-button>
          </te-notification>
          <te-notification text="1+" color="purple">
            <te-button outlined>Button</te-button>
          </te-notification>
          <te-notification text="1+" color="light">
            <te-button outlined>Button</te-button>
          </te-notification>
          <te-notification text="1+" color="dark">
            <te-button outlined>Button</te-button>
          </te-notification>
        </script>
      </code>
    </pre>
    <h1 class="text-lg my-1">Hide</h1>
    <te-switch label="Hide" v-model="hide" />
    <te-notification text="1+" color="dark" :hide="hide">
      <te-button outlined>Button</te-button>
    </te-notification>
    <pre class="language-markup">
      <code>
        <script type="prism-html-markup">
          <te-notification text="1+" color="dark" :hide="hide">
            <te-button outlined>Button</te-button>
          </te-notification>
        </script>
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  data: () => ({
    hide: false,
  })
}
</script>

<style>

</style>
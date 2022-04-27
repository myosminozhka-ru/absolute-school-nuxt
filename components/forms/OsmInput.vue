<template>
  <div class="input" :class="className">
    <input
      :type="type"
      :placeholder="text"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'OsmButton',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: 'input--orange',
    },
  },
}
</script>

<style lang="scss">
.input {
  position: relative;
  max-width: 370px;
  width: 100%;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    border-radius: 5px 19% 19% 14%;
    right: 0;
    background: #6a8626;
    bottom: vw(-9);
    width: 100%;
    height: 100%;
    z-index: -1;
    -webkit-clip-path: polygon(0% 0%, 100% 15%, 100% 86%, 1% 94%);
    clip-path: polygon(0% 0%, 100% 15%, 100% 86%, 1% 94%);
  }
  input {
    outline: none;
    background: #fdf5da;
    border-radius: 5px 19% 19% 14%;
    text-align: center;
    width: 100%;
    padding: vw(30) vw(10);
    border: 0;
    position: relative;
    z-index: 1;
    color: #424242;
    font-family: 'Gilroy', serif;
    font-style: normal;
    font-weight: 600;
    font-size: vw(20);
    line-height: 160%;
    -webkit-clip-path: polygon(0% 0%, 100% 15%, 100% 86%, 1% 94%);
    clip-path: polygon(0% 0%, 100% 15%, 100% 86%, 1% 94%);
    &::placeholder {
      font-family: 'Gilroy', serif;
      font-style: normal;
      font-weight: 600;
      font-size: vw(20);
      line-height: 160%;
      color: #919191;
    }
    &:hover,
    &:active,
    &:focus {
      &::placeholder {
        color: #424242;
      }
    }
  }
  &--has-error {
    input {
      color: #fb1e42;
      &::placeholder {
        color: #fb1e42;
      }
    }
    &:before {
      top: -3px;
      left: -2px;
      right: -2px;
      bottom: -9px;
      background: #fb1e42;
      width: calc(100% + 4px);
      height: calc(100% + 12px);
    }
  }
  &--white {
    input {
      background: #fff;
    }
    &.input--has-error {
      input {
        background: rgba(255, 255, 255, 0.9);
      }
    }
  }
}
@media all and (max-width: 1023px) {
  .input {
    input {
      padding: 14.5px 10px;
      font-size: 14px;
      &::placeholder {
        font-size: 14px;
      }
    }
    &:before {
      bottom: -9px;
    }
  }
}
</style>

<template>
  <div v-if="type === 'price'" class="price_all">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.71528 17.4408H33.1475V20.0002H5.71528V17.4408Z"
        fill="#E49535"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.8302 40H39.9999V38.0264C39.5439 38.0079 38.9784 37.9152 38.3036 37.7484C37.6287 37.5631 37.0815 37.3407 36.662 37.0813C36.0418 36.6551 35.5585 36.2196 35.2119 35.7748C34.8654 35.3301 34.5553 34.7464 34.2817 34.0236L31.3713 26.3718H33.1475V23.8125H30.3978L21.3405 0H19.1517C17.3095 4.81816 15.2119 10.3127 12.859 16.4837C11.8878 19.0308 10.9508 21.4737 10.0479 23.8125H5.71528V26.3718H9.05744C8.1345 28.7504 7.24937 31.0138 6.40207 33.1619C6.01903 34.1256 5.62687 34.8853 5.2256 35.4413C4.82432 35.9787 4.25888 36.4976 3.52929 36.9979C3.07329 37.2944 2.48962 37.5353 1.77826 37.7206C1.06691 37.8874 0.474114 37.9893 -0.00012207 38.0264V40H14.61V38.0264C13.1691 37.9523 11.874 37.7114 10.7249 37.3037C9.5758 36.896 9.00125 36.3215 9.00125 35.5803C9.00125 35.2652 9.04685 34.8575 9.13805 34.3572C9.22924 33.8568 9.3934 33.2082 9.63052 32.4114C9.88588 31.596 10.1686 30.7065 10.4787 29.7429C10.8053 28.7842 11.2222 27.6606 11.7293 26.3718H25.3424L28.5635 35.1911C28.6364 35.3764 28.6912 35.5895 28.7276 35.8304C28.7641 36.0713 28.7824 36.2752 28.7824 36.442C28.7824 36.8497 28.3081 37.1925 27.3597 37.4705C26.4294 37.7484 25.253 37.9338 23.8302 38.0264V40ZM24.325 23.8125H12.7194L18.4677 8.5893L24.325 23.8125ZM25.335 26.3516H11.7372L12.6948 23.8777H24.3501L25.335 26.3516Z"
        fill="#E49535"
      />
      <path
        d="M11.7372 26.3516H25.335L24.3501 23.8777H12.6948L11.7372 26.3516Z"
        fill="#E49535"
      />
    </svg>
    <span>
      <slot>0</slot>
    </span>
  </div>
  <output v-else class="product_amount"><slot>0</slot></output>
</template>

<script>
export default {
  name: 'OsmPrice',
  props: {
    type: {
      type: String,
      default: 'price',
    },
  },
}
</script>

<style lang="scss">
.price_all {
  svg {
    width: vw(40);
  }
  font-family: 'Jingleberry', serif;
  font-style: normal;
  font-weight: 900;
  font-size: vw(120);
  line-height: 120%;
  color: #424242;
  @media all and (max-width: 1023px) {
    .price_all {
      svg {
        width: 26px;
        position: relative;
        bottom: -6px;
      }
      font-size: 50px;
    }
  }
}
.product_amount {
  text-align: center;
  font-family: 'Gilroy', serif;
  font-style: normal;
  font-weight: 600;
  font-size: vw(20);
  color: #ffffff;
  background: #85a833;
  border: vw(4) solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px vw(17) vw(30) rgba(133, 168, 51, 0.52);
  border-radius: 90px;
  width: max-content;
  padding: vw(10.5) vw(26);
  @media all and (max-width: 1023px) {
    .product_amount {
      font-size: 14px;
      padding: 6px 18px;
      border: 2px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0px 6px 20px rgba(133, 168, 51, 0.3);
    }
  }
}
</style>

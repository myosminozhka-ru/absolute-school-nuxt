<template>
  <div class="loader">
    <div class="loader__in">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <defs>
          <style>
            path {
              animation: animate 1s linear infinite;
            }
            @keyframes animate {
              from {
                stroke-dashoffset: 0;
              }

              to {
                stroke-dashoffset: 256.5;
              }
            }
          </style>
        </defs>
        <g id="animation">
          <title>Bird</title>
          <desc>An image of a cute little green bird with an orange beak.</desc>
          <path
            fill="none"
            stroke="#e49535"
            stroke-width="5"
            stroke-dasharray="197.57347473144532 59.015453491210934"
            d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
            stroke-linecap="round"
            style="transform: scale(1); transform-origin: 50px 50px"
          />
          <!-- <animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1.4492753623188404s" keyTimes="0;1" values="0;256.58892822265625"/> -->
          <!-- </path> -->
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OsmLoader',
}
</script>

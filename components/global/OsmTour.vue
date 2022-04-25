<template>
    <div></div>
</template>

<script>
import introJs from 'intro.js';

export default {
    name: "OsmTour",
    mounted() {
        introJs().setOptions({
            showBullets: false,
            showProgress: true,
            nextLabel: "Далее",
            prevLabel: "Назад",
        }).start();
    }
}
</script>

<style lang="scss">
    .introjs-tooltip-title {
        display: none;
    }
    .introjs-skipbutton {
        position: fixed;
        font-size: 0;
        width: vw(60);
        height: vw(60);
        top: vw(60);
        right: vw(60);
        cursor: pointer;
        &:before {
            content: '';
            top: 0;
            right: 0;
            position: absolute;
            bottom: 0;
            left: 0;
            background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M53.7 4.93231C53.7 2.3908 51.3607 0.493699 48.874 1.01852L4.17889 10.4514C1.91657 10.9288 0.529057 13.2193 1.15356 15.4455L6.87944 35.8572C7.08864 36.6029 7.07682 37.3934 6.84544 38.1325L1.73422 54.4601C0.897166 57.134 2.99757 59.8177 5.7943 59.6477L38.7 57.6471H54.5974C57.2847 57.6471 59.2076 55.05 58.4233 52.4797L53.8741 37.5706C53.7587 37.1922 53.7 36.7988 53.7 36.4032V4.93231Z' fill='%2385A833' /%3E%3Cg filter='url(%23filter0_d_429_109)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M30.0005 25.7369L20.6157 17L17 22.1605L25.4211 30.0002L17.0008 37.8391L20.6165 42.9996L30.0005 34.2634L39.3845 42.9996L43.0003 37.8391L34.58 30.0002L43.001 22.1605L39.3853 17L30.0005 25.7369ZM30.0005 25.7369L25.4211 30.0002L30.0005 34.2634L34.58 30.0002L30.0005 25.7369Z' fill='white' /%3E%3Cpath d='M30.0005 25.7369L25.4211 30.0002L30.0005 34.2634L34.58 30.0002L30.0005 25.7369Z' fill='white' /%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d_429_109' x='17' y='17' width='26.001' height='30' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix' /%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' /%3E%3CfeOffset dy='4' /%3E%3CfeComposite in2='hardAlpha' operator='out' /%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.415686 0 0 0 0 0.52549 0 0 0 0 0.14902 0 0 0 1 0' /%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_429_109' /%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_429_109' result='shape' /%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E") 50% / 100% no-repeat;
            width: 100%;
            height: 100%;
            filter: drop-shadow(0px 9px 0px #6A8626);
            transition: all .3s ease-out;
        }
        &:hover {
        &:before {
                filter: drop-shadow(0px 0px 0px #6A8626);
            }
        }
        &:active {
            &:before {
                filter: drop-shadow(0px 0px 0px #6A8626);
                > path {
                    fill: #9DC739;
                }
            }
        }
    }
    .introjs-arrow {
        display: none !important;
    }
    .introjs-helperLayer {
        box-shadow: rgba(33, 33, 33, 0) 0px 0px 1px 2px, rgba(33, 33, 33, .5) 0px 0px 0px 5000px !important;
        border-radius: 20px;
    }
    .introjs-tooltip-header {
        padding: 0;
    }
    .introjs-tooltip {
        transition: all .3s ease-out;
        opacity: 1 !important;
        display: block !important;
    }
    .introjs-progress {
        position: fixed;
        margin: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        background: rgba(255,255,255,.2);
    }
    .introjs-progressbar {
        transition: all .3s ease-out;
        background: #85A833;
    }
    .introjs-tooltip {
        border: 3px solid rgba(255, 255, 255, 0.4);
        box-shadow: 0px 70px 60px -60px #A47A46, inset 0px -16px 29px #C9AD3B, inset 0px 10px 20px rgba(255, 255, 255, 0.15);
        border-radius: 50px;
        background: #F7DD85;
        min-width: vw(600);
        padding-right: vw(55);
        padding-left: 10px;
        padding-top: 26px;
        padding-bottom: 37px;
    }
    .introjs-tooltiptext {
        padding: 0;
    }
    .tour {
        display: flex;
        align-items: center;
        &.boy {
            .tour__l {
                background: url(./assets/img/boy_small.png) 0 / #{vw(206)} no-repeat;
                min-height: vw(283);
            }
        }
        &.girl {
            flex-direction: row-reverse;
            .tour__l {
                background: url(./assets/img/girl_small.png) 50% / #{vw(167)} no-repeat;
                min-height: vw(278);
            }
        }
        &__l {
            max-width: vw(230);
            width: 100%;
        }
        &__r {
            max-width: 305px;
            width: 100%;
        }
        &__number {
            font-family: 'Jingleberry', serif;
            font-style: normal;
            font-weight: 900;
            font-size: vw(45);
            line-height: 160%;
            text-transform: uppercase;
            color: #000000;
        }
        &__title {
            font-family: 'Gilroy', serif;
            font-style: normal;
            font-weight: 600;
            font-size: vw(30);
            line-height: 160%;
            color: #000000;
        }
        &__text {
            font-family: 'Gilroy', serif;
            font-style: normal;
            font-weight: 400;
            font-size: vw(20);
            line-height: 160%;
            color: #424242;
        }
    }
    .introjs-tooltipbuttons {
        position: fixed;
        bottom: vw(120);
        right: vw(55);
        padding: 0;
    }
    .introjs-nextbutton {
        border: 0;
        font-family: 'Jingleberry', serif;
        font-style: normal;
        font-weight: 900;
        font-size: vw(25);
        width: vw(239);
        text-transform: uppercase;
        transition: all .3s ease-out;
        color: #FFFFFF;
        cursor: pointer;
        text-decoration: none;
        padding: vw(40) vw(10);
        width: vw(283);
        position: relative;
        line-height: 160%;
        text-align: center;
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            transition: all .3s ease-out;
            filter: drop-shadow(0px 9px 0px #AD7026);
            position: absolute;
            z-index: -1;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: contain;
            path {
                transition: all .3s ease-out;
            }
            &.mob_icon {
                display: none;
            }
        }
        &:hover {
            &:before {
                filter: drop-shadow(0px 0px 0px #AD7026);
            }
        }
        &:active {
            &:before {
                filter: drop-shadow(0px 0px 0px #AD7026);
                path {
                    fill: #F8A846;
                }
            }
        }
    }
    .introjs-prevbutton {

    }
</style>
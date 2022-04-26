<template>
    <div></div>
</template>

<script>
import introJs from 'intro.js';

export default {
    name: "OsmTour",
    mounted() {
        document.getElementById('help').onclick = function() {
            introJs().setOptions({
                showBullets: false,
                showProgress: true,
                nextLabel: "Далее",
                prevLabel: "Назад",
                doneLabel: "Закрыть",
            }).start();
        }
        document.getElementById('help2').onclick = function() {
            introJs().setOptions({
                showBullets: false,
                showProgress: true,
                nextLabel: "Далее",
                prevLabel: "Назад",
                doneLabel: "Закрыть",
            }).start();
        }
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
        // opacity: 1 !important;
        // display: block !important;
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
        border-radius: vw(50);
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
        border: 0;
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
        color: #FFFFFF !important;
        cursor: pointer;
        text-decoration: none;
        padding: vw(40) vw(10);
        width: vw(283);
        position: relative;
        line-height: 160%;
        text-align: center;
        background: none !important;
        box-shadow: none !important;
        border: 0 !important;
        text-shadow: none;
        &:before {
            content: '';
            position: absolute;
            transition: all .3s ease-out;
            background: url("data:image/svg+xml, %3Csvg class='desc_icon' width='280' height='108' viewBox='0 0 280 108' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.966884 17.072C-0.412274 14.4818 1.37429 11.3376 4.30532 11.1966L235.063 0.093208C236.286 0.0343461 237.469 0.539143 238.273 1.46312L278.171 47.3232C279.5 48.8506 279.478 51.13 278.12 52.6316L229.835 106.024C228.994 106.954 227.766 107.435 226.518 107.326L4.11367 87.7728C1.23471 87.5197 -0.433913 84.3907 0.959939 81.859L17.4554 51.8974C18.1071 50.7136 18.1171 49.2809 17.482 48.0882L0.966884 17.072Z' fill='%23E49535'/%3E%3C/svg%3E") 50% no-repeat;
            filter: drop-shadow(0px 9px 0px #AD7026);
            z-index: -1;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            width: 100%;
            height: 100%;
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
        cursor: pointer;
        text-decoration: none;
        padding: vw(40) vw(10);
        display: flex;
        align-items: center;
        justify-content: center;
        width: vw(282);
        font-family: 'Jingleberry', serif;
        font-style: normal;
        font-weight: 900;
        font-size: vw(25);
        text-transform: uppercase;
        transition: all .3s ease-out;
        position: relative;
        color: #fff;
        background: none !important;
        box-shadow: none !important;
        border: 0 !important;
        text-shadow: none;
        &:before {
            content: '';
            position: absolute; 
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background: url("data:image/svg+xml, %3Csvg class='desc_icon' width='280' height='108' viewBox='0 0 280 108' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M278.533 17.072C279.912 14.4818 278.126 11.3376 275.195 11.1966L44.4371 0.093208C43.2138 0.0343461 42.0309 0.539143 41.2271 1.46312L1.32886 47.3232C0 48.8506 0.0219116 51.13 1.37988 52.6316L49.6653 106.024C50.5059 106.954 51.7338 107.435 52.9823 107.326L275.386 87.7728C278.265 87.5197 279.934 84.3907 278.54 81.859L262.045 51.8974C261.393 50.7136 261.383 49.2809 262.018 48.0882L278.533 17.072Z' fill='%23E9C893'/%3E%3C/svg%3E") 50% no-repeat;
            transition: all .3s ease-out;
            filter: drop-shadow(0px 9px 0px #AD7026);
            z-index: -1;
        }
        &:hover {
            color: #fff;
            &:before {
                filter: drop-shadow(0px 0px 0px #AD7026);
            }
        }
        &:active {
            color: #fff;
            &:before {
                filter: drop-shadow(0px 0px 0px #AD7026);
            }
        }
    }
    @media all and (max-width: 1023px) {
        .tour {
            &__number {
                font-size: 35px;
            }
            &__title {
                font-size: 20px;
            }
            &__text {
                font-size: 16px;
            }
            &__l {
                width: 100%;
                max-width: 40%;
            }
            &__r {
                width: 60%;
            }
            &.boy {
                .tour__l {
                    height: 155px;
                    background-size: 113px;
                }
            }
            &.girl {
                .tour__l {
                    height: 204px;
                    background-size: 121px;
                }
                .tour__r {
                    padding-left: 25px;
                }
            }
        }
        .introjs-tooltip {
            width: 345px;
            padding: 28px 5px;
        }
        .introjs-skipbutton {
            width: 45px;
            height: 45px;
            top: 30px;
            padding: 0;
            right: 15px;
        }
        .introjs-prevbutton {
            width: 54px;
            height: 54px;
            font-size: 0;
            padding: 0;
            margin-left: 15px;
            &:before {  
                width: 54px;
                height: 53px;
                padding: 0;
                filter: drop-shadow(0px 9px 0px #AD7026);
                background: url("data:image/svg+xml, %3Csvg class='mob_icon' width='55' height='54' viewBox='0 0 55 54' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M53.3573 9.96159C53.8266 7.67657 52.249 5.47641 49.9343 5.18764L11.5965 0.405003C9.70785 0.169388 7.91471 1.29726 7.3092 3.10171L0.435322 23.5861C0.153069 24.4272 0.158474 25.3383 0.45068 26.1761L8.80354 50.1225C9.47439 52.0457 11.4834 53.1577 13.4693 52.705L50.3853 44.2906C52.5166 43.8048 53.8632 41.698 53.4092 39.5597L50.4662 25.7009C50.3517 25.1619 50.3499 24.6051 50.4607 24.0654L53.3573 9.96159Z' fill='%23E9C893'/%3E%3Cpath d='M24.0505 26.8779L23.4515 28.6964L34.9826 33.5741L35.603 31.7556L24.0505 26.8779Z' fill='%23AD7026'/%3E%3Cpath d='M25.1618 18L16.797 23.2414L23.5145 30.8575L24.0494 26.8783L35.6019 31.756L37.2278 20.3319L24.6484 21.9792L25.1618 18Z' fill='white'/%3E%3Cpath d='M16.7983 23.2422L16.1993 25.0606L22.9169 32.6767L23.5159 30.8583L16.7983 23.2422Z' fill='%23AD7026'/%3E%3C/svg%3E") 50% / 100% no-repeat;
            }
            &:hover {
                color: #fff;
                &:before {
                    filter: drop-shadow(0px 0px 0px #AD7026);
                }
            }
            &:active {
                color: #fff;
                &:before {
                    filter: drop-shadow(0px 0px 0px #AD7026);
                }
            }
        }
        .introjs-nextbutton {
            width: 54px;
            height: 54px;
            font-size: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            margin-left: auto;
            margin-right: 15px;
            &:before {
                width: 54px;
                height: 53px;
                padding: 0;
                filter: drop-shadow(0px 9px 0px #AD7026);
                margin-top: auto;
                margin-bottom: auto;
                background: url("data:image/svg+xml, %3Csvg class='mob_icon' width='55' height='54' viewBox='0 0 55 54' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.870457 9.96159C0.401167 7.67657 1.97875 5.47641 4.29351 5.18764L42.6312 0.405003C44.5199 0.169388 46.3131 1.29726 46.9186 3.10171L53.7925 23.5861C54.0747 24.4272 54.0693 25.3383 53.7771 26.1761L45.4242 50.1225C44.7534 52.0457 42.7444 53.1577 40.7585 52.705L3.84244 44.2906C1.71114 43.8048 0.364557 41.698 0.818627 39.5597L3.76158 25.7009C3.87604 25.1619 3.8779 24.6051 3.76705 24.0654L0.870457 9.96159Z' fill='url(%23paint0_linear_229_17854)'/%3E%3Cpath d='M30.1775 26.8779L30.7765 28.6964L19.2454 33.5741L18.625 31.7556L30.1775 26.8779Z' fill='%23AD7026'/%3E%3Cpath d='M29.0659 18L37.4308 23.2414L30.7132 30.8575L30.1784 26.8783L18.6259 31.756L17 20.3319L29.5794 21.9792L29.0659 18Z' fill='white'/%3E%3Cpath d='M37.4295 23.2417L38.0285 25.0601L31.3109 32.6762L30.7119 30.8578L37.4295 23.2417Z' fill='%23AD7026'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_229_17854' x1='44.822' y1='-7.21628' x2='6.19378' y2='12.4878' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FEA840'/%3E%3Cstop offset='1' stop-color='%23FB971E'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") 50% no-repeat;
            }
            &:hover {
                color: #fff;
                &:before {
                    filter: drop-shadow(0px 0px 0px #AD7026);
                }
            }
            &:active {
                color: #fff;
                &:before {
                    filter: drop-shadow(0px 0px 0px #AD7026);
                }
            }
        }
        .introjs-tooltipbuttons {
            width: 100%;
            bottom: 35px;
            left: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .introjs-progressbar {
            background: #888BFC;
        }
    }
</style>
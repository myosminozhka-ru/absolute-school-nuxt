<template>
    <footer class="footer">
        <div class="footer__in">
            <img src="~/assets/img/logo.png" alt="Логотип">
        </div>
    </footer>
</template>

<script>
export default {
    name: 'OsmFooter'
}
</script>

<style lang="scss" scoped>
.footer {
    font-size: 0;
    &__in {
        background: #FFF4CE;
        border-radius: vw(50);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: vw(100);
        img {
            max-width: vw(217);
            width: 100%;
        }
    }
}
.isMobile {
    .footer {
        &__in {
            padding: 47px 10px;
            border-radius: 20px;
            img {
                max-width: 82px;
            }
        }
    }
}
</style>
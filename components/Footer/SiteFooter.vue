<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="social">
                <div class="subtitle">Мы в социальных сетях:</div>
                <a href="#" class="link">instagram</a>
                <a href="#" class="link">facebook</a>
            </div>
            <div class="pepper">
                Food-bite
            </div>
            <div class="call">
                <div class="subtitle">Или позвоните нам</div>
                <a href="#" class="link">+380678341034</a>
                <a href="#" class="link">+380500941356</a>
            </div>
        </div>
    </footer>
</template>

<script>

</script>

<style>
    .footer {
        min-height: 180px;
        background-color: #303030;
        padding: 45px 0 50px 0;
        color: #fff;
        position: absolute;
        left: 0;
        /* bottom: 0; */
        right: 0;
    }

    .footer__container {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end
    }

    .footer .subtitle {
        font-size: 20px
    }

    .footer .link {
        display: block;
        margin-top: 15px;
        font-size: 16px;
        color: #fff
    }

    .footer .call {
        text-align: right
    }

    .pepper {
        font-size: 32px;
        color: #fff;
        font-weight: 700;
        font-family: 'Roboto';
        list-style-type: none;
    }
</style>
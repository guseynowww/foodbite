<template>

      <div class="promotion">
        <div class="bgc_y"></div>
        <div class="container">
            <div class="promotion__text">
                <div class="title">Акция для новых клиентов!</div>
                <div class="promotion__descr">
                    Мы ценим каждого клиента и предлагаем вам стать одним<br> из них на очень выгодных условиях.
                    Каждому, кто закажет<br> доставку питание на неделю, будет предоставлена скидка<br> в размере
                    <span>20%!</span>
                    <br><br>
                    Акция закончится 29 июня в 00:00
                </div>
            </div>
            <div class="promotion__timer">
                <div class="title">Осталось до конца акции:</div>
                <div class="timer">
                    <div class="timer__block">
                        <span id="days">12</span>
                        дней
                    </div>
                    <div class="timer__block">
                        <span id="hours">20</span>
                        часов
                    </div>
                    <div class="timer__block">
                        <span id="minutes">56</span>
                        минут
                    </div>
                    <div class="timer__block">
                        <span id="seconds">20</span>
                        секунд
                    </div>
                </div>
            </div>
        </div>
      </div>  
    
</template>

<script></script>

<style>
    .promotion {
        padding: 70px 0 240px 0;
        position: relative
    }

    .title {
        color: #000;
        font-size: 36px;
        font-family: Roboto;
    }

    .promotion .container {
        display: flex
    }

    .promotion .bgc_y {
        position: absolute;
        width: 50%;
        height: 499px;
        background: rgba(243, 255, 222, .35);
        z-index: -1;
        top: -50px;
        left: 0
    }

    .promotion__text {
        width: 50%
    }

    .promotion__descr {
        margin-top: 40px;
        font-size: 20px;
        line-height: 24px;
        font-weight: 300
    }

    .promotion__descr span {
        font-weight: 700;
        font-size: 26px
    }

    .promotion__timer {
        width: 50%
    }

    .promotion__timer .title {
        text-align: right
    }

    .promotion__timer .timer {
        margin-top: 60px;
        padding-left: 95px;
        display: flex;
        justify-content: space-between;
        align-items: center
    }

    .promotion__timer .timer__block {
        width: 102px;
        height: 120px;
        background: #fff;
        box-shadow: 0 4px 20px rgba(0, 0, 0, .25);
        font-size: 16px;
        font-weight: 300;
        text-align: center
    }

    .promotion__timer .timer__block span {
        display: block;
        margin-top: 20px;
        margin-bottom: 5px;
        font-size: 56px;
        font-weight: 700
    }
</style>
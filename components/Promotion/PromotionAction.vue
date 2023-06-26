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
                    Акция закончится 12 июля в 00:00!
                </div>
            </div>
            <div class="promotion__timer">
                <div class="title">Осталось до конца акции:</div>
                <div class="timer">
                    <div class="timer__block">
                        <span id="days">{{ days }}</span>
                        дней
                    </div>
                    <div class="timer__block">
                        <span id="hours">{{ hours }}</span>
                        часов
                    </div>
                    <div class="timer__block">
                        <span id="minutes">{{ minutes }}</span>
                        минут
                    </div>
                    <div class="timer__block">
                        <span id="seconds">{{ seconds }}</span>
                        секунд
                    </div>
                </div>
            </div>
        </div>
      </div>  
</template>

<script>
export default {
  data() {
    return {
      countdownDate: new Date('2023-07-12'), // Замените на дату окончания акции
      
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      
      countdownInterval: null
    };
  },
  mounted() {
    this.startCountdown();
  },
  beforeDestroy() {
    this.stopCountdown();
  },
  methods: {
    startCountdown() {
      this.countdownInterval = setInterval(() => {
        const now = new Date();
        const difference = this.countdownDate - now;
        
        if (difference <= 0) {
          this.stopCountdown();
          return;
        }
        
        this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
      }, 1000);
    },
    stopCountdown() {
      clearInterval(this.countdownInterval);
    }
  }
};
</script>



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

<template>
    <div class="calculating">
        <div class="container">
            <h2 class="title">Рассчитаем вашу потребность в калориях?
            </h2>
            <div class="calculating__field">
                <div class="calculating__subtitle">
                    Ваш пол
                </div>
                <div class="calculating__choose" id="gender">
                    <div 
                        @click="selectGender('male')" 
                        :class="{ activ: gender === 'male' }" 
                        class="calculating__choose-item"
                    >
                    Мужчина
                    </div>
                    <div 
                        @click="selectGender('female')" 
                        :class="{ activ: gender === 'female' }" 
                        class="calculating__choose-item"
                    >
                    Женщина
                    </div>
                </div>

                <div class="calculating__subtitle">
                    Ваша конституция
                </div>
                <div class="calculating__choose calculating__choose_medium">
                    <input v-model="height" type="text" id="height" placeholder="Введите рост" class="calculating__choose-item">
                    <input v-model="weight" type="text" id="weight" placeholder="Введите вес"  class="calculating__choose-item">
                    <input v-model="age" type="text" id="age" placeholder="Введите возраст" class="calculating__choose-item">
                </div>

                <div class="calculating__subtitle">
                    Выберите вашу физическая активность
                </div>
                <div class="calculating__choose calculating__choose_big">
                    <div class="calculating__choose-item" @click="selectActivity('low')" :class="{ activ: activity === 'low' }">Низкая</div>
                    <div class="calculating__choose-item" @click="selectActivity('moderate')" :class="{ activ: activity === 'moderate' }">Умеренная</div>
                    <div class="calculating__choose-item" @click="selectActivity('high')" :class="{ activ: activity === 'high' }">Высокая</div>
                </div>

                <div class="calculating__divider"></div>
                <div class="calculating__total-cont">
                    <button class="calculating__btn" @click="calculateCalories">Рассчитать</button>
                    <span v-if="valid" style="color: red;">Заполните все поля!</span>

                    <div class="calculating__total">
                        <div class="calculating__subtitle">
                            Ваша суточная норма калорий:
                        </div>
                        <div class="calculating__result">
                            <span >{{ calories }}</span> ккал
                        </div>
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
      gender: 'male',
      weight: null,
      height: null,
      age: null,
      activity: 'low',
      calories: '___',
      valid: false
    };
  },
  methods: {
    selectGender(gender) {
      this.gender = gender;
    },
    selectActivity(activity) {
      this.activity = activity;
    },
    calculateCalories() {
      // Формула для расчета калорий
      let bmr;
      
      if (this.gender === 'male') {
        bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
      } else if (this.gender === 'female') {
        bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
      }
      
      let activityMultiplier;
      
      if (this.activity === 'low') {
        activityMultiplier = 1.2;
      } else if (this.activity === 'moderate') {
        activityMultiplier = 1.55;
      } else if (this.activity === 'high') {
        activityMultiplier = 1.9;
      }
      
      const calories = Math.round(bmr * activityMultiplier);
      this.calories = calories;
    }
  }
};
</script>

<style>
    .calculating {
        padding: 50px 0;
    }
    .calculating .title {
        text-align: center;
    }
    .calculating__field {
        width: 100%;
        margin-top: 50px;
        background: rgba(146, 242, 255, .15);
        padding: 30px 0 40px 0;
    }
    .calculating__subtitle {
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        margin-top: 30px;
    }
    .calculating__subtitle:first-child {
        margin-top: 0;
    }
    .calculating #gender:after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        width: 16px;
        height: 16px;
        /* background: url(../icons/switch.svg) center center/cover no-repeat; */
    }
    .calculating__choose {
        position: relative;
        display: flex;
        margin-top: 30px;
        justify-content: center;
    }
    .calculating__choose-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 170px;
        height: 50px;
        padding: 0 10px;
        background: #fff;
        box-shadow: 0 4px 15px rgba(0, 0, 0, .2);
        border: none;
        text-align: center;
        font-size: 15px;
        cursor: pointer;
        outline: 0;
        transition: .3s all;
    }
    .activ {
        color: #fff;
        background-color: #54ed39;
    }
    .calculating__choose_medium {
        width: 743px;
        justify-content: space-between;
        margin: 30px auto 0 auto;
    }
    .calculating__choose_big {
        width: 930px;
        justify-content: space-between;
        margin: 30px auto 0 auto;
    }
    .calculating__choose_big .calculating__choose-item {
        width: 200px;
    }
    .calculating__divider {
        width: 490px;
        height: 1px;
        margin: 40px auto;
        background-color: rgba(0, 0, 0, .2);
    }
    .calculating__total {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 450px;
    }
    .calculating__result {
        font-size: 18px;
        font-weight: 700;
    }
    .calculating__result span {
        font-size: 42px;
    }

    .calculating__total-cont {
        display: flex;
        /* width: 1000px; */
        justify-content: space-evenly;
    }

    .calculating__btn {
        width: 220px;
        height: 65px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #000000;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
        border-radius: 2.5px;
        cursor: pointer;
    }

    .calculating__btn:hover {
      color: #fff;
      background-color: #54ed39;
      border: none;
      transition: 0.6s all;
    }
</style>

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
                        class="calculating__choose-item"
                        v-for="item in genders"
                        :key="item.id"
                        :id="item.gender"
                        :class="{item_active: item == selectedGender}"
                        @click="selectToGender(item)"
                        >
                        {{ item.name }}
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
                    <div 
                        class="calculating__choose-item"
                        v-for="item in calculateStates"
                        :key="item.id"
                        :id="item.state"
                        @click="selectToState(item)"
                        :class="{item_active: item == selectedState}"
                    >
                        {{ item.name }}
                    </div>

                </div>

                <div class="calculating__divider"></div>

                <div class="calculating__total">
                    <div class="calculating__subtitle">
                        Ваша суточная норма калорий:
                    </div>
                    <div class="calculating__result">
                        <span>{{ total }}</span> ккал
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
                genders: [
                    {id: 1, gender: "female", name: 'Женщина'},
                    {id: 2, gender: "male", name: 'Мужчина'}
                ],

                calculateStates: [
                    {id: 1, state: "low", name: 'Низкая активность'},
                    {id: 2, state: "small", name: 'Невысокая активность'},
                    {id: 3, state: "medium", name: 'Умеренная активность'},
                    {id: 4, state: "large", name: 'Высокая активность'}
                ],

                height: null,
                weight: null,
                age: null,
                
                selectedState: null,
                selectedGender: null,

                total: '____'
            }
        },

        methods: {
            selectToState(selectedItem) {
                this.selectedState = selectedItem
            },

            selectToGender(selectedItem) {
                this.selectedGender = selectedItem
            },
        },

        
    }
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
    .item_active {
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
        width: 460px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .calculating__result {
        font-size: 18px;
        font-weight: 700;
    }
    .calculating__result span {
        font-size: 42px;
    }
</style>
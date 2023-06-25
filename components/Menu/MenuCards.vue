<template>
    <div class="menu">
        <h2 class="title">Наше меню на день</h2>

        <div class="menu__field">
            <div class="container">
                <div class="menu__item">
                    <img src="@/assets/images/menu/elite.jpg" alt="elite">
                    <h3 class="menu__item-subtitle">Меню "Фитнес"</h3>
                    <div class="menu__item-descr">Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>1690</span> руб./день</div>
                    </div>
                </div>
                <div class="menu__item">
                    <img src="@/assets/images/menu/vegy.jpg" alt="vegy">
                    <h3 class="menu__item-subtitle">Меню “Премиум”</h3>
                    <div class="menu__item-descr">В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>2290</span> руб./день</div>
                    </div>
                </div>
                <div class="menu__item">
                    <img src="@/assets/images/menu/hamburger.jpg" alt="post">
                    <h3 class="menu__item-subtitle">Меню "Постное"</h3>
                    <div class="menu__item-descr">Меню “Постное” - это тщательный подбор ингредиентов: отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса, правильное количество белков за счет тофу и вегетарианских стейков. </div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>3790</span> руб./день</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .menu {
        padding: 40px 0 50px 0;
    }
    .menu .container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .menu .title {
        text-align: center;
    }
    .menu__field {
        margin-top: 50px;
        padding: 50px 0;
        width: 100%;
        background: rgba(249, 254, 126, .25);
    }
    .menu__item {
        width: 320px;
        min-height: 450px;
        background: #fff;
        box-shadow: 0 4px 25px rgba(0, 0, 0, .25);
        font-size: 16px;
        font-weight: 300;
    }
    .menu__item img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    .menu__item-subtitle {
        font-weight: 700;
        font-size: 18px;
        padding: 0 20px;
        margin-top: 20px;
    }
    .menu__item-descr {
        margin-top: 20px;
        padding: 0 20px;
    }
    .menu__item-divider {
        width: 100%;
        height: 1px;
        background-color: rgba(0, 0, 0, .25);
        margin-top: 40px;
    }
    .menu__item-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
    }
    .menu__item-price span {
        font-size: 24px;
        font-weight: 700;
    }

</style>
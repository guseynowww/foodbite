<template>

    <div class="sidepanel">
        <div class="sidepanel__text"><span>Социальные сети</span></div>
        <div class="sidepanel__divider"></div>
        <a href="#" class="sidepanel__icon">
            <img src="@/assets/icons/SidePanel/instagram.svg" alt="instagram">
        </a>
        <a href="#" class="sidepanel__icon">
            <img src="@/assets/icons/SidePanel/facebook.svg" alt="facebook">
        </a>
    </div>
    
</template>

<style>
.sidepanel {
    position: fixed;
    left: 60px;
    top: 240px;
    height: 400px;
    width: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center
}

.sidepanel__text {
    width: 120px;
    height: 120px;
    font-size: 16px;
    font-weight: 500;
}

.sidepanel__text span {
    display: flex;
    transform: rotate(-90deg) translateX(-50px)
}

.sidepanel__divider {
    width: 1px;
    height: 165px;
    background-color: #000
}

.sidepanel__icon {
    width: 24px;
    height: 24px
}

.sidepanel__icon img {
    width: 100%
}
</style>
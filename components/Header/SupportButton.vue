<template>
    <button class="header_button"><slot></slot></button>
</template>

<script>
    export default {
    }
</script>

<style>
    .header_button {
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

    .header_button:hover {
        color: #FFFFFF;
        background: #303030;
        transition: all 0.5s ease-out;
    }
</style>
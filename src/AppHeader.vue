<script>
export default {
    name: 'AppHeader'
}

</script>

<template lang="">
    <header>
        <h1 class="titolo">
            BoolFlix
        </h1>
        
        <div class="margine-contenitore">
            <input type="text" placeholder="Cerca">
            <button >Cerca</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: black;
    height: 100px;
    align-items: center;
    display: flex;
    justify-content: space-between;

    .margine-contenitore {
        margin-right: 50px;
    }

    h1 {
        color: red;
        font-size: xx-large;
        margin-left: 50px;
        width: 50%;
    }

    input {
        border-radius: 10px;
        padding: 6px 20px;
        margin-right: 10px;
    }

    button {
        border-radius: 10px;
        padding: 10px 15px;
        background-color: red;
        color: white;
        cursor: pointer;
    }

}
</style>
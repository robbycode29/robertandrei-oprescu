<template>
    <div v-if="getShowInfoAlert" class="modal" @click.self="close">
        <div class="info-alert flex flex-col p-5 gap-3">
            <div><h2 class="text-lg font-semibold">Welcome to my resume portal!</h2></div>
            <div class="flex w-full h-[1.5px] rounded-xl bg-black"></div>
            <div class="text-base font-normal flex flex-col">
                <span>Current version: 1.0.0</span>
                <span>This application serves as my personal online resume.</span>
                <span>It is open source and can be used as a reference if you want to build your own.</span>
                <span>Github repo: <a class="underline" href="https://github.com/robbycode29/robertandrei-oprescu.git">https://github.com/robbycode29/robertandrei-oprescu.git</a></span>
                <span>Vue 3: 3.2.13</span>
                <span>Tailwind CSS: 3.4.1</span>
                <span>Typescript: 4.5.5</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default defineComponent({
    name: 'InfoAlert',
    computed: {
        ...mapGetters(['getShowInfoAlert']),
    },
    methods: {
        ...mapActions(['changeShowInfoAlert']),
        close() {
            this.changeShowInfoAlert(false);
        },
    },
});
</script>
<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.info-alert {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
}
</style>
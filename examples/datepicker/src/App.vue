<template>
    <div id="app">
        <v-date-picker
               is-inline
               is-expanded
               :tint-color="theme"
               :show-day-popover="false"
               v-model="selectedDate"
        />
        <button
            class="select"
            :disabled="!selectedDate"
            :style="{ background: theme }"
            @click="select"
        >
            Select date
        </button>
    </div>
</template>

<script>
import createMomentsSDK from '@livechat/moments-sdk/es5'

export default {
    data () {
        return {
            theme: '#333333',
            momentsSDK: null,
            selectedDate: null
        }
    },
    methods: {
        select () {
            if (!this.selectedDate || !this.momentsSDK) {
                return
            }

            this.momentsSDK.sendMessage({ text: this.selectedDate.toLocaleDateString() })
            this.momentsSDK.close()
        }
    },
    async created () {
        createMomentsSDK({
            title: 'Date picker',
            icon: `${window.location.origin}${window.location.pathname}/icon.svg`
        }).then(momentsSDK => {
            this.momentsSDK = momentsSDK
        })
    }
}
</script>

<style lang="sass">
    *
        margin: 0
        padding: 0
        box-sizing: border-box
        outline: none

    html, body, #app
        height: 100%
        width: 100%

    #app
        padding: 10px

    button.select
        width: 100%
        margin-top: 15px
        padding: 10px
        color: #ffffff
        border: none
        border-radius: 4px
        font-size: 16px
        -webkit-backface-visibility: hidden
        transition: all .3s
        cursor: pointer
        &:hover
            opacity: 0.8
        &:active
            opacity: 0.5
        &:disabled
            opacity: 0.2
</style>

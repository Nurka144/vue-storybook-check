<template>
    <button id="btn" :style="args.style ? args.style : {}" type="submit">{{args.label}}</button>
</template>

<script>
export default {
    name: 'Button',
    data() {
        return {

        }
    },
    props: ['args']
}
</script>

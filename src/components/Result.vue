<template>
    <div class="d-flex">
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
    </div>
</template>

<script>
import Cart from '@/components/Cart.vue'

export default {
    name: 'Result',
    components: {
        Cart,
    }
}
</script>
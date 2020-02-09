<template>
    <div class="container">
        <div class="row">
            <div class="cart col-sm-2"  v-for="day in data" v-bind:key="day.id">
                <div class="cart-header d-flex justify-content-between">
                    <span class="day">{{ day.datetime}}</span>
                </div>
                <div class="cart-content">
                    <div class="cart-content-top d-flex justify-content-between">
                        <div class="cart-content-top-left d-flex flex-column">
                            <img style="width: 50px;" v-bind:src="'https://www.weatherbit.io/static/img/icons/' + day.weather.icon + '.png'" alt="Sunny"/>
                            <span>{{day.weather.description}}</span>
                        </div>
                        <div class="cart-content-top-right">
                            <span>{{ day.temp }} C</span>
                        </div>

                    </div>
                    <div class="cart-content-bottom">
                        <span>
                            <!-- The weather is very nice today. Good day for a ride. -->
                        </span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Cart from '@/components/Cart.vue'
import { mapState } from 'vuex'

export default {
    name: 'Result',
    components: {
        Cart,
    },

    data() {
        return {
            test: null,
        }
    },

   
    computed: {
        ...mapState([
          'data'
        ])

    },
}


</script>
<template>
    <div class="search d-flex justify-content-center">
        <div class="form-group selectbox col-md-4">
            <select id="country" class="form-control">
                <option selected>Turkey</option>
            </select>
        </div>
        <div class="selectbox col-md-4">
            <select @change="setData()" id="city" class="form-control" v-model="city">
                <option>Istanbul</option>
                <option>Ankara</option>
                <option>İzmir</option>
                <option>Adana</option>
                <option>Bursa</option>                

            </select>
        </div>
    </div>
</template>
  
<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            city: null
        }
    },
    computed: {
        ...mapState([
            'data',
        ]),
    },
    methods: {
        ...mapActions([
            'apiCall'
        ]),

        setData: function(){
            this.apiCall(this.city);
        },
    },
}


</script>

<style lang="scss">

.search{
    margin-top: 80px;
    margin-bottom: 100px;
    .form-group{

    }
}
    
</style>
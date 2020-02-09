<template>
   
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            
        }
    },


    computed: {
        ...mapState([
            'data',
        ])
    },
}
</script>

<style lang="scss">
.cart{
    &-header{
        border-bottom: 2px solid #ffffff;
       .day{
           font-size: 18px;
       }
       .date{
           font-size: 10px;
       }
    }

    &-content{
        margin-top: 25px;
        &-top{
            &-left{
                img{
                    margin-bottom: 10px;
                }
                span{
                    font-size: 14px;
                }
            }
            &-right{
                span{
                    font-size: 21px;
                }
            }

        }

        &-bottom{
            span{
                font-size: 10px;
                line-height: 1.1;
            }
        }

    }
}
    
</style>
<template>
    <div class="cart col-sm-2">
        <div class="cart-header d-flex justify-content-between">
            <span class="day">Monday</span>
            <span class="date d-flex align-items-center">20 May 2020</span>
        </div>
        <div class="cart-content">
            <div class="cart-content-top d-flex justify-content-between">
                <div class="cart-content-top-left d-flex flex-column">
                    <img src="@/assets/img/sun.png" alt="Sunny">
                    <span>Sunny</span>
                </div>
                <div class="cart-content-top-right">
                    <span>19 C</span>
                </div>

            </div>
            <div class="cart-content-bottom">
                <span>
                    The weather is very nice today. Good day for a ride.
                </span>
            </div>
        </div>
    </div>
</template>

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
                    font-size: 34px;
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
<template>
    <div>
       <p class="hi"> Hi , my first vue !</p>
       <!-- 步骤1：在这里显示 message 的初始值 -->
      {{message}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            // 步骤2：在这里定义了message的初始值
            message:"你好 Vue ! 本消息来自于变量"
        }
    }
}
</script>

<style>
    .hi{
        color: red;
        font-size: 60px;
    }

</style>




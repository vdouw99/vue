<template>
    <div class="search-box">
        <i class="icon-search"></i>
        <input class="box"
               v-model="query"
               ref="query"
               :placeholder="placeholder"/>
        <i class="icon-dismiss"
           @click="clear"
           v-show="query"></i>
    </div>
</template>

<script type="text/ecmascript-6">
    import {debounce} from '../../common/js/util.js';

    export default{
        props: {
            placeholder: {
                type: String,
                default: '搜索歌曲、歌手'
            }
        },
        data(){
            return {
                query: ''
            }
        },
        methods: {
            setQuery(query){
                this.query = query;
            },
            clear(){
                this.query = '';
            },
            blur(){
                this.$refs.query.blur();
            }
        },
        created(){
            this.$watch('query', debounce((newQuery)=> {
                this.$emit('query', newQuery);
            }, 200));
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import url('../../common/less/variable.less');

    .search-box {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        padding: 0 6px;
        height: 40px;
        background: @color-highlight-background;
        border-radius: 6px;
        .icon-search {
            font-size: 24px;
            color: @color-background;
        }
        .box {
            flex: 1;
            margin: 0 5px;
            line-height: 18px;
            background: @color-highlight-background;
            color: @color-text;
            font-size: @font-size-medium;
            &::placeholder {
                color: @color-text-d;
            }
        }
        .icon-dismiss {
            font-size: 16px;
            color: @color-background;
        }
    }
</style>

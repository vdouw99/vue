<template>
    <div class="rank-wrapper" ref="rank">
        <v-scroll :data="topList" class="toplist" ref="list">
            <ul>
                <li @click="selectItem(item)" class="item" v-for="item in topList">
                    <div class="icon">
                        <img width="100" height="100" v-lazy="item.picUrl"/>
                    </div>
                    <ul class="songlist">
                        <li class="song" v-for="(song,index) in item.songList">
                            <span>{{index+1}}</span>
                            <span>{{song.songname}} - {{song.singername}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="loading-container" v-show="!topList.length">
                <v-loading></v-loading>
            </div>
        </v-scroll>
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    import {getTopList} from 'api/rank';
    import {ERR_OK} from 'api/config';
    import Scroll from 'base/scroll/index.vue';
    import Loading from 'base/loading/index.vue';
    import {playlistMixin} from '../../common/js/mixin.js';
    import {mapMutations} from 'vuex';

    export default{
        mixins: [playlistMixin],
        created(){
            this._getTopList();
        },
        data(){
            return {
                topList: []
            }
        },
        methods: {
            selectItem(item){
                this.$router.push({
                    path: `/rank/${item.id}`
                });
                this.setTopList(item);
            },
            _getTopList(){
                getTopList().then((res)=> {
                    if (res.code == ERR_OK) {
                        console.log(res);
                        this.topList = res.data.topList;
                    }
                })
            },
            handlePlayList(playlist){
                const bottom = playlist.length ? '60px' : '';
                this.$refs.rank.style.bottom = bottom;
                this.$refs.list.refresh();
            },
            ...mapMutations({
                setTopList: 'SET_TOP_LIST'
            })
        },
        components: {
            'v-scroll': Scroll,
            'v-loading': Loading
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import url('../../common/less/variable');
    @import url('../../common/less/mixin');

    .rank-wrapper {
        position: fixed;
        width: 100%;
        top: 88px;
        bottom: 0;
        .toplist {
            height: 100%;
            overflow: hidden;
            .item {
                display: flex;
                margin: 0 20px;
                padding-top: 20px;
                height: 100px;
                &:last-child {
                    padding-bottom: 20px;
                }
                .icon {
                    flex: 0 0 100px;
                    width: 100px;
                    height: 100px;
                }
                .songlist {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 0 20px;
                    height: 100px;
                    overflow: hidden;
                    background: @color-highlight-background;
                    color: @color-text-d;
                    font-size: @font-size-small;
                    .song {
                        .no-wrap();
                        line-height: 26px;
                    }
                }
            }
            .loading-container {
                position: absolute;
                width: 100%;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
</style>

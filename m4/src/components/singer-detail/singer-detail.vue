<template>
    <transition name="slide">
        <v-music-list :songs="songs" :title="title" :bg-image="bgImage"></v-music-list>
    </transition>
</template>

<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex';
    import {getSingerDetail} from 'api/singer';
    import {ERR_OK} from 'api/config';
    import {createSong} from 'common/js/song';
    import MisicList from 'components/music-list/music-list';

    export default {
        data() {
            return {
                songs: []
            };
        },
        components: {
            'v-music-list': MisicList
        },
        computed: {
            title() {
                return this.singer.name;
            },
            bgImage() {
                return this.singer.avatar;
            },
            ...mapGetters([
                'singer'
            ])
        },
        created() {
            this._getDetail();
        },
        methods: {
            _getDetail() {
                if (!this.singer.id) {
                    this.$router.push('/singer');
                }
                getSingerDetail(this.singer.id).then((res) => {
                    if (res.code === ERR_OK) {
                        this.songs = this._normalizeSongs(res.data.list);
                    }
                });
            },
            _normalizeSongs(list) {
                let ret = [];
                list.forEach((item) => {
                    let musicData = item.musicData;
                    if (musicData.songid && musicData.albummid) {
                        ret.push(createSong(musicData));
                    }
                });

                return ret;
            }
        }
    };
</script>

<style rel="stylesheet/less" lang="less">
    @import url("../../common/less/variable");

    .slide-enter-active,
    .slide-leave-active {
        transition: all .3s;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translate3d(100%, 0, 0);
    }
</style>

/**
 * Created by sf on 2017/11/29.
 */

import axios from 'axios';

import jsonp from '../common/js/jsonp.js';
import {commonParams, options} from './config.js';

export function getSingerList() {
    const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg';
    const data = Object.assign({}, commonParams, {
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1,
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq'
    });
    return jsonp(url, data, options);
}

export function getSingerDetail(singerId) {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg';
    const data = Object.assign({}, commonParams, {
        hostUin: 0,
        needNewCode: 1,
        begin: 0,
        num: 100,
        order: 'listen',
        songtatus: 1,
        singermid: singerId,
        g_tk: 1849388436,
        platform: 'h5page'
    });
    return jsonp(url, data, options);
}
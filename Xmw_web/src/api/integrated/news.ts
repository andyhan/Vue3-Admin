/*
 * @Author: Xie Mingwei
 * @Date: 2021-09-02 17:06:46
 * @LastEditors: Xie Mingwei
 * @LastEditTime: 2021-09-03 11:43:03
 * @Description:新闻公告模块接口
 */
import { defHttp } from '/@/utils/http/axios';
import { newsSearchParams, getNewsResultModel, newsSaveParams, newsDelParams, newsPlacedTopParams } from './model/newsModel'

enum Api {
    getNewsList = '/integrated/getNewsList', // 获取新闻公告列表
    newsSave = '/integrated/newsSave', // 新增和更新新闻公告
    newsDel = '/integrated/newsDel', // 删除新闻公告
    setNewsPlacedTop = '/integrated/setNewsPlacedTop', // 更改置顶状态
}

export function getNewsList(params?: newsSearchParams) {
    return defHttp.get<getNewsResultModel>({ url: Api.getNewsList, params: params });
}

export function newsSave(params?: newsSaveParams) {
    return defHttp.post({ url: Api.newsSave, params: params });
}

export function newsDel(params?: newsDelParams) {
    return defHttp.post({ url: Api.newsDel, params: params });
}

export function setNewsPlacedTop(params: newsPlacedTopParams) {
    return defHttp.post({ url: Api.setNewsPlacedTop, params: params });
}

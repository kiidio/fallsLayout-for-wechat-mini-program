let fakeImg = [
    {
        url: '/images/1.png',
        id: 1,
        width: 372,
        height: 266
    },
    {
        url: '/images/2.png',
        id: 2,
        width: 372,
        height: 198
    },
    {
        url: '/images/3.png',
        id: 3,
        width: 371,
        height: 250
    },
    {
        url: '/images/personal-banner.png',
        id: 4,
        width: 750,
        height: 603
    },
    {
        url: '/images/4.png',
        id: 5,
        width: 371,
        height: 250
    }
] // 假数据

import fallsLayout from '../../component/FallsLayout/index';

Page({

    data: {
        colLeft: [], // 左列图片数据
        colRight: [], // 右列图片数据
    },
    PerImgList: [], // 每次请求获得的图片列表  
    falls: new  fallsLayout(),
    onLoad: function () {
        this.PerImgList = fakeImg;
        this.falls.initcol(this.PerImgList, this)
    },
    onReachBottom: function () {
        this.falls.initcol(this.PerImgList, this)
    },

})
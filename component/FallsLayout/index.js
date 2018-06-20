let res = wx.getSystemInfoSync();
let width = res.windowWidth;
class falls {
    constructor () {
        this.colLeftH = 0 ;
        this.colRightH = 0;
        this.imgWidth = width * 0.496;
        this.colLeft = []; // temp 左边数据
        this.colRight = [] ; // temp 右边数据
    }
    initcol (imgList, that) {
        this.colLeft = []; // temp 左边数据
        this.colRight = [] ; // temp 右边数据
        imgList.forEach((item) =>{
            let imageId = item.id;
            let imageUrl = item.url;
            let oImgW = item.width;         //图片原始宽度
            let oImgH = item.height;        //图片原始高度
            let scale = this.imgWidth / oImgW;        //比例计算
            let imgHeight = oImgH * scale;      //自适应高度
            let imageObj = {
                id: imageId,
                url: imageUrl,
                height: imgHeight
            }
            if (this.colLeftH <= this.colRightH) {
                this.colLeftH += imgHeight;
                this.colLeft.push(imageObj);
            } else {
                this.colRightH += imgHeight;
                this.colRight.push(imageObj);
            }
        })
        that.setData({
            colLeft: that.data.colLeft.concat(this.colLeft),
            colRight: that.data.colRight.concat(this.colRight)
        })
    }
  }
  module.exports = falls

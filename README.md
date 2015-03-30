# coordinate-convert
地理坐标转换库

## 安装
### Node
```
npm install coordinate-convert
```
### bower
```
bower install coordinate-convert
```

## 方法
### wgs2gcj(lng, lat)
WGS84坐标转GCJ02坐标
#### 参数
##### lng {number|Array}
经度值或经纬度数组
##### lat {number} 可选
纬度值
#### 返回值 {Array<number>}
转换后的经纬度数组

### gcj2bd(lng, lat)
GCJ02坐标转百度BD09坐标
#### 参数
##### lng {number|Array}
经度值或经纬度数组
##### lat {number} 可选
纬度值
#### 返回值 {Array<number>}
转换后的经纬度数组

### bd2gcj(lng, lat)
百度DB09坐标转GCJ02坐标
#### 参数
##### lng {number|Array}
经度值或经纬度数组
##### lat {number} 可选
纬度值
#### 返回值 {Array<number>}
转换后的经纬度数组


## 示例
```
var coord = CoordinateConvert.wgc2gcj(116.3997, 39.9158)
```
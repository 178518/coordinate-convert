# coordinate-convert

地理坐标转换库，可以实现WGS84转GCJ02、GCJ02转BD009、BD09转GCJ02

## 说明

### WGS84 

GPS全球定位系统使用的坐标系统，GPS设备直接返回的坐标即为WGS84，另外Google地图使用的也是WGS84坐标

### GCJ02

由中国国家测绘局制定的地理信息系统的坐标，国内出版的各种地图坐标系统（包括电子地图），必须至少采用GCJ02对WGS84进行首次加密。

### BD09

百度在GCJ02的基础上进行的二次加密格式

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
var coord = CoordinateConvert.wgs2gcj(116.3997, 39.9158)
```

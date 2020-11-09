# WebGL纹理

## 实例程序

```js
<!-- 顶点着色器源码 -->
<script id="vertexShader" type="x-shader/x-vertex">
  attribute vec4 a_Position;//顶点位置坐标
  attribute vec2 a_TexCoord;//纹理坐标
  varying vec2 v_TexCoord;//插值后纹理坐标
  void main() {
    //顶点坐标apos赋值给内置变量gl_Position
    gl_Position = a_Position;
    //纹理坐标插值计算
    v_TexCoord = a_TexCoord;
  }

</script>
<!-- 片元着色器源码 -->
<script id="fragmentShader" type="x-shader/x-fragment">
  //所有float类型数据的精度是highp
  precision highp float;
  // 接收插值后的纹理坐标
  varying vec2 v_TexCoord;
  // 纹理图片像素数据
  uniform sampler2D u_Sampler;
  void main() {
    // 采集纹素，逐片元赋值像素值
    gl_FragColor = texture2D(u_Sampler,v_TexCoord);
  }

</script>

/**
创建UV纹理坐标数据textureData
**/
var textureData = new Float32Array([
    0,1,//左上角——uv0
    0,0,//左下角——uv1
    1,1,//右上角——uv2
    1,0 //右下角——uv3
]);
/**
加载纹理图像像素数据
**/
var image = new Image();
image.src = 'texture.jpg';//设置图片路径
image.onload = texture;//图片加载成功后执行texture函数

/**
创建缓冲区textureBuffer，向顶点着色器传入顶点纹理坐标数据textureData
**/
var textureBuffer=gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER,textureBuffer);
gl.bufferData(gl.ARRAY_BUFFER,textureData,gl.STATIC_DRAW);
gl.vertexAttribPointer(a_TexCoord,2,gl.FLOAT,false,0,0);
gl.enableVertexAttribArray(a_TexCoord);

/**
创建缓冲区textureBuffer，传入图片纹理数据，然后执行绘制方法drawArrays()
 **/
function texture() {
    var texture = gl.createTexture();//创建纹理图像缓冲区
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true); //纹理图片上下反转
    gl.activeTexture(gl.TEXTURE0);//激活0号纹理单元TEXTURE0
    gl.bindTexture(gl.TEXTURE_2D, texture);//绑定纹理缓冲区
    //设置纹理贴图填充方式(纹理贴图像素尺寸大于顶点绘制区域像素尺寸)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    //设置纹理贴图填充方式(纹理贴图像素尺寸小于顶点绘制区域像素尺寸)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    //设置纹素格式，jpg格式对应gl.RGB
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
    gl.uniform1i(u_Sampler, 0);//纹理缓冲区单元TEXTURE0中的颜色数据传入片元着色器
    // 进行绘制
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}
```

## 图像Y轴反转

在使用图像之前，必须对它进行反转。

```js
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true); //纹理图片上下反转
```

该方法对图像进行了Y轴反转。WebGL纹理坐标系统中的t轴的方向和PNG、BMP、JPG等格式图片的坐标系统的Y轴方向是相反的。因此，只有先将图像Y轴进行反转，才能够正确地将图像映射到图形上。（或者，可以在着色器中手动反转t轴坐标）

## 激活纹理单元（gl.activeTexture()）

WebGL通过一种称作纹理单元的机制来同时使用多个纹理。每个纹理单元有一个单元编号来管理一张纹理图像。即使你的程序只需要使用一张纹理图像，也得为其指定一个纹理单元。在默认情况下，WebGL至少支持8个纹理单元。

## 绑定纹理缓冲区（gl.bindTexture()）

纹理类型：

- gl.TEXTURE_2D —— 二维纹理
- gl.TEXTURE_CUBE_MAP —— 立方体纹理

```js
gl.bindTexture(gl.TEXTURE_2D, texture);//绑定纹理缓冲区
```

## 配置纹理对象的参数（gl.texParameteri()）

设置纹理图像映射到图形上的具体方式: 如何根据纹理坐标获取纹素颜色、按哪种方式重复填充纹理。我们使用通用函数gl.texParameteri()来设置这些参数。

- 放大方法（gl.TEXTURE_MAX_FILTER）
- 放大方法（gl.TEXTURE_MIN_FILTER）
- 水平填充方法（gl.TEXTURE_WRAP_S）
- 垂直填充方法（gl.TEXTURE_WRAP_T）

## 将纹理图像分配给纹理对象（gl.texImage2D()）

![gl.texImage2D](/Users/a/Desktop/blog/webgl/img/gl.texImage2D.png)
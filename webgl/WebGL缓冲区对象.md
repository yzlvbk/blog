# WebGL缓冲区对象

## 使用缓冲区步骤

缓冲区对象是WebGL系统中的一块存储区，你可以在存储区对象中保存想要绘制的所有顶点的数据。如下图所示。先创建一个缓冲区，然后向其中写入顶点数据，就能一次性地向顶点着色器中传入多个顶点的attribute变量的数据。![使用缓冲区对象](/Users/a/Desktop/博客站点/webgl/img/使用缓冲区对象.png)

使用缓冲区对象向顶点着色器传入多个顶点的数据，需要遵循以下五个步骤。处理其他对象，如纹理对象、帧缓冲对象时的步骤也比较类似。

1. 创建缓冲区对象（gl.createBuffer()）
2. 绑定缓冲区对象（gl.bindBuffer()）
3. 将数据写入缓冲区对象（gl.bufferData()）
4. 将缓冲区对象分配给一个attribute变量（gl.vertexAttriPointer()）
5. 开启attribute变量（gl.enableVertextAttribArray()）

## 1.创建缓冲区对象（gl.createBuffer()）

显然，在使用缓冲区对象之前，你必须创建它。执行该方法的结果就是，WebGL系统中多了一个新创建出来的缓冲区对象。

```js
 //创建缓冲区对象
  var buffer = gl.createBuffer(); 
```

## 2.绑定缓冲区对象（gl.bindBuffer()）

创建缓冲区之后就是将缓冲区对象绑定到WebGL系统中已经存在的"目标"(target)。这个目标表示缓冲区对象的用途，这样WebGL才能够正确处理其中内容。

```js
//绑定缓冲区对象,激活buffer
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

<img src="/Users/a/Desktop/博客站点/webgl/img/gl.bindBuffer.png" alt="gl.bindBuffer" style="zoom:50%;" />

## 3.将数据写入缓冲区对象（gl.bufferData()）

gl.bufferData()方法，将会开辟空间并向缓冲区中写入数据。

```js
//顶点数组data数据传入缓冲区
gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
```

<img src="/Users/a/Desktop/博客站点/webgl/img/gl.bufferData.png" alt="gl.bufferData" style="zoom:50%;" />

## 4.将缓冲区对象分配给一个attribute变量（gl.vertexAttriPointer()）

```js
//缓冲区中的数据按照一定的规律传递给位置变量apos
gl.vertexAttribPointer(aposLocation, 2, gl.FLOAT, false, 0, 0);
```

<img src="/Users/a/Desktop/博客站点/webgl/img/gl.vertexAttribPointer.png" alt="gl.vertexAttribPointer" style="zoom:50%;" />

## 5.开启attribute变量（gl.enableVertextAttribArray()）

当执行gl.enableVertextAttribArray()并传入一个已经分配好缓冲区的attribute变量后，缓冲区对象和attribute变量之间的连接就真正建立起来了

```js
//允许数据传递
gl.enableVertexAttribArray(aposLocation);
```


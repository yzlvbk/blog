# 解决github上传项目的时候报出git@github.com: Permission denied (publickey). fatal: Could not read from remote repo

第一句报错：
fatal: remote origin already exists.
远程起源已经存在。

第二句报错：
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
git@github.com：权限被拒绝（publickey）。
致命：无法从远程存储库读取。

第三句报错：
Please make sure you have the correct access rights
and the repository exists.
请确保您拥有正确的访问权限
并且存储库存在。

经过翻译可以得知我是在上传过程中没有权限所以被拒绝了，经过了对git的一番了解以后得知我好像做少了其中一个比较重要的一步，就是设置一个SSH KEY，即是密钥，（出于安全考虑，Github 服务器和我们本地的通讯要求使用 SSH Key 来验证）。这个时候只需设置一个密钥就行了。

## 解决方法

从github主页点击设置进入SSH and GPG keys

随后点击创建一个新的密钥"New SSH key"

随即显示出一个输入key的框。

但是没有Key呀，要从哪里找呢？找到需要上传的项目文件夹的根目录，右键Git Base Here，如图所示。

输入命令：ssh-keygen -t rsa -C "876818551@qq.com"
然后便一直猛击回车，有y/n的时候尽可能去翻译一下句子，而我下面这个y/n就是已经创有文件项目是否覆盖的意思。
接下来经过回车敲击后可以看到一个代码小图片，那就说明成功了。
接下来输入命令：cat ~/.ssh/id_rsa.pub
这个时候他便会弹出你的密钥。这个时候直接复制粘贴到刚刚那个GitHub设置密钥SSH的key上面然后保存即可。

Github上面的key创建完成后就可以执行git push --set-upstream origin master这条指令了。

\#为什么要用git push#
git push -u origin master 上面命令将本地的master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用git push了。

git push，默认只推送当前分支，这叫做simple方式。此外，还有一种matching方式，会推送所有有对应的远程分支的本地分支。Git 2.0版本之前，默认采用matching方法，现在改为默认采用simple方式。
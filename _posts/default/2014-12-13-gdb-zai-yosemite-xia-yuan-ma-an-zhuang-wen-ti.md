---
layout: post
title: "gdb在Yosemite下源码安装问题"
description: ""
category: default
tags: [mac,c]
---

在OS X中安装好Xcode后，发现terminal只有gcc命令，没有gdb。因为Apple采用了基于LLVM的编译器clang来替代gcc和llvm-gcc，用lldb来替代gdb。

虽然lldb用法和gdb相同，但是用习惯了gdb还是强迫自己装了一个。

在OS X中安装gdb有两种常见的方法：

1.使用MacPorts  
`$ sudo port install gdb-apple`  
`$ sudo ln -s /opt/local/bin/gdb-apple /usr/local/bin/gdb`

2.使用Homebrew  
`$ brew tap homebrew/dupes`  
`$ brew install gdb`  

由于网络的原因，通过这两个命令安装会非常慢。  
于是祭出大招，源码编译安装。

>下载gdb源码 ***[gdb-7.8.tar.gz](http://ftp.gnu.org/gnu/gdb/gdb-7.8.tar.gz)***

以下安装命令大家都很熟了：  
`$ tar -zxf gdb.tar.gz`  
`$ cd gdb`  
`$ ./configure`  
`$ make`  
`$ sudo make install`  

这时候会有问题，如果你升级过OS X为Yosemite的话会报一个ERROR：  
`'machine/setjmp.h' file not found`  
setjmp的作用是保存系统当前状态，所以setjmp.h在系统中肯定会有。

find一下：  
`$ mdfind -name 'setjmp.h'`  
得到结果：  
`/usr/include/setjmp.h`

原来setjmp.h在Yosemite中被加进了系统头文件库中。

可以通过修改gdb源码darwin-nat.c解决此问题：  
`- #include <machine/setjmp.h>`  
`+ #include <setjmp.h>`  
重新编译安装成功!

当使用gdb进行调试时，OS X不会开放对程序的完全控制，需要制作gdb的签名来获取对调试程序的完全控制权。制作gdb签名的方法可以自行google，照做即可。


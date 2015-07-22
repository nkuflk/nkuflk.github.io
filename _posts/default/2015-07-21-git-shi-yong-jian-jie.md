---
layout: post
title: "git使用简介(一)"
description: ""
category: default
tags: [git]
---

## what is git?
------
Linus 不爽没有一个免费的高效分布式代码托管系统，于是一周后，git诞生了

## why is git?
------
> * 分布式管理，无需依赖代码服务器进行开发
> * rebase始终保持改动位于主干最新点，无需重新拉分支合并
> * 每个人都可以独立的工作在自己的feature中，直到需要的时候进行合并
> * git提交方式属于合并提交，始终保持主干代码脉络清晰
> * 从任意一个版本，分支上继续衍生新的代码分支，完全自由管理
> * ... ...

工具无所谓好坏，但是git确实在开发效率，项目管理方面有巨大的优势。

## how to start git?
------
> 比起svn，git还是有一定的学习曲线的。但是过度阶段，只需要十来分钟，就能把一些简单的基本操作搞定。  

进入正题：  


##### 1.git初始化  
开始管理一个project代码，必须要有git仓库  
```
$ git init
```  
生成一个.git目录如下图
![git dir](https://github.com/nkuflk/nkuflk.github.io/raw/master/image/1.png?raw=true)

* config保存了当前project的一些配置  
* HEAD指向的分支即为当前分支  
* refs中保存了对project的提交记录  
* objects中存放的是git的blob对象，你可以通过 ``` $ git hash-object file``` 快速定位到一个文件在objects中的位置  

```
$ git remote add [name] [url]
```  
可以向config中添加一个远程仓库，提交代码时以指定的name为准  
```
$ git remote rm [name]
```  
删除一个config中的远程仓库

以上就可以初始化好一个git本地仓库  

当然，如果想获取已经有的git仓库，直接使用检出命令  
```
$ git clone [giturl]
```  
clone命令即可以克隆本地仓库也可以克隆远程仓库


##### 2.常用分支命令
```
$ git branch
```  
查看当前本地所有分支以及现在所在分支  
```
$ git branch -r
```  
查看所有远程分支

```
$ git branch [name]  
```  
创建一个新的分支  
```
$ git checkout [name]
```  
切换到另一个分支上

当然这两个步骤也可以同时进行  
```
$ git checkout -b [name]
```

```
$ git branch -d [name]
```  
删除一个分支（对于没有合并的分支无法删除，可以采用强制删除大法 -D)

```
$ git fetch
```  
获取remote最新版本到本地

```
$ git merge [name]
```  
可以将当前分支与name分支合并

```
$ git pull
```  
获取并合并分支，相当于fetch + merge，不推荐，会隐藏很多细节


#### 3.提交相关操作
提交第一步，将改动添加git索引  
```
$ git add [--all|name|.]
```  
将改动从索引中删除  
```
$ git rm [name]
```

然后可以提交至本地仓库  
```
$ git commit -m 'text'
```  
由于git是分布式的仓库，本地即为一个完整仓库，所以到此为止已经相当于svn的commit，只是没有将本地仓库和remote仓库同步  
```
$ git push [name]
```  
可以将本地仓库同步到remote

对于一些永远不想提交的文件，但是经常会存在于project中的，比如target以及一些临时文件等，可以指定一个“.gitignore”文件，里面写好不想提交的文件名或目录，如：xxx.xml, *,yaml, target/

> 至此为止，以上操作可以完全覆盖平时使用svn时候的操作了，作为svn到git之间的过度已经ok，本着太长没人看的原则，一些有趣的东西，如：rebase，git-flow，以及版本管理将在下一篇介绍

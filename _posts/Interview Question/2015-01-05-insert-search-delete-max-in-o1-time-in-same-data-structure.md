---
layout: post
title: "insert, search, delete, max in O(1) time in same data structure? "
description: ""
category: Interview Question
tags: [Amazon,DataStructure]
---

> How can you design a data structure that can do the following operations in O(1) time:
Insert, Delete, Search, Max which returns the maximum number

这是最近发现的一道Amazon的面试题

乍一看感觉挺简单，设计一个正确的hash函数即可实现insert, delete, search，可是仔细一想max操作却没办法O(1)实现

其实这道题目还是很有意思的，怎么证明delete操作和max操作不能在同一个数据结构里O(1)实现呢？

我们知道，正常情况下，排序的时间复杂度不会比O(NlogN)更好。如果存在一种数据结构可以使delete, max操作的时间复杂度同时为O(1)的话，那么可以做到在O(N)的时间复杂度内对一个无序数列进行排序（max一个，delete一个），所以这种数据结构不存在。

正常情况下是指在图灵机上设计这种data structure，由于图灵机由**一条**无线长的纸带，**一个**读写头，**一套**控制规则，**一个**状态寄存器组成，所以在图灵机上是无法实现的。

如果是对于非图灵机而言。我们可以指定N个处理器，每个处理器都存储一个数，并且使所有的处理器都是有序的。对于max操作，只需给最后一个处理器发消息拿到返回值。对于delete和search操作，只需给所有处理器发消息,对比是否和处理器存的值相同即可。对于insert操作，给所有处理器发送消息，处理器收到消息会判断是否比当前处理器上的数大，并且给右边的处理器发送消息，得到返回消息知道是否等于或小于右边处理器上的数，是的话在右边分配一个处理器插入该数字，否的话什么也不做。这样就可以在O(1)时间内完成insert, delete, search, max操作。

想完了感觉这题目的误导性十足，题目中的data structure就是一个烟雾弹，解决此题的关键就是能不能跳出图灵机的范围，甚至自己设计一种硬件结构也是可以解决这个问题的。

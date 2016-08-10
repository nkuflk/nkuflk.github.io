---
layout: post
title: "java8 Date Time Api"
description: ""
category: default
tags: []
---
### 为什么要抛弃之前的java.util.Date和java.util.Calendar？
* 属性可变，线程不安全
* 定义混乱，比如月份从0开始，8月是7
* 职责不明确，Date中承载了太多的功能

### 新Api的核心思想
* 不可变的属性，线程安全
* 符合领域驱动设计（Domain-Driven Design）原则

### Date Time Api

> LocalDate 没有时区概念的日期  
> LocalTime 没有时区概念的时间  
> LocalDateTime 没有时区概念的日期和时间

```java
// 使用默认时区时钟瞬时时间创建DateTime
LocalDateTime now = LocalDateTime.now();
// 创建2016-8-8 23:59:00
LocalDateTime fuck1 = LocalDateTime.of(2016, 8, 8, 23, 59);
// 创建可以精确到纳秒
LocalDateTime fuck2 = LocalDateTime.of(2016, 8, 8, 20, 50, 58, 11);
// 创建日期对象
LocalDate fuck3 = LocalDate.of(2016, Month.AUGUST, 8);
// 创建时间17:18:00
LocalTime fuck4 = LocalTime.of(17, 18);
// 创建时间10:15:30
LocalTime fuck5 = LocalTime.parse("10:15:30");
```

```java
// 每一次改变属性或者运算都会返回新的对象 
LocalDateTime past = now.withDayOfMonth(6).withYear(2015);
LocalDateTime fuck = past.plusWeeks(3).plus(3, ChronoUnit.WEEKS);
```

> ZonedDateTime 带有时区的日期和时间  
> ZoneOffset 一个时区和格林威治之间的偏移量  
> ZoneId 一个区域的标识码

```java
// 使用当前时区创建(2016-08-10T13:52:42.655+08:00[Asia/Shanghai])
ZonedDateTime now = ZonedDateTime.now();
// 获取某个区域的id
ZoneId id = ZoneId.of("Europe/Paris");
// 获取指定时区的当前时间
ZonedDateTime fuck = ZonedDateTime.now(id);
// 获取ZonedDateTime的偏移量
ZoneOffset offset1 = now.getOffset();
ZoneOffset offset2 = fuck.getOffset();
```

> Period 表示一段时间轴（日期）  
> Duration 表示一段时间轴（时间）

```java
// 表示三年两个月零一天
Period period = Period.of(3, 2, 1);
LocalDate newDate = oldDate.plus(period);
// 表示三秒五纳秒
Duration duration = Duration.ofSeconds(3, 5);
```

### 和数据库类型对应

 sql | java 
-----------|----------------
 date	   | LocalDate
 time	   | LocalTime
 timestamp | LocalDateTime

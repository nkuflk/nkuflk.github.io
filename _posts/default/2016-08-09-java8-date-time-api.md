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
// 2016-08-10T13:47:43.069
System.out.println(now);

// 创建2016-8-8 23:59:00
LocalDateTime fuck1 = LocalDateTime.of(2016, 8, 8, 23, 59);
// 2016-08-08T23:59
System.out.println(fuck1);

// 创建可以精确到纳秒
LocalDateTime fuck2 = LocalDateTime.of(2016, 8, 8, 20, 50, 58, 11);
// 2016-08-08T20:50:58.000000011
System.out.println(fuck2);

// 创建日期对象
LocalDate fuck3 = LocalDate.of(2016, Month.AUGUST, 8);
// 2016-08-08
System.out.println(fuck3);

// 创建时间17:18:00
LocalTime fuck4 = LocalTime.of(17, 18);
// 17:18
System.out.println(fuck4);

// 创建时间10:15:30
LocalTime fuck5 = LocalTime.parse("10:15:30");
// 10:15:30
System.out.println(fuck5);
```

```java
LocalDateTime past = now.withDayOfMonth(6).withYear(2015);
// 2015-08-06T13:47:43.069
System.out.println(past);

LocalDateTime fuck = past.plusWeeks(3).plus(3, ChronoUnit.WEEKS);
// 2015-09-17T13:47:43.069
System.out.println(fuck);

// 通过查看源码，发现每一次运算都返回新的对象，不影响之前对象的属性值
private LocalDateTime with(LocalDate newDate, LocalTime newTime) {
	if (date == newDate && time == newTime) {
		return this;
	}
	return new LocalDateTime(newDate, newTime);
}
```

> ZonedDateTime 带有时区的日期和时间  
> ZoneOffset 一个时区和格林威治之间的偏移量  
> ZoneId 一个区域的标识码

```java
// 使用当前时区创建
ZonedDateTime now = ZonedDateTime.now();
// 2016-08-10T13:52:42.655+08:00[Asia/Shanghai]
System.out.println(now);

// 获取某个区域的id
ZoneId id = ZoneId.of("Europe/Paris");
// Europe/Paris
System.out.println(id);

// 获取指定时区的当前时间
ZonedDateTime fuck = ZonedDateTime.now(id);
// 2016-08-10T13:56:14.330+02:00[Europe/Paris]
System.out.println(fuck);

// 获取ZonedDateTime的偏移量
ZoneOffset offset1 = now.getOffset();
// +08:00
System.out.println(offset1);

ZoneOffset offset2 = fuck.getOffset();
// +02:00
System.out.println(offset2);
```

> Period 表示一段时间轴（日期）  
> Duration 表示一段时间轴（时间）

```java
// 表示三年两个月零一天
Period period = Period.of(3, 2, 1);
// P3Y2M1D
System.out.println(period);

LocalDate newDate = oldDate.plus(period);
// 2019-10-11
System.out.println(newDate);

// 表示三秒五纳秒
Duration duration = Duration.ofSeconds(3, 5);
// PT3.000000005S
System.out.println(duration);
```

### 和数据库类型对应

sql | java 
-----------|----------------
date	   | LocalDate
time	   | LocalTime
timestamp | LocalDateTime

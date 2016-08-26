---
layout: post
title: "java8 lambda"
description: ""
category: default
tags: []
---

平时写lisp，python，ruby甚至c++时，需要一个函数，但是又不想专门写一个函数，也不想费劲的给这个函数起名字，就可以用到lambda表达式，即函数式编程  

jdk8中也引入了这个特性  

> * 基础用法

```java
new Thread(new Runnable() {
	@Override
	public void run() {
		System.out.println("fuck");
	}
}).start();
```

```java
new Thread(() -> System.out.println("fuck lambda")).start();
```

下面这段代码的作用和上面完全相同，但是代码量减少了很多，而且可读性很高

> * 为lambda表达式传参

```java
List<String> fuck = Arrays.asList("1", "2", "3");
for (String s : fuck) {
	System.out.println(s);
}
```

```java
fuck.forEach(n -> System.out.println(n));
```

```java
fuck.forEach(System.out::println);
```

> * 结合函数使用

```java
List<Integer> fuck = Arrays.asList(1, 2, 3, 4, 5);

print(fuck, (i) -> i.equals(5));
print(fuck, (i) -> (Integer)i > 3);

void print(List<Integer> fuck, Predicate predicate) {
	for (Integer one : fuck) {
		if (predicate.test(one)) {
			System.out.println(one);
		}
	}
}
```

```java
List<Integer> fuck = Arrays.asList(1, 2, 3, 4, 5);

Predicate<Integer> greaterThan2 = (n) -> n > 2;
Predicate<Integer> lessThan4 = (n) -> n < 4;

fuck.stream().filter(greaterThan2.and(lessThan4)).forEach(System.out::println);
```

java8中新增java.util.function包,里面都是函数式接口，大多数都可以结合lambda使用

```java
List<Integer> fuck = Arrays.asList(1, 2, 3, 4, 5);
fuck = fuck.stream().filter(x -> x > 2).collect(Collectors.toList());
```

结合Collectors实现对list的值过滤

```java
List<String> fuck = Arrays.asList("a", "b", "c", "d", "e");
String lalala = fuck.stream().map(x -> x.toUpperCase()).collect(Collectors.joining("-_-"));
```

进行字符串的大写转换并用-_-连接

> * 大神说

[为什么引入Lambda](https://dzone.com/articles/why-we-need-Lambda-expressions)  
[对于java架构最强大的提升](https://blogs.oracle.com/javaone/entry/the_javaone_2013_technical_keynote)


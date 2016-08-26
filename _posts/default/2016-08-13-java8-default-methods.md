---
layout: post
title: "java8 default methods"
description: ""
category: default
tags: []
---
```java
public interface Iterable<T> {
	...
	...
	default void forEach(Consumer<? super T> action) {
		Objects.requireNonNull(action);
		for (T t : this) {
			action.accept(t);
		}
	}

	default Spliterator<T> spliterator() {
		return Spliterators.spliteratorUnknownSize(iterator(), 0);
	}
}
```

这是一段Iterable接口中在jdk8新增的两个方法

```java
public class Test implements Iterable {
    public Iterator iterator() {
        return this.iterator();
    }
}
```

这是我对Iterable接口的实现  
编译一下，发现Test类中没有实现两个default方法，而编译器并没有报错

### 为什么增加default方法

> * 可以在不破坏现有架构的同时发布新特性
> * 使Lambda表达式可以结合之前的类库使用

### 与abstract class的区别

> * 抽象类只可以继承一个
> * 接口可以实现多个

```java
interface A {
    default void test() {
        System.out.println("a");
    }
}

interface B {
    default void test() {
        System.out.println("b");
    }
}

public class Test implements A, B {
}
```

编译发现Test类报错了  

仅当实现了两个或者两个以上的同名同参default方法时,需要实现类对这个方法进行重新实现

```java
public class Test implements A, B {
    public void test() {
        A.super.test();
    }
}
```

### 总结
当提供的接口被多个类实现，这时候你提供的新特性并不是所有实现类都关心，可以采用default方法来进行兼容

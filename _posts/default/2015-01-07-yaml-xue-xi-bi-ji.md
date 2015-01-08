---
layout: post
title: "yaml学习笔记"
description: ""
category: default
tags: [Configuration]
---

>Yaml是一种号称超越了xml和json的数据序列化格式语言。最近在python和java中使用yaml发现它真的很方便，足够让你对其他格式语言说“不”。

><pre><code>
---
# test yaml file
User:
	name:  flk
	birth: 1992-06-30
	email: [heyuntao789789@163.com, nkuflk@gmail.com]
	friends:
		- name: a
		  age: 20
		  desc: |
			1234567890
		- name: b
		  age: 21
		  desc: |
			0987654321
...
---
</code></pre>

>上面这个yaml文件几乎包含了所有yaml语法，没有学过的人也可以毫无压力的看懂是什么意思，完全符合人类的阅读习惯。

>yaml以---开头，另一个---结尾，如果想使用流式处理可以用...结尾。yaml中支持Mappings (hashes/dictionaries)，以：形式体现；支持Sequences (arrays/lists)，以-或者[]形式体现；还支持Scalars (strings/numbers)。用#表示注释，&和*表示引用，！！表示指定格式。以上就是yaml的全部语法。

>可以看到，yaml拥有很好的扩展性和交互性，可以支持实现语言的常见数据结构，并可以通过组合构造自己的数据结构。

>除了简洁的写法和良好的阅读性，yaml与各种编程语言之间的交互也非常简单。

><pre><code>
Python:
	#read
	stream = file('xxx.yaml', 'r')
	data = yaml.load(strem)
	#write
	yaml.dump(data, stream)  #data is a dict
Java:
	//read
	File file = new File("xxx.yaml");
	Object data = (Object) Yaml.load(file);
	//write
	Yaml.dump(data, file)
</code></pre>

>除上述方法之外，在java中，yaml还可以序列化javabean，还可以读入java的自定义class。比如定义了一个Person类，那么可以通过```Person p = Yaml.loadType(file, Person.class)```的方式直接用yaml中得数据构造class。

>在yaml使用过程中，唯一略有缺陷的地方就是各个语言之间的yaml交互。比如python读取yaml的[]形式的Sequences支持yaml中有换行，而java中不支持。比如用python将一个很长的list给dump出来，让java使用，需要在python dump的时候不指定换行才ok。

>链接：  
***[JYaml](http://www.ibm.com/developerworks/cn/xml/x-cn-yamlintro/index.html)***  
***[Yaml对各语言的支持](http://www.yaml.org/)***  

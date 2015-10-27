---
layout: post
title: "django models字段类型"
description: ""
category: default
tags: []
---
最近重拾django, 发现版本已经来到了1.8.5，许多理念都不同于之前用的1.4版本。但是在Models的数据类型上面，变动不是很大，于是做个总结，方便以后查阅。

 django | sqlite3 | mysql 
--------------------------|-----------------|----------------------
AutoField                 |integer	        |integer AUTO_INCREMENT
BinaryField               |BLOB             |longblob              
BooleanField              |bool             |bool                  
CharField                 |varchar          |varchar               
CommaSeparatedIntegerField|varchar          |varchar               
DateField                 |date             |date                  
DateTimeField             |datetime         |datetime              
DecimalField              |decimal          |numeric               
DurationField             |bigint           |bigint                
EmailField                |varchar          |varchar               
FileField                 |varchar          |varchar               
FilePathField             |varchar          |varchar               
FloatField                |real             |double precision      
IntegerField              |integer          |integer               
BigIntegerField           |bigint           |bigint                
IPAddressField            |char(15)         |char(15)              
GenericIPAddressField     |char(39)         |char(39)              
NullBooleanField          |bool             |bool                  
PositiveIntegerField      |integer unsigned |integer UNSIGNED      
PositiveSmallIntegerField |smallint unsigned|smallint UNSIGNED     
SlugField                 |varchar          |varchar               
SmallIntegerField         |smallint         |smallint              
TextField                 |text             |longtext              
TimeField                 |time             |time                  
UUIDField                 |char(32)         |char(32)              

> #### AutoField
> * class AutoField(**options)  
> * 表示一个自动增长的ID，如果没有指定，会默认为model的主键

> #### BinaryField
> * class BinaryField([**options])  
> * 用来存储二进制码

> #### BooleanField
> * class BooleanField(**options)  
> * bool类型，可以使用default字段指定默认值

> #### CharField
> * class CharField(max_length=None[, **options])  
> * 存储字符串，通过max_length（必填）指定可存储最大长度

> #### CommaSeparatedIntegerField
> * class CommaSeparatedIntegerField(max_length=None[, **options])  
> * 用逗号作为分隔符的整数字段，通过max_length（必填）指定最大长度

> #### DateField
> * class DateField([auto_now=False, auto_now_add=False, **options])  
> * 数据库的date类型，auto_now选项可以自动更新为当前时间，auto_now_add可以在创建时自动插入当前时间

> #### DateTimeField
> * class DateTimeField([auto_now=False, auto_now_add=False, **options])  
> * 数据库的datetime类型，参数同DateField

> #### DecimalField
> * class DecimalField(max_digits=None, decimal_places=None[, **options])  
> * 存储十进制的浮点数，max_digits用来指定该浮点数的最大位数，decimal_places表示小数点后的位数，decimal_places必须小于等于max_digits

> #### DurationField
> * class DurationField([**options])  
> * 存储一个时间段的毫秒数

> #### EmailField
> * class EmailField([max_length=254, **options])  
> * 存储Email地址，django会校验其合法性

> #### FileField
> * class FileField([upload_to=None, max_length=100, **options])
> * 文件上传字段，upload_to用于指定本地文件系统路径

> #### FilePathField
> * class FilePathField(path=None[, match=None, recursive=False, max_length=100, **options])  
> * 储存文件在系统中的特定路径，path为必选参数，用于指定绝对路径，match为可选参数，用于匹配文件名，recursive为可选，用于指定是否包含子目录

> #### FloatField
> * class FloatField([**options])  
> * 使用python的float类型储存一个实数

> #### IntegerField
> * class IntegerField([**options])  
> * 表示整数类型，范围从-2147483648 到 2147483647

> #### BigIntegerField
> * class BigIntegerField([**options])  
> * 表示64位整数，范围从-9223372036854775808 到 9223372036854775807

> #### IPAddressField
> * class IPAddressField([**options])  
> * 用于存储ip地址

> #### GenericIPAddressField
> * class GenericIPAddressField([protocol=both, unpack_ipv4=False, **options])  
> * 可用于存储ipv6的地址，protocol可以为('both', 'IPv4', 'IPv6')

> #### NullBooleanField
> * class NullBooleanField([**options])  
> * 类似于BooleanField，但是允许为NULL

> #### PositiveIntegerField
> * class PositiveIntegerField
> * 存储32位整数的正值，范围从0 到 2147483647

> #### PositiveSmallIntegerField
> * class PositiveSmallIntegerField([**options])
> * 存储16位整数的正值，范围从0 到 32767

> #### SlugField
> * class SlugField([max_length=50, **options])  
> * 存储url，用于代替url中的一些特殊字符

> #### SmallIntegerField
> * class SmallIntegerField([**options])  
> * 存储16位整数，范围从-32768 到 32767

> #### TextField
> * class TextField([**options])  
> * 用于存储长文本

> #### TimeField
> * class TimeField([auto_now=False, auto_now_add=False, **options])  
> * 时间字段，对应数据库time类型

> #### UUIDField
> * class UUIDField([**options])  
> * 存储通用的唯一id

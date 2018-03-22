# Python
标签： Python

---

[TOC]

## 1 - Python简介

## 2 - 安装Python

## 3 - 第一个Python程序

## 4 - Python基础

### 4-4 条件判断

```python
    if <条件判断1>:
        <执行1>
    elif <条件判断2>:
        <执行2>
    elif <条件判断3>:
        <执行3>
    else:
        <执行4>
```

### 4-5 循环

#### range()函数

生成整数序列：`range()`函数，再通过`list()`函数可以转换为list : 

```Python
>>> list(range(5))
[0, 1, 2, 3, 4]
```

#### break语句

在循环中，`break`语句可以提前退出循环。

#### continue语句

在循环过程中，也可以通过`continue`语句，跳过当前的这次循环，直接开始下一次循环。



## 5 - 函数

### 5 - 2 定义函数

#### 导入函数

如果你已经把`my_abs()`的函数定义保存为`abstest.py`文件了，那么，可以在该文件的当前目录下启动Python解释器，用`from abstest import my_abs`来导入`my_abs()`函数，注意`abstest`是文件名（不含.py扩展名）

#### 空函数

如果想定义一个什么事也不做的空函数，可以用`pass`语句

#### 参数检查

数据类型检查可以用内置函数`isinstance()`实现：

```python
def my_abs(x):
    if not isinstance(x, (int, float)):
        raise TypeError('bad operand type')
    if x >= 0:
        return x
    else:
        return -x
```

添加了参数检查后，如果传入错误的参数类型，函数就可以抛出一个错误：

```python
>>> my_abs('A')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 3, in my_abs
TypeError: bad operand type
```

### 5 - 3 函数的参数

#### 位置参数

```python
def power(x, n):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s
```

`power(x, n)`函数有两个参数：`x`和`n`，这两个参数都是**位置参数**，调用函数时，传入的两个值按照位置**顺序依次**赋给参数`x`和`n`。

#### 默认参数

设置默认参数时，有几点要注意：
1. 必选参数在前，默认参数在后，否则Python的解释器会报错；
2. 如何设置默认参数：当函数有多个参数时，把变化大的参数放前面，变化小的参数放后面。变化小的参数就可以作为默认参数。

使用默认参数有什么好处？最大的好处是能降低调用函数的难度。

**定义默认参数要牢记一点：默认参数必须指向不变对象！**

#### 可变参数

在Python函数中，还可以定义可变参数。顾名思义，可变参数就是传入的**参数个数**是**可变的**，可以是1个、2个到任意个，还可以是0个,可变参数在函数调用时自动组装为一个`tuple`。

#### 关键字参数

关键字参数允许你传入0个或任意个含参数名的参数，这些关键字参数在函数内部自动组装为一个`dict`。


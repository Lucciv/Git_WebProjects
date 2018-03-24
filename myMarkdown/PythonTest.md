# Python作业

[TOC]

## 1 - Python简介

## 2 - 安装Python

## 3 - 第一个Python程序

## 4 - Python基础

## 5 - 函数

### 5 - 2 定义函数

```python
import math

def myquadratic(a, b, c):
    ader = b**2 - 4 * a * c
    if ader > 0:
        x1 = (-b + math.sqrt(ader)) / (2 * a)
        x2 = (-b - math.sqrt(ader)) / (2 * a)
        return x1, x2
    elif ader == 0:
        x1 = x2 = -b / 2 * a
        return x1, x2
    elif a == 0:
        x = -c / b
        return x
    else:
        return('此方程无解')

if myquadratic(2, 3, 1) != (-0.5, -1.0):
    print('测试失败')
elif myquadratic(1, 3, -4) != (1.0, -4.0):
    print('测试失败')
else:
    print('测试成功')
```

### 5 - 3 函数的参数

## 6 - 高级特性

### 切片

利用切片操作，实现一个trim()函数，去除字符串首尾的空格，注意不要调用str的`strip()`方法：
```python
def trim(s):
    if s[:1] == ' ':
        return trim(s[1:])
    if s[-1:] == ' ':
        return trim(s[:-1])
    return s

# 测试:
if trim('hello  ') != 'hello':
    print('测试失败!')
elif trim('  hello') != 'hello':
    print('测试失败!')
elif trim('  hello  ') != 'hello':
    print('测试失败!')
elif trim('  hello  world  ') != 'hello  world':
    print('测试失败!')
elif trim('') != '':
    print('测试失败!')
elif trim('    ') != '':
    print('测试失败!')
else:
    print('测试成功!')
```
### 迭代

请使用迭代查找一个list中最小和最大值，并返回一个tuple：

```python
def findMinAndMax(L):
    # 检查数据类型
    if not isinstance(L, list):
        print('数据类型错误')
        return L
    # 检查是否为空列表
    elif len(L) == 0:
        return(None, None)
    # 若list里只有一个元素，返回初始定义的最大最小数值
    elif len(L) == 1:
        return(L[0], L[0])
    # 多于一个元素，遍历列表查找最小，最大值
    else:
        min = L[0]
        max = L[0]
        for i in L:
            if min > i:
                min = i
            if max < i:
                max = i
        return (min, max)

# 测试
if findMinAndMax([]) != (None, None):
    print('测试失败!')
elif findMinAndMax([7]) != (7, 7):
    print('测试失败!')
elif findMinAndMax([7, 1]) != (1, 7):
    print('测试失败!')
elif findMinAndMax([7, 1, 3, 9, 5]) != (1, 9):
    print('测试失败!')
else:
    print('测试成功!')
```

### 列表生成式

如果list中既包含字符串，又包含整数，由于非字符串类型没有`lower()`方法，所以列表生成式会报错：

```
>>> L = ['Hello', 'World', 18, 'Apple', None]
>>> [s.lower() for s in L]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 1, in <listcomp>
AttributeError: 'int' object has no attribute 'lower'
```

使用内建的`isinstance`函数可以判断一个变量是不是字符串：

```python
>>> x = 'abc'
>>> y = 123
>>> isinstance(x, str)
True
>>> isinstance(y, str)
False
```

请修改列表生成式，通过添加`if`语句保证列表生成式能正确地执行：

```python
L1 = ['Hello', 'World', 18, 'Apple', None]
L2 = [s.lower() for s in L1 if isinstance(s, str)]

# 测试:
print(L2)
if L2 == ['hello', 'world', 'apple']:
    print('测试通过!')
else:
    print('测试失败!')
```


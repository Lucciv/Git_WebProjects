# Python作业

[TOC]

## 1 - Python简介

## 2 - 安装Python

## 3 - 第一个Python程序

## 4 - Python基础

### 4-4-条件循环

##### 练习

小明身高1.75，体重80.5kg。请根据BMI公式（体重除以身高的平方）帮小明计算他的BMI指数，并根据BMI指数：

* 低于18.5：过轻
* 18.5-25：正常
* 25-28：过重
* 28-32：肥胖
* 高于32：严重肥胖

用`if-elif`判断并打印结果：

```python
height = float(input("your height:(ex: 1.85) "))
weight = float(input("your weight:(ex: 80.5) "))
bmi = weight / (height**2)
if bmi < 18.5:
    print("你的BMI指数：%.2f 过轻" % bmi)
elif 18.5 < bmi < 25:
    print("正常")
    print("你的BMI指数：%.2f 正常" % bmi)
elif 25 < bmi < 28:
    print("你的BMI指数：%.2f 过重" % bmi)
elif 28 < bmi < 32:
    print("你的BMI指数：%.2f 肥胖" % bmi)
else:
    print("你的BMI指数：%.2f 严重肥胖" % bmi)
```



## 5 - 函数

### 5 - 2 定义函数

##### 作业

请定义一个函数`quadratic(a, b, c)`，接收3个参数，返回一元二次方程：

`ax2 + bx + c = 0`

的两个解。

提示：计算平方根可以调用`math.sqrt()`函数：

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# L5_2_二元一次方程
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

print('myquadratic(2, 3, 1) =', myquadratic(2, 3, 1))
print('myquadratic(1, 3, -4) =', myquadratic(1, 3, -4))

if myquadratic(2, 3, 1) != (-0.5, -1.0):
    print('测试失败')
elif myquadratic(1, 3, -4) != (1.0, -4.0):
    print('测试失败')
else:
    print('测试成功')
```

### 5 - 3 函数的参数
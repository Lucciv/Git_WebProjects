# Git

[TOC]

## Git简介

## 安装Git

## 创建版本库

通过`git init`命令把这个目录变成Git可以管理的仓库：

```
$ git init
Initialized empty Git repository in /Users/michael/lucciv/myGitHub/.git/
```

`.git`这个目录是Git来跟踪管理版本库的，如果你没有看到`.git`目录，那是因为这个目录默认是隐藏的，用`ls -ah`命令就可以看见。

用命令`git add`告诉Git，把文件添加到仓库：

```
$ git add readme.txt
```


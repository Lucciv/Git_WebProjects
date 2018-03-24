# HTML+CSS
[TOC]
## 1. 多行文字垂直居中
`HTML`代码：
```html
<div class="govbox">
  <a class="govGeTx" href="#" target="_blank">
      <span>测试文字测试文字测试文字测试文字测试文字文字测试文字测试</span>
  </a>
</div>
```
 `CSS`代码：
  ```css
.govGeTx
{
    line-height: 116px;
    display: block;
    width: 440px;
    height: 116px;
    padding: 0 30px;
    text-align: center;
    border-top: 4px solid #decea5;
    background-color: #f0e9d5;
}
.govGeTx span
{
    line-height: 22px;
    display: inline-block;
    vertical-align: middle;
}
  ```

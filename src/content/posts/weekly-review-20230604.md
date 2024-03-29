---
title: '周报#7 耳朵伤病、被 uni-app 折磨'
pubDate: 2023-06-04
description: '夏天风，又回来了。'
author: 'Loongphy'
cover:
    url: 'https://github.com/Loongphy/blog/assets/42089082/a7fc10e1-64c7-4f74-b8bb-9a98fba067e8'
    square: 'https://github.com/Loongphy/blog/assets/42089082/a7fc10e1-64c7-4f74-b8bb-9a98fba067e8'
    alt: 'cover'
tags: ["周报"] 
theme: 'light'
featured: true
---

回来了，看了看上次周报时间，想不到已经一个半月没写了。生活终于重回了正轨，失而复得的分享欲也回来了。至于原因，也许会出现在第一个月报里。

本周过得还是挺艰难的，身体抱恙，工作上与 uni-app 斗智斗勇。

## 生活

周二起床左耳感觉被堵住了一样，而且还有嗡嗡的声音，并不像耳鸣那样尖锐，尝试掏耳朵也没有任何好转。

由于上个月跑医院太勤，这周懒得去了，于是就拖到了周末。本来预约了周日，但周六实在顶不住耳朵闷堵加上持续的异响就跑去了医院，结果挂号满了又只好回家。万万没想到，我最终还是康复了。

周日起床后，突然发现耳朵自己好了！为了保险起见还是去了医院，经过简单的问诊发现没问题，医生说可能自愈了，建议工作日做一个听力检查。

可能年纪大了，今年似乎病痛更多了。不过，这也可能这两年睡眠不足导致的。

提到睡眠，经过一个月的调整，本周的睡眠还不错，都能稳定在8小时以上了，梦回18😭

经过了漫长的等待（摆烂），终于迎来了盛夏，天气热起来了，我终于鼓起斗志开始跑步，最近保持每天5KM的量，得益于本周耳朵的健康问题，我戒掉了戴耳机跑步的习惯，RIP LinkBuds🥹

![跑步记录](https://github.com/Loongphy/blog/assets/42089082/9db02fa9-4efc-4d41-8bd7-5593084d0ed9)

跑步也确实不太适合戴耳机，因为运动起来噪音挺大的，想要听清楚就得调高音量。至于降噪耳机、骨传导之类，前者侵入式的设计对我这种油耳实在无法适应，而且长时间佩戴可能会造成耳道感染或炎症。后者漏音挺严重，更遑论音质了，感觉图一乐。

## 工作

啊啊啊啊啊啊啊啊啊啊，uni-app 我杀你一千遍都不够啊！

> `uni-app` 是一个使用 **[Vue.js](https://vuejs.org/)** 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。
> 

uni-app 优点在于只需要前端知识就能写原生App了（骗你的🤡），缺点就是你需要对各类系统做适配，就我个人经验来看，Android 上能正常运行，iOS 一般不会出太大问题，反倒是小程序问题很大。

还有一个很大的问题就是文档太过零散，你需要慢慢「挖掘」🤡，善用内置的搜索系统翻其他开发者的问答。

本周在为原有的 App 做一个 Android原生插件，这里特别感谢 ChatGPT！我对 Android 的掌握程度仅限于大学课程作业，开发期间遇到的问题只能询问 ChatGPT，没它我还真完成不了开发任务。

期间遇到最恶心的是 uni-app 文档描述不够清晰，很多注意事项没有在文档里说明，必须得结合网上的博客才能走完插件的开发步骤，这也是 uni-app 开发目前最为诟病的。之前逛 [V 站](https://v2ex.com)的时候总有人吐槽 uni-app BUG 太多，但我觉得还正常，只要你别追 Vue 生态和 uni-app 的最新版本，BUG 相比很少会碰到。毕竟，我可是将 App 从 Vue2 升到 Vue3 的（叉腰😎）。

## ChatGPT

热潮过后，很多人倒没以前那么吹捧 AI 了，我觉得这是一件好事，目前的 AI 就是扮演一个工作助手，它的强弱完全取决于主人的能力：Prompt + 思考 + 迭代。

拿我这周开发这个插件为例，其中我遇到一个很棘手的 BUG，原生 DEMO 可以正常运作，但 uni-app 上跑不起来。我抽象了关键 API，描述了问题原因，让 ChatGPT 帮我胡乱发散，生成黑盒代码，根据代码思考最终解决了问题。

你知道「[小黄鸭调试法](https://www.freecodecamp.org/chinese/news/rubber-duck-debugging)」吗？

> 这个故事描述了一个程序员如何带着一只橡皮鸭子，在遇到错误的时候逐行向它解释他的代码。
> 

> 当你向橡皮鸭子解释关于代码的一切时，你就更有可能发现隐藏在那里的错误。
> 

目前的 ChatGPT 就像「橡皮小黄鸭」，但它更强大，能回答你的问题。面对陌生领域时，它又像一位老师，尽管这个老师满嘴跑火车，但它还是能给你启发，帮你找找问题。

## One More Thing

头发已经能够扎起小辫子了🎉
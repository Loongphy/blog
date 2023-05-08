---
title: '周报#2 懒狗的自我修养'
pubDate: 2023-02-19
description: '忙啊忙，我也不知道在忙些啥🤔'
author: 'Loongphy'
cover:
    url: 'https://user-images.githubusercontent.com/42089082/236729705-0d25809f-3c75-410e-b7c6-1524014e5c90.png'
    square: 'https://user-images.githubusercontent.com/42089082/236729705-0d25809f-3c75-410e-b7c6-1524014e5c90.png'
    alt: 'cover'
tags: ["周报", "编程"] 
theme: 'light'
featured: true
---

上周的周报花费了太多无意义的时间，因此这周一直在思考如何最大程度地节省时间。

## 当前问题

我一直都是在Notion中创作，然后发布到微信公众号（国内备份）和个人网站（总备份……仍在建设中⛑️），但发现效率很低。

1. 因为网络原因，Notion中图片无法在公众号中插入，所以我得在复制到公众号编辑器后，手动插入图片，由于我的图片大都是截图，没有存档，于是我还得去Notion下载原图然后插入公众号，十分繁琐耗时。
2. Notion文章同步到个人网站时，图片依旧是个问题，我需要将图片放到 `public` 文件夹下，然后根据相对路径手动引入图片，尽管已经有很多优秀Markdown编辑器能自动将文档和图片分类到对应文件夹，但图片存储依旧是个问题。

我需要一个简单的同步方案……Notion编辑完成，一键同步或者5分钟内手动同步到其他平台。

## 临时方案

目前较为简单的方式就是不加图片🤣，利用浏览器[Notion converter - 笔记转换工具 - Microsoft Edge Addons](https://microsoftedge.microsoft.com/addons/detail/notion-converter-%E7%AC%94%E8%AE%B0%E8%BD%AC%E6%8D%A2%E5%B7%A5%E5%85%B7/donmgcoapjphmanmlfhhgcnlkmikggdn)复制到微信公众号，然后通过Notion的Markdown导出同步到个人网站，这也是我目前尝试的。

新的问题出现了，这个插件目前存在两个的问题，其一是复制到微信公众号时是`Optima` 字体，字体排版很难符合我的审美，只能再手动调整全局字体。其二则是无法复制emoji🤪

差强人意吧，目前看到[微博Easy](https://weibo.com/1088413295)分享的自动化流程——**方糖2A1B实验**，给我打开了思路，也许可以从Mastodon方面做些文章，周报内容分享到Mastodon，然后每周自动整合成周报，期待下周的试验🥰

## 书籍分享

编程类书籍《Serverless核心技术和大规模实践》，Serverless科普书，内容尚可，后面都是介绍字节跳动自家的服务，对于我这个什么都不懂的小白来说足够了。嗯，也打消了我想要把一些服务落地到Serverless的想法。
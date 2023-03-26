---
title: '周报#4 写作工具流'
pubDate: 2023-03-26
description: '一直拖延一直爽，直到deadline火葬场'
author: 'Loongphy'
cover:
    url: 'https://raw.githubusercontent.com/Loongphy/blog/main/public/images/markus-winkler--fRAIQHKcc0-unsplash.jpg'
    square: 'https://raw.githubusercontent.com/Loongphy/blog/main/public/images/markus-winkler--fRAIQHKcc0-unsplash.jpg'
    alt: 'cover'
tags: ["周报"] 
theme: 'light'
featured: true
---

本来不打算写了，摸鱼刷 [xLog](https://xlog.app/activities) 新增的时间流动态，被一个博客吸引，写了一大段评论后，「写瘾」犯了😭

## 工作

本周比较清闲，没有太多产出，主要工作从开发变成了上线前测试和维护文档的撰写。我算是体会到了写文档的痛苦，但了解一个项目时没有文档是真的要骂娘的。

在工作交流上，我一直有个毛病没法改：经常会临时找同事改一些BUG，但具体的实现方式又是脑子里临时想出来的，没法保证可靠性，再加上缺乏有效的测试环境，导致有些问题经常会翻来覆去的修改。

目前采取的做法是通过飞书文档记录，并把对应的文档与多维表格中的项目管理绑定起来，方便溯源排查。

## 写作工作流

我目前有三个平台的数据需要同步输出：Notion、GitHub、微信公众号。

- Notion是我的主力写作编辑器，内容都是在这里创作的。体验过外面那些「搔首弄姿」的笔记软件后，我依旧会因为Notion简洁的外观和它强大的database，选择回归初心。
- GitHub属于文字的Markdown版备份，我在上面建立了一个[仓库](https://github.com/Loongphy/blog)，基于 [Astro](https://astro.build/) 搭建了个人博客网站，通过 [Vercel](https://vercel.com/) 部署
- 微信公众号属于数据备份，因为前两者国内直连体验都不好，所以用作同步盘。

之前将Notion写的文章同步到微信公众号时，我是直接复制，但体验很差，后来发现了[Notion converter - 笔记转换工具](https://microsoftedge.microsoft.com/addons/detail/donmgcoapjphmanmlfhhgcnlkmikggdn)，可以一键复制，体验极佳。

上周，我又发现了[墨滴](https://www.mdnice.com/)，提供了网页端编辑器和许多排版主题，对代码极其友好，还能预览在手机端的效果，同步微信公众号的问题终于完美解决。

但是，三个平台同步依旧有个很大的问题没解决：图片。因为前两者网络访问不好，所以用它们做图床，在微信公众号上图片几乎加载不出来，用微信公众号作图床，在公众号以外的平台图片又会被屏蔽。

经过取舍和最大化效率考量，最终的方案如下：

1. 在Notion写作，用到的图片上传到GitHub网页端编辑器，获取到返回的图片链接粘贴回Notion；
2. Notion写作完成，将所有图片上传到微信公众号素材库；
3. Notion内容复制到[墨滴](https://www.mdnice.com/)，排好版再复制到微信公众号，添加缺失的图片，完成！
---
layout: '../../layouts/MarkdownPost.astro'
title: '周报#3 重启、自愈'
pubDate: 2023-03-19
description: '终点固然璀璨乃至不朽，但沿途的平常风景亦是非常迷人'
author: 'Loongphy'
cover:
    url: 'https://raw.githubusercontent.com/Loongphy/blog/main/public/images/20230319231628.png'
    square: 'https://raw.githubusercontent.com/Loongphy/blog/main/public/images/20230319231628.png'
    alt: 'cover'
tags: ["周报", "个人成长"] 
theme: 'light'
featured: true
---

## 失败的源头

自从毕业后，突然失去了为之奋斗的目标，一方面是养成的懈怠心，一方面是由于太过焦虑而不知道做些什么，通过游戏和视频麻木躲避，一直到了今年初。

可能是受推特润学和失败学大师 [bboczeng](https://twitter.com/bboczeng) 的影响，再加上裁员之风盛行，内部矛盾愈演愈烈，自媒体满嘴谎言的歌舞升平宣传，我充斥着满满的厌恶，想要逃离这里，想要去看我心中的世界。

但很可惜，我没有那个能力。当欲望大于能力时，我意识到自己恐怕难以逃离这个囚笼，也无法成才了。

> 我心中曾经执剑的少年，此刻也混迹在市井之间。
> 

失败学的恐慌无时无刻不在我的脑子里到处乱串，尽管我依旧像平常一样上下班，也没有任何情绪上的波动，但我总有一种深深的无力与绝望。

## 自愈

我尝试了自我调节，不去关注互联网资讯，不去优秀的同龄人的信息，但效果依旧不是很好。很感谢相亲对象的邀约，吃了顿饭，也聊了些我的失败学。虽然安慰人的方式很直白、很失败（对不起（＞人＜；），我没有别的意思🥹但确实是这样），但这也给了我一个契机，一个观察真实内心的机会。

人总是会被自己无意识的想法缠绕，加上飞速的生活节奏，难以停下来审视自己真实的内心世界。通过一番谈话和自己模糊不清的失败学吐露，我知道，自己并不在意润不润得出去，在意的是自己被同龄人拉下太远了。

尽管对物质没有太多的追求，但内心的争强好胜依旧没被人生的两次失败所磨灭，只是两次失败让我失去了太多的资源，同龄人已将我完全甩开。我因此绝望，我因此懊恼，因此而逃避。幸好，我的自傲还在，我的学习能力尚可，我还年轻，我的未来依旧可期。

## 开源贡献

身为一个失败人士+菜🐶，这周破天荒地为 [arco-design](https://github.com/arco-design) 提了俩 PR，已经被合并了，成就感满满，做开源真实太开心啦🥰🥰🥰。

两个PR都很简单，一个是 [arco-plugins](https://github.com/Loongphy/arco-plugins)，它的默认图标前缀是空，导致引入时还需要增加一行配置，而我们使用图标时都是从网页上查找复制，它默认是有 `icon-` 前缀的，于是我就提了个默认前缀的 PR。

第二个PR是树组件（Tree）的一个 BUG 修复。起因是在实现限制选中的节点数量时，无法生效，通过 [vue-devtools](https://devtools.vuejs.org/) 查看组件事件，发现是更新`update:selectedKeys` 在 `select` 后面，导致 `select` 事件中更新 `selectedKeys` 依旧会被后续的 `update:selectedKeys` 改回原来的值，同样的问题还发生在 `check` 。

PR被合并后，我也不要脸地把 [arco-design-vue](https://github.com/arco-design/arco-design-vue) 固定到了个人 Profile🤣。

## GitHub Profile

参考了 **[pseudoyu](https://github.com/pseudoyu/pseudoyu)** 的模式，实现了将自己的博客文档自动同步到 Profile 仓库，同时利用 GitHub PAT (personal access token）实现了读取跑步仓库的私有文件。唯一遗憾的是，无法读取到微信读书的个人书架信息，只能每周手动更新了。

![GitHub Profile](https://raw.githubusercontent.com/Loongphy/blog/main/public/images/20230319231628.png)

## 生活总是不完美的

我总是去期待自己成为想要成为的、获得想要得到的再去想其他的事情，比如谈恋爱、结婚生子。但现实终究「事与愿违是常态」，一路走来，我因为自己的任性妄为，失去了太多本可以属于我的。因为自己内心的懦弱与自卑，也辜负了很多人的好心与付出，我很惭愧。

有人说，**生命是为了一生中那几次精彩时刻而活**，我也曾是这么认为，并想要为之奋斗。终点固然璀璨乃至不朽，但沿途的平常风景亦是非常迷人啊，愿活在当下！
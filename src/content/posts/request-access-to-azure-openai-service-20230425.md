---
title: 'Azure OpenAI Service 申请流程和注意事项'
pubDate: 2023-04-25
description: ''
author: 'Loongphy'
cover:
    url: 'https://github.com/Loongphy/blog/assets/42089082/5ebadd3f-7032-4f9c-90fc-e7f898c0ebd0'
    square: 'https://github.com/Loongphy/blog/assets/42089082/5ebadd3f-7032-4f9c-90fc-e7f898c0ebd0'
    alt: 'cover'
tags: ["玩物尚志", "ChatGPT"] 
theme: 'light'
featured: true
---

## 前情提要

![Twitter](https://user-images.githubusercontent.com/42089082/235349269-9e326887-c2ca-4bd1-bebd-9fb77ef2c2ed.png)

## 注册 Azure 账号

要申请 Azure OpenAI Service，首先需要一个 Azure 账号，点击 [https://azure.microsoft.com/zh-cn/](https://azure.microsoft.com/zh-cn/) 进行注册即可，这里注册的时候需要一个微软账号。也就是说，为了申请 OpenAI Service，你首先需要注册一个微软账号，然后再登录这个微软账号去开通 Azure，最后再去申请 OpenAI Service。

Azure 账号注册十分简单，填写内容不再赘述，按照要求填写即可，注意**需要绑定信用卡**才能注册成功，目前支持 VISA 和 MasterCard。

我使用的是虚拟信用卡，ChatGPT Plus 那里被拒绝了，这里很顺利。新号注册成功有 200美元的使用额度，不清楚能不能以此来白嫖 OpenAI Service。

## 申请 **Azure OpenAI Service**

Azure OpenAI Service 需要填写申请表单，经过审核后才能使用，这是申请链接 [https://aka.ms/oai/access](https://aka.ms/oai/access)。

由于审核很严格，所以建议**如实填写**（也不一定，我就假填了一项😉）。

根据 [https://v2ex.com/t/934490](https://v2ex.com/t/934490) 提供的信息，申请有两种方案：教育邮箱和企业邮箱，你可以按照自己的情况自行选择，我选的是后者。

如果企业邮箱申请没通过可以试试你的学生邮箱（如果还有的话🫡

表单内容我并不会一一讲解，这里挑几个重要的解释下，请一定要**认真阅读申请表单中的标红文字**，让我们开始吧~

根据 [fish](https://zhuanlan.zhihu.com/p/614242045) 的分享：申请表单是由微软总部处理的，因此申请表单内容**请使用英文填写**。

### 第3项

这里选择几个，第四项就要填几个，为了避免麻烦我选了 1。

### 第5项（重要）

标红注释已经说明：个人邮箱会被拒绝，因此一定要填教育或企业邮箱。假设此处填写 xxx@example.com。

### 第6项（重要）

这里需要填写公司名称，不知道公司英文名称的，可以利用「企查查」去查一下公司的工商信息，如下：

![查询公司英文名称](https://user-images.githubusercontent.com/42089082/235349282-32174442-757d-4ce3-861a-5250eb7ff53b.png)

下面几项地址信息没那么讲究，直接翻译成英文即可。

### 第12项（重要）

填写公司网站，还记得第五项里填写的邮箱地址吗，这里**需要与邮箱地址一致**，即此处需要为https://www.example.com。如果你的提供的网站信息与第6项公司信息对应不起来，可能也会失败。

曾看到有人说申请时需要企业邮箱、域名拥有者、公司名称「三码合一」，想必这也是卡住很多人的地方。

### 第13项

参考  [fish](https://zhuanlan.zhihu.com/p/614242045) 的分享，我认为打电话的几率不存在。因此我并未提供真实的电话，而是搜了一个本地的电信营业厅的电话填上去。

### 第14项

[fish](https://zhuanlan.zhihu.com/p/614242045) 就是这里挂掉了，不清楚这几个名词的可以自己查一下，嫌麻烦可以直接选 Other，然后填写自己公司经营的行业即可。

通常使用 Azure 的公司，都是做一些云服务产品的，因此我在这里填写的是 `SaSS Service Based Cloud Service` 。（感觉很怪😂

### 第17项

企业邮箱随意，教育邮箱填 Education。

### 第21项

看你地理位置，我选择 `East US`。

### 第22项

全选

### 第23&&25项

标红的不选，其余全选。

## 结语

恭喜你，终于填完了！

填完后**企业邮箱**会收到一封感谢信，告诉你会在10个工作日内回复申请，再过大概两小时会收到一个确认邮箱通知，点击邮件中的链接确认，等待通过吧🎉🎉🎉

教育邮箱和企业邮箱差不多，将企业信息换成学校就好，祝大家早日通过。至于如何使用，挖坑挖坑🥹
---
title: 'ChatGPT Prompt Engineering for Developers 笔记 '
pubDate: 2023-04-30
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
## 中文翻译视频

- https://www.bilibili.com/video/BV1s24y1F7eq
- https://learn.deeplearning.ai/chatgpt-prompt-eng/lesson/1/introduction

看完吴恩达的课程，总算对 Prompt 有一些系统性的认知了。

## 2-3 集

2-3 集还是蛮有用的，我之前的 Prompt 多少有些随意，导致结果不如人意。相信很多人都有这种问题，Prompt 更偏向于日常对话，更自然随意。需要重复对话多次修改才能得到满意的回答，但如果应用这两集提到的小技巧，可能就不需要修改那么多次。

1. 给予清晰的提示，清晰不代表简短
    - 善用分隔符，如 ```, """, < >, <tag> </tag>, :
    - 返回结构化的数据，如 HTML、JSON等。
    - 请求模型自己校验 Prompts 是否正确，不正确就不再执行。
    - 少量提示，提供预期示例，让模型模仿预期结果输出。
    
    通过指定分隔符，可以有效防止用户 Prompt 混入。
    
    将用户输入通过分隔符包裹，分隔符可根据随机生成：
    
    ```
    <{uuid}> {user input} </{uuid}>
    请根据 {uuid} 标签内的内容，some prompts
    ```
    
2. 给模型思考的时间
1）给出清晰的步骤，让模型按步骤解答
2）模型会回答听起来很有道理但实际上是错误的言论，想要减少这种行为的一个办法就是让模型：
    - 找到相关引用
    - 基于引用回答问题
    
    （这不就是 New Bing 干的吗
    
3. 迭代 Prompt 开发：Idea => Prompt 实现 => 实践 => 错误分析 如此循环。

## 4-6 集

4-6集更像是对前三集知识点的应用实践，可快速略过。

## 第7集

第7集倒是帮我理解了 temperature 的作用，如果你有留意过一些自建 GPT Web 的配置的话，可能会注意到一个 temperature 的配置，像 Azure OpenAI RestAPI 中也有类似的参数。它代表着随机性，越大回复越随机。对我来说，保持默认0，不管就行。

## 第 8 集

第 8 集就有意思了，告诉你如何搭建一个聊天机器人，看不懂 OpenAI API 文档的人有救了🤣
role分为 system，user 和 assistant。

- system 设定助手的行为和人设
- user 就是用户发送的消息，也就是你。
- assistant 是 GPT 返回的消息。

与模型的每次交互都是没有上下文记忆的，像 ChatGPT 那样有上下文记忆需要每次请求前把之前的记录都携带上，这就是为什么连续交流 Token 消耗会一直翻倍的原因。

## 参考

- [https://twitter.com/9hills/status/1652151966263570433](https://twitter.com/9hills/status/1652151966263570433?s=20)
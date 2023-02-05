# CMS使用说明

## 相关命令

name: cms

email: cms@juejin.com

password: cms123CMS

clone后首先init，首次启动前需要build，之后直接`pnpm run develop`即可，若有修改需要再次build，命令如下。

### `init`

```
yarn install
```

### `build`

```
yarn run build
```

### `develop`

```
yarn run develop
```

### `start`

```
yarn run start
```

## API接口

API的使用可参考官方文档，
[API文档](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html)。

*以下API说明的格式是：*

### API名

URL

API描述

- 字段名1；字段类型1；字段描述1
- 字段名2；字段类型2；字段描述2
- ...

*__注意__，描述外键时，m对n的意思是当前表的m个当前属性对应n个当前表项*

*例如，Article表的author属性，是User表的外键，表示为一对多*

*即，一个作者`author`，对应多个文章`Article`表项；而一篇文章，只能有一个作者*



### Advertisement

/api/advertisements

掘金小册的广告位置，一个表项就是一个广告

- title；短文本；广告标题
- cover；图片；广告封面
- show；bool；是否展示在首页

### Article

/api/articles

文章信息，一个表项就是一篇文章

- title；短文本；文章标题
- author；User表外键，一对多；文章作者
- type；Article Type表外键，一对多；文章分类tab
- digest；长文本；文章摘要，可选
- content；Markdown；文章内容
- createTime；时间字符串；文章发表时间
- readCnt；整数；阅读数，用于文章排序
- cover；图片；文章封面，可选
- comments：Comment表外键，多对一：文章的评论
- likeUsers：User表外键，多对多：给本文点赞的作者
- labels：Article Label表外键，多对多：文章的标签

### Article Label

/api/article-labels

文章标签，包括前端、后端、架构、算法、面试等

- label；短文本；标签名
- articles；Article表外键，多对多；该标签下的文章

### Article Type

/api/article-types

文章分类tab，显示在首页上部的文章分类，包括前端、后端、开发工具、代码人生等

- type；短文本；分类名
- articles；Article表外键，多对多；该分类下的文章
- level；整数；这个tab在前端页面中的顺序

### Badge

/api/badges

用户获得的徽章，包括“青训营·第五届”，“博览群文2022”等

- badge；短文本；徽章名
- users；User表外键，多对多，拥有此徽章的用户

### Comment

/api/comments

文章评论

- content；Markdown；评论内容
- author；User表外键，一对多；发表该评论的作者
- article；Article表外键，一对多；该评论所在的文章
- likeUsers：User表外键，多对多：给该评论点赞的作者


### Top Tab

/api/top-tabs

顶部tab，包括首页、沸点、课程等

- label；短文本；标签名
- key；整数；标签在前端页面的顺序
- remark；短文本；标签上的红色气泡，可选


### User

/api/users

用户表，也就是作者表

- username；短文本；用户名
- articles；Article表外键，多对一；该用户发表的所有文章
- job；短文本；对应掘金个人信息的职业
- description；短文本；对应掘金个人信息的自我介绍
- writerLevel；整数；对应掘金个人信息的创作等级
- juejinLevel；整数；对应掘金个人信息的掘友等级
- heat；整数；对应作者热度榜的顺序
- profile；图片；头像
- badges；Badge表外键，多对多；用户获得的徽章
- comments：Comment表外键，多对一：用户发表的评论
- likeArticles：Article表外键，多对多：用户点赞过的文章
- likeComments：Comment表外键，多对多：用户点赞过的评论





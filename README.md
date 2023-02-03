# CMS使用说明

## 相关命令
name: cms

email: cms@juejin.com

password: cms123CMS

clone后首先init，首次启动前需要build，之后直接`pnpm run develop`即可，若有修改需要再次build。

### `init`
```
pnpm install
```

### `develop`

```
pnpm run develop
```

### `start`

```
pnpm run start
```

### `build`

```
pnpm run build
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

### Advertisement

/api/advertisements

掘金小册的广告位置，一个表项就是一个广告

- title；短文本；广告标题
- cover；图片；广告封面
- show；bool；是否展示在首页

### Article

/api/advertisements

文章信息，一个表项就是一篇文章

- title；短文本；文章标题
- author；User表外键，一对多；文章作者
- labels；Article Type表外键，多对多；文章分类tab
- digest；长文本；文章摘要，可选
- content；Markdown；文章内容
- createTime；时间字符串；文章发表时间
- readCnt；整数；阅读数，用于文章排序
- cover；图片；文章封面，可选

### Article Type

/api/article-types

文章分类tab，包括前端、后端、开发工具、代码人生等

- label；短文本；标签名
- articles；Article表外键，多对多；该分类下的文章
- level；整数；这个tab在前端页面中的顺序

### Badge

/api/badges

用户获得的徽章，包括“青训营·第五届”，“博览群文2022”等

- badge；短文本；徽章名
- users；User表外键，多对多，拥有此徽章的用户

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
- articles；Article表外键，多对多；该用户发表的所有文章
- job；短文本；对应掘金个人信息的职业
- description；短文本；对应掘金个人信息的自我介绍
- writerLevel；整数；对应掘金个人信息的创作等级
- juejinLevel；整数；对应掘金个人信息的掘友等级
- heat；整数；对应作者热度榜的顺序
- profile；图片；头像
- badges；Badge表外键，多对多；作者获得的徽章





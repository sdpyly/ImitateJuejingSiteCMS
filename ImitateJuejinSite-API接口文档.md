# ImitateJuejinSite-API接口文档




#### Advertisement

> GET  /advertisements/{id}
##### 接口说明
> 掘金小册的广告位置，一个表项就是一个广告
##### 地址参数（Path Variable）
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id||传参则按照id返回列表，不传参则返回所有列表|
##### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| data|object||true||
|⇥ id|number||true||
|⇥ attributes|object||true||
|⇥⇥ title|string||true|广告标题|
|⇥⇥ cover|object||true|广告封面|
|⇥⇥ show|boolean||true|是否展示在首页|


#### Badge

> GET  /badges/{id}
##### 接口说明
> 用户获得的徽章
##### 地址参数（Path Variable）
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id||传参则按照id返回列表，不传参则返回所有列表|
##### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| data|array[object]||true||
|⇥ id|number||true||
|⇥ attributes|object||true||
|⇥⇥ badge|string||true|徽章名|
|⇥⇥ users|object||true|拥有此徽章的用户|


#### Top Tab

> GET  /top-tabs/{id}
##### 接口说明
> 顶部tab，包括首页、沸点、课程等
##### 地址参数（Path Variable）
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id||传参则按照id返回列表，不传参则返回所有列表|
##### 请求参数(Query Param)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|sort||Sort by attributes ascending (asc) or descending (desc)|
|pagination[withCount]||Return page/pageSize (default: true)|
|pagination[page]||Page number (default: 0)|
|pagination[pageSize]||Page size (default: 25)|
|pagination[start]||Offset value (default: 0)|
|pagination[limit]||Number of entities to return (default: 25)|
|fields||Fields to return (ex: title,author)|
|populate||Relations to return|
|filters||Filters to apply|
|locale||Locale to apply|
##### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| data|array[object]||true||
|⇥ id|number||true||
|⇥ attributes|object||true||
|⇥⇥ label|string||true|标签名|
|⇥⇥ key|int32||true|标签在前端页面的顺序|
|⇥⇥ remark|string||false|标签上的红色气泡|


#### Article

#### put/articles

> PUT  /articles/{id}
##### 接口说明
> 文章信息，一个表项就是一篇文章
##### 地址参数（Path Variable）
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id|||
##### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| data|object||true||
|⇥ title|string||true|文章标题|
|⇥ author|object|string or id|true|文章作者|
|⇥ type|object|string or id|true|文章分类tab|
|⇥ digest|string||false|文章摘要|
|⇥ content|string||true|文章内容|
|⇥ createTime|string||true|文章发表时间|
|⇥ readCnt|int32||true|阅读数|
|⇥ cover|object|string or id|false|文章封面|
|⇥ comments|array||true|文章的评论|
|⇥ likeUsers|array||true|给本文点赞的作者|
|⇥ labels|array||false|文章的标签|
##### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| data|object||true||
|⇥ id|number||true||
|⇥ attributes|object||true||
|⇥⇥ title|string||true|文章标题|
|⇥⇥ author|object||true|文章作者|
|⇥⇥ type|object||true|文章分类tab|
|⇥⇥ digest|string||false|文章摘要|
|⇥⇥ content|string||true|文章内容|
|⇥⇥ createTime|string||true|文章发表时间|
|⇥⇥ readCnt|int32||true|阅读数|
|⇥⇥ cover|object||false|文章封面|
|⇥⇥ comments|object||true|文章的评论|
|⇥⇥ likeUsers|object||true|给本文点赞的作者|
|⇥⇥ labels|object||true|文章的标签|


#### get/articles

> GET  /articles/{id}
##### 接口说明
> 文章信息，一个表项就是一篇文章
##### 地址参数（Path Variable）
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id||传参则按照id返回列表，不传参则返回所有列表|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| data|object||true||
|⇥ id|number||true||
|⇥ attributes|object||true||
|⇥⇥ title|string||true|文章标题|
|⇥⇥ author|object||true|文章作者|
|⇥⇥ type|object||true|文章分类tab|
|⇥⇥ digest|string||false|文章摘要|
|⇥⇥ content|string||true|文章内容|
|⇥⇥ createTime|string||true|文章发表时间|
|⇥⇥ readCnt|int32||true|阅读数|
|⇥⇥ cover|object||false|文章封面|
|⇥⇥ comments|object||true|文章的评论|
|⇥⇥ likeUsers|object||true|给本文点赞的作者|
|⇥⇥ labels|object||true|文章的标签|


#### Article Label

#### put/article-labels

> PUT  /article-labels/{id}
##### 接口说明
> 文章标签，包括前端、后端、架构、算法、面试等
##### 地址参数（Path Variable）
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id||必填|
##### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| data|object||true||
|⇥ label|string||true|标签名|
|⇥ articles|array||true|该标签下的文章|
##### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| data|object||true||
|⇥ id|number||true||
|⇥ attributes|object||true||
|⇥⇥ label|string||true|标签名|
|⇥⇥ articles|object||true|该标签下的文章|


#### get/article-labels

> GET  /article-labels/{id}
##### 接口说明
> 文章标签，包括前端、后端、架构、算法、面试等
### 地址参数（Path Variable）
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id||传参则按照id返回列表，不传参则返回所有列表|
##### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| data|array[object]||true||
|⇥ id|number||true||
|⇥ attributes|object||true||
|⇥⇥ label|string||true|标签名|
|⇥⇥ articles|object||true|该标签下的文章|


#### Article Type

#### put/article-types

> PUT  /article-types/{id}
##### 接口说明
> 文章分类tab，显示在首页上部的文章分类，包括前端、后端、开发工具、代码人生等
##### 地址参数（Path Variable）
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id||必填|
##### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| data|object||true||
|⇥ type|string||true|分类名|
|⇥ level|int32||true|该分类下的文章|
|⇥ articles|array||true|这个tab在前端页面中的顺序|
##### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| data|object||true||
|⇥ id|number||true||
|⇥ attributes|object||true||
|⇥⇥ type|string||true|分类名|
|⇥⇥ level|int32||true|该分类下的文章|
|⇥⇥ articles|object||true|这个tab在前端页面中的顺序|


#### get/article-types

> GET  /article-types/{id}
##### 接口说明
> 文章分类tab，显示在首页上部的文章分类，包括前端、后端、开发工具、代码人生等
##### 地址参数（Path Variable）
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id||传参则按照id返回列表，不传参则返回所有列表|
##### 请求参数(Query Param)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|sort||Sort by attributes ascending (asc) or descending (desc)|
|pagination[withCount]||Return page/pageSize (default: true)|
|pagination[page]||Page number (default: 0)|
|pagination[pageSize]||Page size (default: 25)|
|pagination[start]||Offset value (default: 0)|
|pagination[limit]||Number of entities to return (default: 25)|
|fields||Fields to return (ex: title,author)|
|populate||Relations to return|
|filters||Filters to apply|
|locale||Locale to apply|
##### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| data|array[object]||true||
|⇥ id|number||true||
|⇥ attributes|object||true||
|⇥⇥ type|string||true|分类名|
|⇥⇥ level|int32||true|该分类下的文章|
|⇥⇥ articles|object||true|这个tab在前端页面中的顺序|


#### Comment

#### put/comments

> PUT  /comments/{id}
##### 接口说明
> 文章评论
##### 地址参数（Path Variable）
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id||必填|
##### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| data|object||true||
|⇥ content|string||true|评论内容|
|⇥ author|object|string or id|true|发表该评论的作者|
|⇥ article|object|string or id|true|该评论所在的文章|
|⇥ likeUsers|array||true|给该评论点赞的作者|
##### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| data|object||true||
|⇥ id|number||true||
|⇥ attributes|object||true||
|⇥⇥ content|string||true|评论内容|
|⇥⇥ author|object||true|发表该评论的作者|
|⇥⇥ article|object||true|该评论所在的文章|
|⇥⇥ likeUsers|string||true|给该评论点赞的作者|


#### get/comments

> GET  /comments/{id}
##### 接口说明
> 文章评论
##### 地址参数（Path Variable）
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id||传参则按照id返回列表，不传参则返回所有列表|
##### 请求参数(Query Param)
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|sort||Sort by attributes ascending (asc) or descending (desc)|
|pagination[withCount]||Return page/pageSize (default: true)|
|pagination[page]||Page number (default: 0)|
|pagination[pageSize]||Page size (default: 25)|
|pagination[start]||Offset value (default: 0)|
|pagination[limit]||Number of entities to return (default: 25)|
|fields||Fields to return (ex: title,author)|
|populate||Relations to return|
|filters||Filters to apply|
|locale||Locale to apply|
##### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| data|array[object]||true||
|⇥ id|number||true||
|⇥ attributes|object||true||
|⇥⇥ content|string||true|评论内容|
|⇥⇥ author|object||true|发表该评论的作者|
|⇥⇥ article|object||true|该评论所在的文章|
|⇥⇥ likeUsers|object||true|给该评论点赞的作者|


#### User

#### get/users/count

> GET  /users/count
##### 接口说明
> 返回用户表中的用户数量
##### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| number|int32||true|用户表中的用户数量|


#### put/users

> PUT  /users/{id}
##### 接口说明
> 用户表，也就是作者表
##### 地址参数（Path Variable）
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id||必填|
##### 请求体(Request Body)
| 参数名称 | 数据类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| username|string||true|用户名|
| articles|object||true|该用户发表的所有文章|
| job|string||true|对应掘金个人信息的职业|
| description|string||true|对应掘金个人信息的自我介绍|
| writerLevel|int32||true|对应掘金个人信息的创作等级|
| juejinLevel|int32||true|对应掘金个人信息的掘友等级|
| heat|int32||true|对应作者热度榜的顺序|
| profile|object||true|头像|
| badges|object||true|用户获得的徽章|
| comments|object||true|用户发表的评论|
| likeArticles|object||true|用户点赞过的文章|
| likeComments|object||true|用户点赞过的评论|
##### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| username|string||true|用户名|
| articles|object||true|该用户发表的所有文章|
| job|string||true|对应掘金个人信息的职业|
| description|string||true|对应掘金个人信息的自我介绍|
| writerLevel|int32||true|对应掘金个人信息的创作等级|
| juejinLevel|int32||true|对应掘金个人信息的掘友等级|
| heat|int32||true|对应作者热度榜的顺序|
| profile|object||true|头像|
| badges|object||true|用户获得的徽章|
| comments|object||true|用户发表的评论|
| likeArticles|object||true|用户点赞过的文章|
| likeComments|object||true|用户点赞过的评论|


#### get/users

> GET  /users/{id}
##### 接口说明
> 用户表，也就是作者表
##### 地址参数（Path Variable）
| 参数名称 | 默认值 | 描述 |
| ------ | ------ | ------ |
|id||传参则按照id返回列表，不传参则返回所有列表|
### 响应体
● 200 响应数据格式：JSON
| 参数名称 | 类型 | 默认值 | 不为空 | 描述 |
| ------ | ------ | ------ | ------ | ------ |
| id|number|1|true||
| username|string||true|用户名|
| articles|object||true|该用户发表的所有文章|
| job|string||true|对应掘金个人信息的职业|
| description|string||true|对应掘金个人信息的自我介绍|
| writerLevel|int32||true|对应掘金个人信息的创作等级|
| juejinLevel|int32||true|对应掘金个人信息的掘友等级|
| heat|int32||true|对应作者热度榜的顺序|
| profile|object||true|头像|
| badges|object||true|用户获得的徽章|
| comments|object||true|用户发表的评论|
| likeArticles|object||true|用户点赞过的文章|
| likeComments|object||true|用户点赞过的评论|


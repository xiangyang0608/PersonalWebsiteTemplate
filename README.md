# PersonalWebsiteTemplate - Xiangyang
哈咯，欢迎来到极简风个人网页搭建教程~
这里是作者，向阳。

### 使用该模板需要的基本知识
该模板的整体框架非常简单，并已经完全搭建好，因此对新手友好。

如果用户从未接触过编程，请仔细阅读以下教程，或者在小红书查看教学视频。

如果用户能够使用一种编程语言，但对HTML，CSS，JavaScript不太熟悉，建议阅读本项目框架结构，并最好不要擅自修改，以免出现奇奇怪怪的报错。

如果用户是大佬，请随意修改使用(玫瑰花

使用该模板，用户需要对git的使用有一定了解，并掌握最基础的add, commit, pull, push等命令。

接下来的教程中也会简单介绍如何操作。更高级的命令可以自行翻阅文档学习。

### 项目框架
以下为本项目的整体框架：

/PersonalWebsiteTemplate

    /dict

    /pages

    --index.html

    --main.css

    --README.md


一级路径下的index.html为网站主页，自定义内容在该文件中进行修改。

一级路径下的main.css为网站主页的样式文件，不熟悉CSS的同学建议只关注如何替换图片。

/PersonalWebsiteTemplate/dict

    /images

一级路径下的/dict用于存放图片等多媒体文件

/pages

    /ds_page

        --index.html

        --ds_index.css

        --index.js

    /game_page

        --index.html

        --game_index.css

        --index.js


一级路径下的/pages用于存放从主页跳转的二级页面

不同的子页为二级路径/ds_page, /game_page

二级路径下的index.html为子页的网页文件，自定义内容在该文件中进行修改。

二级路径下的index.css为子页的样式文件，不熟悉CSS的同学建议只关注如何替换图片。

二级路径下的index.js为子页的JavaScript文件，不熟悉JavaScript的同学建议不要进行修改。


### 模板使用流程
1. Fork本项目到自己的仓库中
2. 修改仓库设置
3. Clone项目到本地环境
4. 在本地进行修改调试
5. 提交修改
6. 查看效果


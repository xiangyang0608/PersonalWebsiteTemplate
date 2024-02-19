# PersonalWebsiteTemplate - Xiangyang
哈咯，欢迎来到极简风个人网页搭建教程~

这里是作者，向阳。

### 使用该模板需要的基本知识
该模板的整体框架非常简单，对新手友好。<br>
如果用户从未接触过编程，请仔细阅读以下教程，或者在小红书查看教学视频。<br>
如果用户能够使用一种编程语言，但对HTML，CSS，JavaScript不太熟悉，建议阅读本项目框架结构，并最好不要擅自修改，以免出现奇奇怪怪的报错。<br>
如果用户是大佬，请随意修改使用(玫瑰花

使用该模板，用户需要对git的使用有一定了解，并掌握最基础的add, commit, pull, push等命令。<br>
接下来的教程中也会简单介绍如何操作。更高级的命令可以自行翻阅文档学习。

### 项目框架
以下为本项目的整体框架：<br>
/PersonalWebsiteTemplate
- /dict
- /pages
- --index.html
- --main.css
- --README.md 


一级路径下的index.html为网站主页，自定义内容在该文件中进行修改。<br>
一级路径下的main.css为网站主页的样式文件，不熟悉CSS的同学建议只关注如何替换图片。<br>

/PersonalWebsiteTemplate/dict
- /images

一级路径下的/dict用于存放图片等多媒体文件

/pages
- /ds_page
    - --index.html
    - --ds_index.css
    - --index.js
- /game_page
    - --index.html
    - --game_index.css
    - --index.js


一级路径下的/pages用于存放从主页跳转的二级页面 <br>
不同的子页为二级路径/ds_page, /game_page <br>
二级路径下的index.html为子页的网页文件，自定义内容在该文件中进行修改。<br>
二级路径下的index.css为子页的样式文件，不熟悉CSS的同学建议只关注如何替换图片。<br>
二级路径下的index.js为子页的JavaScript文件，不熟悉JavaScript的同学建议不要进行修改。

### 模板使用流程
1. Fork本项目到自己的仓库中 <br>
    在本仓库右上方选择Fork,添加到自己的仓库
2. 修改仓库设置 <br>
    在仓库上方选择Settings，然后在左侧菜单栏中选择Pages,将Source改为Deploy from a branch, 然后将下方的Branch改为main，并保存 <br>
    回到仓库页面，在右上方的About栏右上角选择设置图标,然后勾选Use your GitHub Pages website<br>
    仓库设置完成，此刻点击链接应该可以直接跳转到你的网站主页。
3. Clone项目到本地环境<br>
    在仓库界面复制仓库链接
    在本地打开git bash,输入git clone + url(仓库链接)将仓库克隆到本地
4. 在本地进行修改调试<br>
    在本地打开网页文件，根据文件中注释在指定位置自定义修改内容<br>
    同时可以在本地直接打开网页查看修改效果，方便调试
5. 提交修改<br>
    修改完成后，在一级路径下打开git bash,输入git add . <br>然后输入git commit -m "修改说明" <br>最后输入git push origin main提交修改
6. 查看效果<br>
    等待几分钟后，可以再次点击链接，查看修改是否同步


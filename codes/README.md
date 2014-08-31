## local test

runner(['../../../lib/css-parser.js','../specs/section_3/practice_1'])


## 把服务端库转化为本地库的方法
browserify ../specs/section_1/loader.js > css.js

loader.js里只有一行代码：

    window.css = require('css/index');




漏掉的内容

属性选择器： http://www.java2s.com/Tutorials/HTML_CSS/CSS/CSS_Selector/Selecting_Elements_by_Attribute.htm


我们应该加入一个CSS的细节课程，重点讲CSS的更多属性，更多选择器

section 2的练习７，样式不是最少代码，需要修改。

section 4 的课程应该有

左右对齐
清空换行

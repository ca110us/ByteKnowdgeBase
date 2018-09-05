(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{177:function(t,e,r){"use strict";r.r(e);var n=r(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("控制反转（Inversion of Control，缩写为IoC），是面向对象编程中的一种设计原则，可以用来减低计算机代码之间的耦合度。其中最常见的方式叫做依赖注入（Dependency Injection，简称DI），还有一种方式叫“依赖查找”（Dependency Lookup）。通过控制反转，对象在被创建的时候，由一个调控系统内所有对象的外界实体，将其所依赖的对象的引用传递给它。也可以说，依赖被注入到对象中。")]),t._v(" "),r("p",[t._v("举个简单的例子，我们是如何找女朋友的？常见的情况是，我们到处去看哪里有长得漂亮身材又好的mm，然后打听她们的兴趣爱好、qq号、电话号………，想办法认识她们，投其所好送其所要，然后嘿嘿……这个过程是复杂深奥的，我们必须自己设计和面对每个环节。传统的程序开发也是如此，在一个对象中，如果要使用另外的对象，就必须得到它（自己new一个），对象始终会和其他的实现类藕合起来。")]),t._v(" "),r("p",[t._v("那么IoC是如何做的呢？有点像通过婚介找女朋友，在我和女朋友之间引入了一个第三者：婚姻介绍所。婚介管理了很多男男女女的资料，我可以向婚介提出一个列表，告诉它我想找个什么样的女朋友，比如长得像李嘉欣，身材像林熙雷，唱歌像周杰伦，速度像卡洛斯，技术像齐达内之类的，然后婚介就会按照我们的要求，提供一个mm，我们只需要去和她谈恋爱、结婚就行了。简单明了，如果婚介给我们的人选不符合要求，我们就会抛出异常。整个过程不再由我自己控制，而是有婚介这样一个类似容器的机构来控制。")]),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("在软件工程中，依赖注入是种实现控制反转用于解决依赖性设计模式。一个依赖关系指的是可被利用的一种对象（即服务提供端） 。依赖注入是将所依赖的传递给将使用的从属对象（即客户端）。该服务是将会变成客户端的状态的一部分。 传递服务给客户端，而非允许客户端来建立或寻找服务，是本设计模式的基本要求。")]),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("我们已经分别解释了控制反转和依赖注入的概念。有些人会把控制反转和依赖注入等同，但实际上它们有着本质上的不同。")]),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("IoC框架使用依赖注入作为实现控制反转的方式，但是控制反转还有其他的实现方式，例如说"),r("a",{attrs:{href:"http://martinfowler.com/articles/injection.html#UsingAServiceLocator",target:"_blank",rel:"noopener noreferrer"}},[t._v("ServiceLocator"),r("OutboundLink")],1),t._v("，所以不能将控制反转和依赖注入等同。")]),t._v(" "),t._m(6),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/silexphp/Pimple",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pimple"),r("OutboundLink")],1),t._v(": Pimple is a small Dependency Injection Container for PHP.")])]),t._v(" "),t._m(7),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%8E%A7%E5%88%B6%E5%8F%8D%E8%BD%AC",target:"_blank",rel:"noopener noreferrer"}},[t._v("控制反转"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("依赖注入"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://blog.xiaohansong.com/2015/10/21/IoC-and-DI/",target:"_blank",rel:"noopener noreferrer"}},[t._v("控制反转（IoC）与依赖注入（DI）"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.cnblogs.com/liuhaorain/p/3747470.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解DIP、IoC、DI以及IoC容器"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://blog.csdn.net/zhanghongjie0302/article/details/51286739",target:"_blank",rel:"noopener noreferrer"}},[t._v("谈谈对Spring IOC的理解"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://fabien.potencier.org/what-is-dependency-injection.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("What is Dependency Injection?"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.wangxuyin.cn/66.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PHP程序员如何理解依赖注入容器"),r("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"控制反转-ioc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#控制反转-ioc","aria-hidden":"true"}},[this._v("#")]),this._v(" 控制反转(IoC)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念","aria-hidden":"true"}},[this._v("#")]),this._v(" 概念")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"控制反转"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#控制反转","aria-hidden":"true"}},[this._v("#")]),this._v(" 控制反转")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"依赖注入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入","aria-hidden":"true"}},[this._v("#")]),this._v(" 依赖注入")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"控制反转和依赖注入的关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#控制反转和依赖注入的关系","aria-hidden":"true"}},[this._v("#")]),this._v(" 控制反转和依赖注入的关系")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("控制反转是一种思想")]),this._v(" "),e("li",[this._v("依赖注入是一种设计模式")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"php相关类库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php相关类库","aria-hidden":"true"}},[this._v("#")]),this._v(" PHP相关类库")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);a.options.__file="ioc.md";e.default=a.exports}}]);
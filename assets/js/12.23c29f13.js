(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{171:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("由于默认的 Ubuntu 的 APT 源外国外的源，由于网络问题安装软件比较慢，所以需要更换成更快的国内源，下面以"),e("a",{attrs:{href:"http://mirrors.aliyun.com/help/ubuntu",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里云的源"),e("OutboundLink")],1),t._v("为例，替换 Ubuntu 16.04 的源。如使用其他Ubuntu版本的源，在步骤2中，请替换相对应的源地址。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),e("p",[t._v("GIT:")]),t._v(" "),t._m(9),e("p",[t._v("Redis Server:")]),t._v(" "),t._m(10),e("p",[t._v("Beanstalkd:")]),t._v(" "),t._m(11),e("p",[t._v("Java:")]),t._v(" "),t._m(12),t._m(13),t._v(" "),e("p",[t._v("参考"),e("a",{attrs:{href:"https://underyx.me/2015/05/18/raising-the-maximum-number-of-file-descriptors",target:"_blank",rel:"noopener noreferrer"}},[t._v("Raising the Maximum Number of File Descriptors (Open Files) on Ubuntu 14.04 Trusty"),e("OutboundLink")],1),t._v("。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"ubuntu-howtos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-howtos","aria-hidden":"true"}},[this._v("#")]),this._v(" Ubuntu HowTos")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"如何更改-ubuntu-的-apt-源？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何更改-ubuntu-的-apt-源？","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何更改 Ubuntu 的 APT 源？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("步骤1：备份原有的源")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("mv")]),this._v(" /etc/apt/sources.list /etc/apt/sources.list.bak\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("步骤2：替换")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"\ndeb http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-proposed main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ xenial-proposed main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse\n"')]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/apt/sources.list\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("步骤3：更新源")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("apt-get")]),this._v(" update\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"如何安装git、redis等常用软件？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何安装git、redis等常用软件？","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何安装Git、Redis等常用软件？")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-add-repository ppa:git-core/ppa\n"),e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository ppa:chris-lea/redis-server\n"),e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" redis-server\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("apt-get")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" beanstalkd\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository ppa:webupd8team/java\n"),e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" oracle-java8-installer\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"如何修改-ubuntu-server-的-ulimit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何修改-ubuntu-server-的-ulimit","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何修改 Ubuntu Server 的 ulimit ?")])}],!1,null,null,null);n.options.__file="linux-ubuntu-howtos.md";s.default=n.exports}}]);
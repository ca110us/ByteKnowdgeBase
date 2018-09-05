(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{174:function(e,t,_){"use strict";_.r(t);var a=_(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"lnmp-server优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#lnmp-server优化","aria-hidden":"true"}},[e._v("#")]),e._v(" LNMP Server优化")]),e._v(" "),_("p",[e._v("LNMP = Linux + Nginx + MySQL + PHP")]),e._v(" "),_("h1",{attrs:{id:"nginx优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nginx优化","aria-hidden":"true"}},[e._v("#")]),e._v(" Nginx优化")]),e._v(" "),_("p",[e._v("编辑"),_("code",[e._v("/etc/nginx/nginx.conf")]),e._v("，修改相应配置：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("worker_processes auto;\nevents {\n    worker_connections 10240;\n}\nserver_tokens off;\nclient_max_body_size 1024M;\n")])])]),_("h1",{attrs:{id:"mysql优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql优化","aria-hidden":"true"}},[e._v("#")]),e._v(" MySQL优化")]),e._v(" "),_("p",[e._v("本文只涉及最基础的优化，深入的优化请参考"),_("a",{attrs:{href:""}},[e._v("MySQL优化指南")]),e._v("，通常情况下基础的优化，已可满足中小型应用的需求了。请在应用程序安装前，优化配置。")]),e._v(" "),_("p",[e._v("MySQL的默认配置在"),_("code",[e._v("/etc/mysql/my.cnf")]),e._v("，修改如下配置：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("max_connections = N    # 该值的设置，参考下述的说明\nlog_slow_queries        = /var/log/mysql/mysql-slow.log\nlong_query_time = 2\ninnodb_buffer_pool_size = 512M  # 该值的设置，参考下述的说明\ninnodb_file_per_table = 1\n")])])]),_("p",[_("code",[e._v("max_connections")]),e._v("数据库的最大连接数。通常一个PHP请求占用1个连接数的话，那么一个拥有最大N个FPM进程的服务器的话，"),_("code",[e._v("max_connections")]),e._v("可设置为"),_("code",[e._v("N+1")]),e._v("。\n当"),_("code",[e._v("N<=100")]),e._v("时，可不设置该值。因为"),_("code",[e._v("max_connections")]),e._v("的默认值为100。")]),e._v(" "),_("p",[_("code",[e._v("innodb_buffer_pool_size")]),e._v(" Innodb引擎的Buffer池的大小。该值直接影响基于innodb引擎的数据库查询效率。根据数据库的存储数据大小的容量来估算此值，默认为128M。如果是MySQL专用服务器，可以设置此值为物理内存的80%。如果非MySQL专用服务器，请合理分配该值的大小。")]),e._v(" "),_("h1",{attrs:{id:"php优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#php优化","aria-hidden":"true"}},[e._v("#")]),e._v(" PHP优化")]),e._v(" "),_("h2",{attrs:{id:"fpm的优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fpm的优化","aria-hidden":"true"}},[e._v("#")]),e._v(" FPM的优化")]),e._v(" "),_("p",[e._v("默认的fpm配置文件为："),_("code",[e._v("/etc/php5/fpm/pool.d")]),e._v("。")]),e._v(" "),_("p",[e._v("PHP-FPM主要优化FPM的最大进程数(pm.max_children)。如果服务器为Web 专用服务器，那么可以留有系统运行的内存后，其余都可分配给FPM。非专用服务器，请合理分配各个服务的内存。")]),e._v(" "),_("p",[e._v("Symfony2的应用，一般一个FPM进程占用40M，以此为计算标准的话，如下：")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("内存大小")]),e._v(" "),_("th",[e._v("留给系统运行的内存")]),e._v(" "),_("th",[e._v("可分配给FPM的内存")]),e._v(" "),_("th",[e._v("pm.max_children")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[e._v("1G")]),e._v(" "),_("td",[e._v("0.8G")]),e._v(" "),_("td",[e._v("0.2G")]),e._v(" "),_("td",[e._v("5")])]),e._v(" "),_("tr",[_("td",[e._v("2G")]),e._v(" "),_("td",[e._v("1.0G")]),e._v(" "),_("td",[e._v("1.0G")]),e._v(" "),_("td",[e._v("20")])]),e._v(" "),_("tr",[_("td",[e._v("4G")]),e._v(" "),_("td",[e._v("1.0G")]),e._v(" "),_("td",[e._v("3.0G")]),e._v(" "),_("td",[e._v("60")])]),e._v(" "),_("tr",[_("td",[e._v("8G")]),e._v(" "),_("td",[e._v("1.5G")]),e._v(" "),_("td",[e._v("6.5G")]),e._v(" "),_("td",[e._v("160")])]),e._v(" "),_("tr",[_("td",[e._v("16G")]),e._v(" "),_("td",[e._v("2.0G")]),e._v(" "),_("td",[e._v("14.0G")]),e._v(" "),_("td",[e._v("350")])])])]),e._v(" "),_("p",[e._v("如果为FPM专用服务器，那么：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("pm = static\npm.max_children = N            # N的值参照如上表格的计算方式\npm.max_requests = 5000\nrequest_terminate_timeout = 300\n")])])]),_("p",[e._v("否则：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("pm = dynamic\npm.max_children = N            # N的值参照如上表格的计算方式\npm.start_servers = N * 0.4     # 请直接填写计算后的值\npm.min_spare_servers = N * 0.1 # 请直接填写计算后的值\npm.max_spare_servers = N * 0.5 # 请直接填写计算后的值\npm.max_requests = 5000\nrequest_terminate_timeout = 300\n")])])]),_("h2",{attrs:{id:"php-ini的优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#php-ini的优化","aria-hidden":"true"}},[e._v("#")]),e._v(" php.ini的优化")]),e._v(" "),_("p",[e._v("默认php.ini配置文件在"),_("code",[e._v("/etc/php5/fpm/php.ini")]),e._v("，修改如下配置：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("expose_php = Off\nsession.gc_probability = 1\nsession.gc_divisor = 1000\nsession.gc_maxlifetime = 1440\npost_max_size = 5M\nmax_execution_time = 300\nmax_input_time = 300\nmemory_limit = 128M\n")])])])])}],!1,null,null,null);s.options.__file="linux-lnmp-optimizing.md";t.default=s.exports}}]);
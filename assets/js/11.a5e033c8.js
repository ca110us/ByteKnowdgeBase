(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{181:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("以下内容基于 Ubuntu Server。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),e("p",[t._v("可通过以下 shell 修改：")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("TODO.")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),e("p",[t._v("做此配置的目的是，防止IP被未备案的域名恶意解析，导致被工信部封杀。")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),e("p",[t._v("配置此配置后，Nginx在Response的时候，不会输出Nginx的具体版本号，以免被攻击扫描器扫描得到Nginx版本号，做定向攻击。")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),e("p",[t._v("关闭此选项后，在 Http Response 的时候，不会输出PHP的版号，以免被攻击扫描器扫描得到Nginx版本号，做定向攻击。PHP 7开始，默认已经关闭此选项。")]),t._v(" "),t._m(17),t._v(" "),e("p",[t._v("应遵循以下原则，确保PHP程序部署的安全性：")]),t._v(" "),t._m(18),t._v(" "),e("p",[t._v("完整操作如下：")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),e("p",[t._v("注：此步操作后，需重启 Nginx / PHP-FPM 服务才能生效：")]),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),e("p",[t._v("关于"),e("code",[t._v("adm")]),t._v("用户组的说明，参见 "),e("a",{attrs:{href:"http://wiki.gacq.com/index.php/Debian_default_system_groups_description",target:"_blank",rel:"noopener noreferrer"}},[t._v("Debian default system groups description"),e("OutboundLink")],1),t._v(" 。")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),e("p",[t._v("假设应用的缓存、日志目录都位于"),e("code",[t._v("/var/www/myapp/var")]),t._v("目录下。"),e("code",[t._v("setacl")]),t._v("此操作是为了让web及cli环境下，对缓存、日志等目录都可写，关于"),e("code",[t._v("setacl")]),t._v("参见："),e("a",{attrs:{href:"https://symfony.com/doc/current/setup/file_permissions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Setting up or Fixing File Permissions"),e("OutboundLink")],1),t._v(" ，注意"),e("code",[t._v("setacl")]),t._v("命令对于 NFS 下的目录无效。")]),t._v(" "),e("p",[t._v("参考： "),e("a",{attrs:{href:"http://man.linuxde.net/setfacl",target:"_blank",rel:"noopener noreferrer"}},[t._v("setfacl命令"),e("OutboundLink")],1)]),t._v(" "),t._m(35),t._v(" "),e("p",[t._v("TODO.")]),t._v(" "),t._m(36),t._v(" "),e("p",[t._v("TODO.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"linux-安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-安全","aria-hidden":"true"}},[this._v("#")]),this._v(" Linux 安全")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"linux-配置的安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-配置的安全","aria-hidden":"true"}},[this._v("#")]),this._v(" Linux 配置的安全")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"ssh加固"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh加固","aria-hidden":"true"}},[this._v("#")]),this._v(" SSH加固")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("编辑 "),s("code",[this._v("/etc/ssh/sshd_config")]),this._v(" 修改如下配置：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("PasswordAuthentication no # 禁止密码登陆\nPermitRootLogin no # 禁止root登陆\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),e("span",{attrs:{class:"token string"}},[t._v("'s/^\\(#\\?\\s*PasswordAuthentication\\s.*\\)/PasswordAuthentication no/g'")]),t._v(" /etc/ssh/sshd_config\n"),e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),e("span",{attrs:{class:"token string"}},[t._v("'s/^\\(#\\?\\s*PermitRootLogin\\s.*\\)/PermitRootLogin no/g'")]),t._v(" /etc/ssh/sshd_config\n"),e("span",{attrs:{class:"token function"}},[t._v("sed")]),t._v(" -n -e "),e("span",{attrs:{class:"token string"}},[t._v("'/^\\(#\\?\\s*PasswordAuthentication\\s.*\\)/p'")]),t._v(" -e "),e("span",{attrs:{class:"token string"}},[t._v("'/^\\(#\\?\\s*PermitRootLogin\\s.*\\)/p'")]),t._v(" /etc/ssh/sshd_config\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("shell的最后一行输出了修改后的配置，请检查修改是否成功！配置需在SSH服务重启后才能生效："),s("code",[this._v("sudo service ssh restart")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("注意：在禁用"),s("code",[this._v("root")]),this._v("登陆之前，请先确认非root账号，能正常登陆服务器。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"防火墙配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防火墙配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 防火墙配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"nginx-配置的安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置的安全","aria-hidden":"true"}},[this._v("#")]),this._v(" Nginx 配置的安全")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"静止未解析域名访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静止未解析域名访问","aria-hidden":"true"}},[this._v("#")]),this._v(" 静止未解析域名访问")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('echo "\nserver {\n    listen 80 default_server;\n    listen [::]:80 default_server;\n    server_name _;\n    return 404;\n} " | sudo tee /etc/nginx/sites-available/default\nsudo service nginx reload\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"关闭nginx版本号输出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭nginx版本号输出","aria-hidden":"true"}},[this._v("#")]),this._v(" 关闭Nginx版本号输出")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("编辑"),s("code",[this._v("/etc/nginx/nginx.conf")]),this._v("，修改配置"),s("code",[this._v("server_tokens off")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('sudo sed -i "s/\\\\s*#*\\s*server_tokens.*$/\\\\tserver_tokens off;/" /etc/nginx/nginx.conf\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"php-配置的安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php-配置的安全","aria-hidden":"true"}},[this._v("#")]),this._v(" PHP 配置的安全")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"关闭expose-php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭expose-php","aria-hidden":"true"}},[this._v("#")]),this._v(" 关闭"),s("code",[this._v("expose_php")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"php-应用部署目录权限的安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php-应用部署目录权限的安全","aria-hidden":"true"}},[this._v("#")]),this._v(" PHP 应用部署目录权限的安全")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("原则上一台服务器只部署一个应用；一台服务器上如需部署多个应用的，每个应用应该各自独立用户及用户组，以免相互影响。")]),t._v(" "),e("li",[t._v("禁止使用"),e("code",[t._v("root")]),t._v("用户部署程序，推荐创建应用部署专属用户名"),e("code",[t._v("app")]),t._v("，用户组"),e("code",[t._v("app")]),t._v("。")]),t._v(" "),e("li",[t._v("推荐应用部署在"),e("code",[t._v("/var/www")]),t._v("目录下。")]),t._v(" "),e("li",[t._v("Nginx / PHP-FPM 进程运行的用户为"),e("code",[t._v("www-data")]),t._v("，且该用户的用户组为"),e("code",[t._v("www-data")]),t._v("，为了让 Nginx / PHP-FPM 能读取项目文件，应将"),e("code",[t._v("www-data")]),t._v("用户，加入"),e("code",[t._v("app")]),t._v("用户组。")]),t._v(" "),e("li",[t._v("应用的"),e("code",[t._v("cli")]),t._v("程序，也应运行在"),e("code",[t._v("app")]),t._v("用户下。")]),t._v(" "),e("li",[t._v("应用内的缓存、日志等需要写入的目录，设置权限为"),e("code",[t._v("770")]),t._v("；缓存文件、日志文件等文件的权限需设置为"),e("code",[t._v("777")]),t._v("，以使"),e("code",[t._v("cli")]),t._v("及"),e("code",[t._v("web")]),t._v("环境下都有权限对此类文件写入。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("建立"),s("code",[this._v("app")]),this._v("用户及用户主目录，并设置登陆"),s("code",[this._v("shell")]),this._v("及目录权限")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("useradd")]),t._v(" app -m -s /bin/bash\n"),e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("chmod")]),t._v(" 750 /home/app\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("创建"),s("code",[this._v("/var/www")]),this._v("目录，并设置权限")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /var/www\n"),e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("chown")]),t._v(" app:app /var/www\n"),e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("chmod")]),t._v(" 750 /var/www\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("赋予"),s("code",[this._v("www-data")]),this._v("用户读取"),s("code",[this._v("app")]),this._v("目录的权限")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("usermod")]),this._v(" -a -G app www-data\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("sudo service nginx restart\nsudo service php-fpm restart\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("赋予"),s("code",[this._v("app")]),this._v("用户 sudo 的权限")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("usermod")]),this._v(" -a -G "),s("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" app\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"4"}},[s("li",[this._v("赋予"),s("code",[this._v("app")]),this._v("用户查看系统日志的权限")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("usermod")]),this._v(" -a -G adm app\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"5"}},[s("li",[this._v("设置"),s("code",[this._v("app")]),this._v("用户的密码，以便 sudo 时使用")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("passwd")]),this._v(" app\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",{attrs:{start:"6"}},[e("li",[e("p",[t._v("部署应用，并设置用户组及权限 (假设应用名为"),e("code",[t._v("myapp")]),t._v(")")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("deploy myapp to /var/www/myapp\n"),e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("chown")]),t._v(" -Rf app:app /var/www/myapp\n"),e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("chmod")]),t._v(" -Rf 750 /var/www/myapp "),e("span",{attrs:{class:"token comment"}},[t._v("# 如果 myapp 需要在线更新，那么这里权限应设置为 770 ")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("设置应用的缓存、日志等目录可写。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("需先安装"),s("code",[this._v("acl")]),this._v("，"),s("code",[this._v("sudo apt-get install acl")]),this._v("。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("su")]),t._v(" app\n"),e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" setfacl -dR -m u:www-data:rwX -m u:"),e("span",{attrs:{class:"token variable"}},[e("span",{attrs:{class:"token variable"}},[t._v("$(")]),e("span",{attrs:{class:"token function"}},[t._v("whoami")]),e("span",{attrs:{class:"token variable"}},[t._v(")")])]),t._v(":rwX /var/www/myapp/var\n"),e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" setfacl -R -m u:www-data:rwX -m u:"),e("span",{attrs:{class:"token variable"}},[e("span",{attrs:{class:"token variable"}},[t._v("$(")]),e("span",{attrs:{class:"token function"}},[t._v("whoami")]),e("span",{attrs:{class:"token variable"}},[t._v(")")])]),t._v(":rwX /var/www/myapp/var\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"redis-配置安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-配置安全","aria-hidden":"true"}},[this._v("#")]),this._v(" Redis 配置安全")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"mysql-配置安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-配置安全","aria-hidden":"true"}},[this._v("#")]),this._v(" MySQL 配置安全")])}],!1,null,null,null);n.options.__file="linux-security.md";s.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{485:function(s,a,e){s.exports=e.p+"assets/img/NPM_Server_1.1e913a6e.png"},486:function(s,a,e){s.exports=e.p+"assets/img/NPM_Server_2.390b843f.png"},487:function(s,a,e){s.exports=e.p+"assets/img/NPM_Server_3.13e2e136.png"},488:function(s,a,e){s.exports=e.p+"assets/img/NPM_Server_nrm_repo.6c814123.png"},499:function(s,a,e){"use strict";e.r(a);var n=e(4),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",[s._v("公司前段时间为了提高开发效率, 减少重复造轮子, 搭建了一个私有npm组件仓库, 在此总结一下经验。过程中使用了"),n("code",[s._v("nrm")]),s._v("、"),n("code",[s._v("pm2")]),s._v("、"),n("code",[s._v("verdaccio")]),s._v("进行搭建。")])]),s._v(" "),n("p",{attrs:{align:"center"}},[n("img",{staticStyle:{"margin-right":"50px"},attrs:{src:"/assets/img/npm_logo.png",height:"80px"}}),s._v(" "),n("img",{attrs:{src:"/assets/img/verdaccio_logo.png",height:"80px"}})]),s._v(" "),n("h2",{attrs:{id:"服务器环境搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务器环境搭建"}},[s._v("#")]),s._v(" 服务器环境搭建")]),s._v(" "),n("ul",[n("li",[s._v("服务器系统: "),n("code",[s._v("Linux CentoOS 7 x64")])]),s._v(" "),n("li",[s._v("运行环境: "),n("code",[s._v("Node.js")])]),s._v(" "),n("li",[s._v("使用工具库: "),n("code",[s._v("nrm")]),s._v("、"),n("code",[s._v("pm2")]),s._v("、"),n("code",[s._v("verdaccio")]),s._v("、")])]),s._v(" "),n("h3",{attrs:{id:"连接到到服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#连接到到服务器"}},[s._v("#")]),s._v(" 连接到到服务器")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@192.168.1.80\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("code",[s._v("192.168.1.80")]),s._v(" 是组件库所部署的内部服务IP地址")]),s._v(" "),n("h3",{attrs:{id:"安装所需工具库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装所需工具库"}},[s._v("#")]),s._v(" 安装所需工具库")]),s._v(" "),n("p",[s._v("安装 "),n("code",[s._v("Node.js")]),s._v(" 环境")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nodejs\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("Linux安装的是旧版本的 "),n("code",[s._v("npm")]),s._v(" ,这里我们更新一下 "),n("code",[s._v("npm")]),s._v(" 版本")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" -g\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("安装依赖环境")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" verdaccio pm2 nrm -g\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[n("strong",[s._v("nrm")]),s._v(": npm源管理器")]),s._v(" "),n("li",[n("strong",[s._v("pm2")]),s._v(": 进程守护工具")]),s._v(" "),n("li",[n("strong",[s._v("verdaccio")]),s._v(": 运行npm服务器的插件; 支持身份验证、中间件和存储插件")])]),s._v(" "),n("h3",{attrs:{id:"配置服务器环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置服务器环境"}},[s._v("#")]),s._v(" 配置服务器环境")]),s._v(" "),n("p",[s._v("为了生成"),n("code",[s._v("verdaccio")]),s._v("的配置文件, 需要先在服务器根目录用户根目录运行一次"),n("code",[s._v("verdaccio")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("verdaccio\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("运行成功之后, 修改"),n("code",[s._v("verdaccio")]),s._v("的默认配置文件,")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装vim工具包")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" .config/verdaccio/config.yml  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改配置")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("在配置文件中添加"),n("code",[s._v("listen:0.0.0.0:4000")]),s._v("的配置, 开放"),n("code",[s._v("verdaccio")]),s._v("服务器的端口(默认为"),n("code",[s._v("4873")]),s._v(")。如下图所示:")]),s._v(" "),n("p",[n("img",{attrs:{src:e(485),alt:"image"}}),s._v("\n修改完成后, 退出并保存。")]),s._v(" "),n("h3",{attrs:{id:"启动verdaccio服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动verdaccio服务"}},[s._v("#")]),s._v(" 启动"),n("strong",[s._v("verdaccio")]),s._v("服务")]),s._v(" "),n("p",[s._v("上面我们提到, 启动"),n("code",[s._v("verdaccio")]),s._v("服务只需要在终端运行"),n("code",[s._v("verdaccio")]),s._v("就可以了。但是如果关闭了终端, "),n("code",[s._v("verdaccio")]),s._v("服务就不能一直保持运行了。这个时候我们就需要用到上面安装的"),n("code",[s._v("pm2")]),s._v("进行进程守护, 保持"),n("code",[s._v("verdaccio")]),s._v("持续运行。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("pm2 start verdaccio\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("pm2运行成功后, 终端会显示下图的提示\n"),n("img",{attrs:{src:e(486),alt:"image"}})]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",[s._v("也可以通过"),n("code",[s._v("pm2 ls")]),s._v("命令查看正在运行进程列表。")])]),s._v(" "),n("p",[s._v("为了让同一局域网内的其他设备能够访问到"),n("code",[s._v("verdaccio")]),s._v("服务器, 还需要开放"),n("code",[s._v("Linux")]),s._v("服务器的"),n("code",[s._v("4000")]),s._v("端口("),n("code",[s._v("verdaccio")]),s._v("服务运行端口)。")]),s._v(" "),n("p",[s._v("更新"),n("code",[s._v("yum")]),s._v("包")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" yum-utils\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("安装或更新"),n("code",[s._v("openssl")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssl  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装")]),s._v("\nyum -y update openssl   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#更新")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("启动")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum-config-manager --enable cr \nyum update\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("开放服务器的 "),n("code",[s._v("4000")]),s._v(" 端口")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("firewall-cmd --permanent --add-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),s._v("/tcp \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("重新加载防火墙配置")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("firewall-cmd --reload\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("现在, 私有"),n("code",[s._v("npm")]),s._v("仓库服务器就已经搭建成功。浏览器访问服务器的地址(这里为"),n("code",[s._v("192.168.1.96:4000")]),s._v("), 就可以看到"),n("code",[s._v("verdaccio")]),s._v("服务器已经在运行。")]),s._v(" "),n("p",[n("img",{attrs:{src:e(487),alt:"image"}})]),s._v(" "),n("h2",{attrs:{id:"发布npm包到服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发布npm包到服务器"}},[s._v("#")]),s._v(" 发布npm包到服务器")]),s._v(" "),n("h3",{attrs:{id:"切换到私有npm源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#切换到私有npm源"}},[s._v("#")]),s._v(" 切换到私有npm源")]),s._v(" "),n("p",[s._v("首先，需要把npm源切换到刚刚添加的地址。为了切换起来更方便，这里我们借助"),n("code",[s._v("nrm")]),s._v(" 。")]),s._v(" "),n("p",[s._v("添加私有"),n("code",[s._v("npm")]),s._v("源到"),n("code",[s._v("nrm")]),s._v("管理器")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("nrm "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" my-npm http://192.168.1.96:4000\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[n("code",[s._v("my-npm")]),s._v("是npm源的别名, 可以根据自己的喜好命名")]),s._v(" "),n("li",[n("code",[s._v("http://192.168.1.96:4000")]),s._v("是私有npm的源地址")])]),s._v(" "),n("p",[s._v("使用私有"),n("code",[s._v("npm")]),s._v("源")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",[s._v("添加完私有npm源后, 可通过"),n("code",[s._v("nrm ls")]),s._v("命令查看已添加的和当前使用的"),n("code",[s._v("npm")]),s._v("源。")])]),s._v(" "),n("p",[n("img",{attrs:{src:e(488),alt:"image"}})]),s._v(" "),n("h3",{attrs:{id:"添加用户"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加用户"}},[s._v("#")]),s._v(" 添加用户")]),s._v(" "),n("p",[s._v("为了把本地的组件库发布到私有"),n("code",[s._v("npm")]),s._v("服务器, 这里还需要添加一个登录"),n("code",[s._v("npm")]),s._v("服务器的账户。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" adduser  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行完该命令后, 按照提示分别输入用户命、密码和联系邮箱")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"发布npm包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发布npm包"}},[s._v("#")]),s._v(" 发布npm包")]),s._v(" "),n("p",[s._v("修改"),n("code",[s._v("package.json")]),s._v("文件里的"),n("code",[s._v("version")]),s._v("以修改版本号。或者通过"),n("code",[s._v("npm version")]),s._v("命令对版本号进行修改。")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",[s._v("在终端输入"),n("code",[s._v("npm version --help")]),s._v("命令可查看相关说明")])]),s._v(" "),n("p",[s._v("进入到组件库源代码的根目录, 登录私有"),n("code",[s._v("npm")]),s._v("服务器。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" login \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("发布:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("等待终端提示发布成功后, 打开浏览器访问服务器地址(此处例子为"),n("code",[s._v("http://192.168.1.96:4000")]),s._v(")即可看到新发布的"),n("code",[s._v("npm")]),s._v("包了✅")]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",[s._v("执行发布命令前, 需要先通过"),n("code",[s._v("npm init")]),s._v("命令生成"),n("code",[s._v("package.json")]),s._v("文件。"),n("code",[s._v("package.json")]),s._v("上的"),n("code",[s._v("name")]),s._v("属性就是当前组件库在"),n("code",[s._v("npm")]),s._v("服务器上的包名。")])]),s._v(" "),n("h2",{attrs:{id:"在实际开发中引入私有npm包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在实际开发中引入私有npm包"}},[s._v("#")]),s._v(" 在实际开发中引入私有npm包")]),s._v(" "),n("p",[s._v("私有"),n("code",[s._v("npm")]),s._v("发布成功后, 只需要像往常一样通过"),n("code",[s._v("npm install [package_name]")]),s._v("即可使用对应的"),n("code",[s._v("npm")]),s._v("包了。比如包名为"),n("code",[s._v("my-table")]),s._v(", 安装方式如下")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" my-table\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("End.")])])])}),[],!1,null,null,null);a.default=t.exports}}]);
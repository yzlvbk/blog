(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{381:function(v,_,t){"use strict";t.r(_);var d=t(42),e=Object(d.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"范式规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#范式规则"}},[v._v("#")]),v._v(" 范式规则")]),v._v(" "),t("h5",{attrs:{id:"示例表数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例表数据"}},[v._v("#")]),v._v(" 示例表数据")]),v._v(" "),t("p",[v._v("假设有一个名为"),t("code",[v._v("employee")]),v._v("的员工表，它有九个属性："),t("code",[v._v("id")]),v._v("(员工编号)、"),t("code",[v._v("name")]),v._v("(员工名称)、"),t("code",[v._v("mobile")]),v._v("(电话)、"),t("code",[v._v("zip")]),v._v("(邮编)、"),t("code",[v._v("province")]),v._v("(省份)、"),t("code",[v._v("city")]),v._v("(城市)、"),t("code",[v._v("district")]),v._v("(区县)、"),t("code",[v._v("deptNo")]),v._v("(所属部门编号)、"),t("code",[v._v("deptName")]),v._v("(所属部门名称)、表总数据如下：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("id")]),v._v(" "),t("th",[v._v("name")]),v._v(" "),t("th",[v._v("mobile")]),v._v(" "),t("th",[v._v("zip")]),v._v(" "),t("th",[v._v("province")]),v._v(" "),t("th",[v._v("city")]),v._v(" "),t("th",[v._v("district")]),v._v(" "),t("th",[v._v("deptNo")]),v._v(" "),t("th",[v._v("deptName")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("101")]),v._v(" "),t("td",[v._v("张三")]),v._v(" "),t("td",[v._v("13910000001 13910000002")]),v._v(" "),t("td",[v._v("100001")]),v._v(" "),t("td",[v._v("北京")]),v._v(" "),t("td",[v._v("北京")]),v._v(" "),t("td",[v._v("海淀区")]),v._v(" "),t("td",[v._v("D1")]),v._v(" "),t("td",[v._v("部门1")])]),v._v(" "),t("tr",[t("td",[v._v("101")]),v._v(" "),t("td",[v._v("张三")]),v._v(" "),t("td",[v._v("13910000001 13910000002")]),v._v(" "),t("td",[v._v("100001")]),v._v(" "),t("td",[v._v("北京")]),v._v(" "),t("td",[v._v("北京")]),v._v(" "),t("td",[v._v("海淀区")]),v._v(" "),t("td",[v._v("D2")]),v._v(" "),t("td",[v._v("部门2")])]),v._v(" "),t("tr",[t("td",[v._v("102")]),v._v(" "),t("td",[v._v("李四")]),v._v(" "),t("td",[v._v("13910000003")]),v._v(" "),t("td",[v._v("200001")]),v._v(" "),t("td",[v._v("上海")]),v._v(" "),t("td",[v._v("上海")]),v._v(" "),t("td",[v._v("静安区")]),v._v(" "),t("td",[v._v("D3")]),v._v(" "),t("td",[v._v("部门3")])]),v._v(" "),t("tr",[t("td",[v._v("103")]),v._v(" "),t("td",[v._v("王五")]),v._v(" "),t("td",[v._v("13910000004")]),v._v(" "),t("td",[v._v("510001")]),v._v(" "),t("td",[v._v("广东省")]),v._v(" "),t("td",[v._v("广州")]),v._v(" "),t("td",[v._v("白云区")]),v._v(" "),t("td",[v._v("D4")]),v._v(" "),t("td",[v._v("部门4")])]),v._v(" "),t("tr",[t("td",[v._v("103")]),v._v(" "),t("td",[v._v("王五")]),v._v(" "),t("td",[v._v("13910000004")]),v._v(" "),t("td",[v._v("510001")]),v._v(" "),t("td",[v._v("广东省")]),v._v(" "),t("td",[v._v("广州")]),v._v(" "),t("td",[v._v("白云区")]),v._v(" "),t("td",[v._v("D5")]),v._v(" "),t("td",[v._v("部门 5")])])])]),v._v(" "),t("p",[v._v("由于此员工表是非规范化的，我们将面对如下的问题。")]),v._v(" "),t("blockquote",[t("ul",[t("li",[t("strong",[v._v("修改异常")]),v._v("：上表中张三有两条记录，因为他隶属于两个部门。如果我们要修改张三的地址，必修修改两行记录。假如一个部门得到了张三的新地址并进行了更新，而另一个部门没有，那么此时张三在表中会存在两个不同的地址，导致了数据不一致")]),v._v(" "),t("li",[v._v("**新增异常：**假如一个新员工假如公司，他正处于入职培训阶段，还没有被正式分配到某个部门，如果"),t("code",[v._v("deptNo")]),v._v("字段不允许为空，我们就无法向"),t("code",[v._v("employee")]),v._v("表中新增该员工的数据。")]),v._v(" "),t("li",[v._v("**删除异常：**假设公司撤销了D3部门，那么在删除"),t("code",[v._v("deptNo")]),v._v("为D3的行时，会将李四的信息也一并删除。因为他隶属于D3这一部门。")])])]),v._v(" "),t("h2",{attrs:{id:"第一范式-1nf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一范式-1nf"}},[v._v("#")]),v._v(" 第一范式(1NF)")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("表中的列只能含有原子性(不可再分)的值。")])])]),v._v(" "),t("p",[v._v("表中的张三有两个手机号存储在mobile列中，违反了 1NF 规则。为了使表满足 1NF，数据应该修改如下：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("id")]),v._v(" "),t("th",[v._v("name")]),v._v(" "),t("th",[v._v("mobile")]),v._v(" "),t("th",[v._v("zip")]),v._v(" "),t("th",[v._v("province")]),v._v(" "),t("th",[v._v("city")]),v._v(" "),t("th",[v._v("district")]),v._v(" "),t("th",[v._v("deptNo")]),v._v(" "),t("th",[v._v("deptName")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("101")]),v._v(" "),t("td",[v._v("张三")]),v._v(" "),t("td",[v._v("13910000001")]),v._v(" "),t("td",[v._v("100001")]),v._v(" "),t("td",[v._v("北京")]),v._v(" "),t("td",[v._v("北京")]),v._v(" "),t("td",[v._v("海淀区")]),v._v(" "),t("td",[v._v("D1")]),v._v(" "),t("td",[v._v("部门1")])]),v._v(" "),t("tr",[t("td",[v._v("101")]),v._v(" "),t("td",[v._v("张三")]),v._v(" "),t("td",[v._v("13910000002")]),v._v(" "),t("td",[v._v("100001")]),v._v(" "),t("td",[v._v("北京")]),v._v(" "),t("td",[v._v("北京")]),v._v(" "),t("td",[v._v("海淀区")]),v._v(" "),t("td",[v._v("D1")]),v._v(" "),t("td",[v._v("部门1")])]),v._v(" "),t("tr",[t("td",[v._v("101")]),v._v(" "),t("td",[v._v("张三")]),v._v(" "),t("td",[v._v("13910000001")]),v._v(" "),t("td",[v._v("100001")]),v._v(" "),t("td",[v._v("北京")]),v._v(" "),t("td",[v._v("北京")]),v._v(" "),t("td",[v._v("海淀区")]),v._v(" "),t("td",[v._v("D2")]),v._v(" "),t("td",[v._v("部门2")])]),v._v(" "),t("tr",[t("td",[v._v("101")]),v._v(" "),t("td",[v._v("张三")]),v._v(" "),t("td",[v._v("13910000002")]),v._v(" "),t("td",[v._v("100001")]),v._v(" "),t("td",[v._v("北京")]),v._v(" "),t("td",[v._v("北京")]),v._v(" "),t("td",[v._v("海淀区")]),v._v(" "),t("td",[v._v("D2")]),v._v(" "),t("td",[v._v("部门2")])]),v._v(" "),t("tr",[t("td",[v._v("102")]),v._v(" "),t("td",[v._v("李四")]),v._v(" "),t("td",[v._v("13910000003")]),v._v(" "),t("td",[v._v("200001")]),v._v(" "),t("td",[v._v("上海")]),v._v(" "),t("td",[v._v("上海")]),v._v(" "),t("td",[v._v("静安区")]),v._v(" "),t("td",[v._v("D3")]),v._v(" "),t("td",[v._v("部门3")])]),v._v(" "),t("tr",[t("td",[v._v("103")]),v._v(" "),t("td",[v._v("王五")]),v._v(" "),t("td",[v._v("13910000004")]),v._v(" "),t("td",[v._v("510001")]),v._v(" "),t("td",[v._v("广东省")]),v._v(" "),t("td",[v._v("广州")]),v._v(" "),t("td",[v._v("白云区")]),v._v(" "),t("td",[v._v("D4")]),v._v(" "),t("td",[v._v("部门4")])]),v._v(" "),t("tr",[t("td",[v._v("103")]),v._v(" "),t("td",[v._v("王五")]),v._v(" "),t("td",[v._v("13910000004")]),v._v(" "),t("td",[v._v("510001")]),v._v(" "),t("td",[v._v("广东省")]),v._v(" "),t("td",[v._v("广州")]),v._v(" "),t("td",[v._v("白云区")]),v._v(" "),t("td",[v._v("D5")]),v._v(" "),t("td",[v._v("部门 5")])])])]),v._v(" "),t("h2",{attrs:{id:"第二范式-2nf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二范式-2nf"}},[v._v("#")]),v._v(" 第二范式(2NF)")]),v._v(" "),t("p",[v._v("第二范式要同时满足下面两个条件")]),v._v(" "),t("blockquote",[t("ul",[t("li",[t("strong",[v._v("满足第一范式")])]),v._v(" "),t("li",[t("strong",[v._v("没有部分依赖")])])])]),v._v(" "),t("p",[v._v("例如，员工表的一个候选键是{id，mobile，deptNo}，而deptName依赖于deptNo，同样 name 依赖于 id，因此不是 2NF的。为了满足第二范式的条件，需要将这个表拆分成employee、dept、employee_dept、employee_mobile四个表。如下：")]),v._v(" "),t("p",[t("strong",[v._v("员工表 employee")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("id")]),v._v(" "),t("th",[v._v("name")]),v._v(" "),t("th",[v._v("zip")]),v._v(" "),t("th",[v._v("province")]),v._v(" "),t("th",[v._v("city")]),v._v(" "),t("th",[v._v("district")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("101")]),v._v(" "),t("td",[v._v("张三")]),v._v(" "),t("td",[v._v("100001")]),v._v(" "),t("td",[v._v("北京")]),v._v(" "),t("td",[v._v("北京")]),v._v(" "),t("td",[v._v("海淀区")])]),v._v(" "),t("tr",[t("td",[v._v("102")]),v._v(" "),t("td",[v._v("李四")]),v._v(" "),t("td",[v._v("200001")]),v._v(" "),t("td",[v._v("上海")]),v._v(" "),t("td",[v._v("上海")]),v._v(" "),t("td",[v._v("静安区")])]),v._v(" "),t("tr",[t("td",[v._v("103")]),v._v(" "),t("td",[v._v("王五")]),v._v(" "),t("td",[v._v("510001")]),v._v(" "),t("td",[v._v("广东省")]),v._v(" "),t("td",[v._v("广州")]),v._v(" "),t("td",[v._v("白云区")])])])]),v._v(" "),t("p",[t("strong",[v._v("部门表 dept")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("deptNo")]),v._v(" "),t("th",[v._v("deptName")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("D1")]),v._v(" "),t("td",[v._v("部门1")])]),v._v(" "),t("tr",[t("td",[v._v("D2")]),v._v(" "),t("td",[v._v("部门2")])]),v._v(" "),t("tr",[t("td",[v._v("D3")]),v._v(" "),t("td",[v._v("部门3")])]),v._v(" "),t("tr",[t("td",[v._v("D4")]),v._v(" "),t("td",[v._v("部门4")])]),v._v(" "),t("tr",[t("td",[v._v("D5")]),v._v(" "),t("td",[v._v("部门5")])])])]),v._v(" "),t("p",[t("strong",[v._v("员工部门关系表 employee_dept")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("id")]),v._v(" "),t("th",[v._v("deptNo")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("101")]),v._v(" "),t("td",[v._v("D1")])]),v._v(" "),t("tr",[t("td",[v._v("101")]),v._v(" "),t("td",[v._v("D2")])]),v._v(" "),t("tr",[t("td",[v._v("102")]),v._v(" "),t("td",[v._v("D3")])]),v._v(" "),t("tr",[t("td",[v._v("103")]),v._v(" "),t("td",[v._v("D4")])]),v._v(" "),t("tr",[t("td",[v._v("104")]),v._v(" "),t("td",[v._v("D5")])])])]),v._v(" "),t("p",[t("strong",[v._v("员工电话表 employee_mobile")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("id")]),v._v(" "),t("th",[v._v("mobile")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("101")]),v._v(" "),t("td",[v._v("13910000001")])]),v._v(" "),t("tr",[t("td",[v._v("101")]),v._v(" "),t("td",[v._v("13910000002")])]),v._v(" "),t("tr",[t("td",[v._v("102")]),v._v(" "),t("td",[v._v("13910000003")])]),v._v(" "),t("tr",[t("td",[v._v("103")]),v._v(" "),t("td",[v._v("13910000004")])])])]),v._v(" "),t("h2",{attrs:{id:"第三范式-3nf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三范式-3nf"}},[v._v("#")]),v._v(" 第三范式(3NF)")]),v._v(" "),t("p",[v._v("第三范式要同时满足下面两个条件")]),v._v(" "),t("blockquote",[t("ul",[t("li",[t("strong",[v._v("满足第二范式")])]),v._v(" "),t("li",[t("strong",[v._v("没有传递依赖")])])])]),v._v(" "),t("p",[v._v("例如，员工表的province、city、district依赖于zip，而zip依赖于id，换句话说，province、city、district传递依赖于id，违反了 3NF 规则。为了满足第三范式的条件，可以将这个表拆分成employee和zip两个表，如下")]),v._v(" "),t("p",[t("strong",[v._v("employee")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("id")]),v._v(" "),t("th",[v._v("name")]),v._v(" "),t("th",[v._v("zip")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("101")]),v._v(" "),t("td",[v._v("张三")]),v._v(" "),t("td",[v._v("100001")])]),v._v(" "),t("tr",[t("td",[v._v("102")]),v._v(" "),t("td",[v._v("李四")]),v._v(" "),t("td",[v._v("200001")])]),v._v(" "),t("tr",[t("td",[v._v("103")]),v._v(" "),t("td",[v._v("王五")]),v._v(" "),t("td",[v._v("510001")])])])]),v._v(" "),t("p",[t("strong",[v._v("地区表area")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("zip")]),v._v(" "),t("th",[v._v("province")]),v._v(" "),t("th",[v._v("city")]),v._v(" "),t("th",[v._v("district")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("100001")]),v._v(" "),t("td",[v._v("北京")]),v._v(" "),t("td",[v._v("北京")]),v._v(" "),t("td",[v._v("海淀区")])]),v._v(" "),t("tr",[t("td",[v._v("200001")]),v._v(" "),t("td",[v._v("上海")]),v._v(" "),t("td",[v._v("上海")]),v._v(" "),t("td",[v._v("静安区")])]),v._v(" "),t("tr",[t("td",[v._v("51000")]),v._v(" "),t("td",[v._v("广东省")]),v._v(" "),t("td",[v._v("广州")]),v._v(" "),t("td",[v._v("白云区")])])])]),v._v(" "),t("p",[v._v("在关系数据库模型设计中，一般需要满足第三范式的要求。如果一个表具有良好的主外键设计，就应该是满足3NF的表。规范化带来的好处是通过减少数据冗余提高更新数据的效率，同时保证数据完整性。然而，我们在实际应用中也要防止过度规范化的问题。规范化程度越高，划分的表就越多，在查询数据时越有可能使用表连接操作。而如果连接的表过多，会影响查询性能。关键的问题是要依据业务需求，仔细权衡数据查询和数据更新关系，指定最合适的规范化程度。不要为了遵循严格的规范化规则而修改业务需求")]),v._v(" "),t("h4",{attrs:{id:"数据库一对一、一对多、多对多设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库一对一、一对多、多对多设计"}},[v._v("#")]),v._v(" 数据库一对一、一对多、多对多设计")]),v._v(" "),t("p",[v._v("数据库实体间有三种对应关系：一对一、一对多、多对多")]),v._v(" "),t("p",[v._v("一对一关系示例：")]),v._v(" "),t("p",[v._v("一个学生对应一个学生档案材料 每个人都有唯一的身份证号")]),v._v(" "),t("p",[v._v("一对多关系示例：")]),v._v(" "),t("p",[v._v("一个学生只属于一个班，但这个班有多名学生")]),v._v(" "),t("p",[v._v("多对多关系示例：")]),v._v(" "),t("p",[v._v("一个学生可以选择多门课，一门课也可以有多名学生")]),v._v(" "),t("p",[v._v("一个人可以有多个角色，一个角色可以有多个人")]),v._v(" "),t("p",[v._v("一、一对多关系处理")]),v._v(" "),t("p",[v._v("设计数据库表：只需在 学生表 中多添加一个班级号的ID即可")]),v._v(" "),t("p",[v._v("二、多对多关系处理")]),v._v(" "),t("h4",{attrs:{id:"关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关系"}},[v._v("#")]),v._v(" 关系")]),v._v(" "),t("ul",[t("li",[v._v("创建成绩表scores，结构如下\n"),t("ul",[t("li",[v._v("id")]),v._v(" "),t("li",[v._v("学生")]),v._v(" "),t("li",[v._v("科目")]),v._v(" "),t("li",[v._v("成绩")])])]),v._v(" "),t("li"),v._v(" "),t("li",[v._v("思考：学生列应该存什么信息呢？")]),v._v(" "),t("li",[v._v("答：学生列的数据不是在这里新建的，而应该从学生表引用过来，关系也是一条数据；根据范式要求应该存储学生的编号，而不是学生的姓名等其它信息")]),v._v(" "),t("li",[v._v("同理，科目表也是关系列，引用科目表中的数据")])]),v._v(" "),t("p",[t("img",{attrs:{src:"images/r.png",alt:"关系"}})]),v._v(" "),t("ul",[t("li",[v._v("创建表的语句如下")])]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("create table scores(\nid int primary key auto_increment,\nstuid int,\nsubid int,\nscore decimal(5,2)\n);\n")])])]),t("h2",{attrs:{id:"外键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#外键"}},[v._v("#")]),v._v(" 外键")]),v._v(" "),t("ul",[t("li",[v._v("思考：怎么保证关系列数据的有效性呢？任何整数都可以吗？")]),v._v(" "),t("li",[v._v("答：必须是学生表中id列存在的数据，可以通过外键约束进行数据的有效性验证")]),v._v(" "),t("li",[v._v("为stuid添加外键约束")])]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("alter table scores add constraint stu_sco foreign key(stuid) references students(id);\n")])])]),t("ul",[t("li",[v._v("此时插入或者修改数据时，如果stuid的值在students表中不存在则会报错")]),v._v(" "),t("li",[v._v("在创建表时可以直接创建约束")])]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("create table scores(\nid int primary key auto_increment,\nstuid int,\nsubid int,\nscore decimal(5,2),\nforeign key(stuid) references students(id),\nforeign key(subid) references subjects(id)\n);\n")])])]),t("h2",{attrs:{id:"外键的级联操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#外键的级联操作"}},[v._v("#")]),v._v(" 外键的级联操作")]),v._v(" "),t("ul",[t("li",[v._v("在删除students表的数据时，如果这个id值在scores中已经存在，则会抛异常")]),v._v(" "),t("li",[v._v("推荐使用逻辑删除，还可以解决这个问题")]),v._v(" "),t("li",[v._v("可以创建表时指定级联操作，也可以在创建表后再修改外键的级联操作")]),v._v(" "),t("li",[v._v("语法")])]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("alter table scores add constraint stu_sco foreign key(stuid) references students(id) on delete cascade;\n")])])]),t("ul",[t("li",[v._v("级联操作的类型包括：\n"),t("ul",[t("li",[v._v("restrict（限制）：默认值，抛异常")]),v._v(" "),t("li",[v._v("cascade（级联）：如果主表的记录删掉，则从表中相关联的记录都将被删除")]),v._v(" "),t("li",[v._v("set null：将外键设置为空")]),v._v(" "),t("li",[v._v("no action：什么都不做")])])])])])}),[],!1,null,null,null);_.default=e.exports}}]);
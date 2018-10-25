<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Problist.aspx.cs" Inherits="Cust.Web.Problist" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <link href="layui/css/layui.css" rel="stylesheet" />
    <script src="js/jquery-3.3.1.js"></script>
    <script src="layui/layui.js"></script>
    <script>
        $(function () {
            $("#bt1").click(function () {
                layui.use('layer', function () {
                    var layer = layui.layer;

                    var index = layer.open({
                        type:2,
                        title: '添加记录',
                        fix: false,
                        maxmin: true,
                        shadeClose: true,
                        shade: 0.8,
                        area: ['650px', '600px'],
                        content: '/addPro.aspx',
                        success: function (layero, index) {
                            layui.use('laydate', function () {
                                var laydate = layui.laydate;
                                //执行一个laydate实例
                                laydate.render({
                                    elem: '#RTime' //指定元素
                                });
                            });

                        }

                    });
                });


            });
        })
    </script>
</head>
<body>

    <table id="demo" lay-filter="test"></table>


    <br />

    <div class="layui-row layui-col-space10">
        <div class="layui-col-md12">
            <button id="bt1" class="layui-btn layui-btn-primary">添加</button>
        </div>
    </div>

    <script>


        layui.use('table', function () {
            var table = layui.table;

            //第一个实例
            table.render({
                elem: '#demo'

              , url: '/Servers/ProServer.asmx/GetPro' //数据接口
                , skin: 'row' //表格风格
              , page: {
                  theme: '#47648E',
                  limits: [3, 6, 10],
                  first: '首页'
                , last: '尾页'
                , prev: 'PREV'
                , next: 'NEXT'
              }
              , parseData: function (res) { //res 即为原始返回的数据
                  return {
                      "code": res.code, //解析接口状态
                      "msg": res.message, //解析提示文本
                      "count": res.count, //解析数据长度
                      "data": res.data.ds //解析数据列表
                  };
              },
                cols: [[ //表头
                  { field: 'Id', title: 'ID', sort: true }
                  , { field: 'DATE', title: '记录时间', sort: true, }
                  , { field: 'Reportor', title: '上报人', sort: true, }
                  , { field: 'Phone', title: '电话', sort: true, }
                  , { field: 'Cname', title: '客户', sort: true, }
                  , { field: 'Sname', title: '系统', sort: true, }
                  , { field: 'ProblemDetail', title: '描述', sort: true, }
                  , { field: 'Name', title: '原因', sort: true, }
                  , { field: 'Methods', title: '处理方案', sort: true, }
                  , { field: 'Days', title: '用时', sort: true, }
                  , { field: 'Result', title: '处理方案', sort: true, }
                  , { field: 'fname', title: '故障类型', sort: true, }
                  , { field: 'right', align: 'center', toolbar: '#barDemo', width: 300 }
                ]],
                done: function (res, curr, count) {
                    $('th').css({ 'background-color': '#47648E', 'color': '#fff' });
                    $("tr").mouseover(function () {
                        $(this).css("background", "#E0ECFF").siblings().css("background", "white");
                    });
                    //$('table.layui-table thead tr th:eq(0)').addClass('layui-hide');
                }
            });

            //监听工具条
            table.on('tool(test)', function (obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
                var data = obj.data; //获得当前行数据
                var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
                var tr = obj.tr; //获得当前行 tr 的DOM对象

                if (layEvent === 'detail') { //查看
                    //do somehing
                } else if (layEvent === 'del') { //删除
                    layer.confirm('真的删除行么', function (index) {
                        obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
                        layer.close(index);
                        //向服务端发送删除指令
                        del(data.Id);
                    });
                } else if (layEvent === 'edit') { //编辑
                    //do something
                    showup(data.Id);
                }
            });
        });
    </script>
    <script type="text/html" id="barDemo">
        <%--  <a class="layui-btn layui-btn-xs" lay-event="detail">查看</a>--%>
        <a class="layui-btn layui-btn-xs layui-btn-normal" style="background-color: #47648E; width: 80px" lay-event="edit">编辑</a>
        <a class="layui-btn layui-btn-xs layui-btn-normal" style="background-color: #47648E; width: 80px" lay-event="del">删除</a>


    </script>



</body>
</html>

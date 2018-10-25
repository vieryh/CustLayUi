<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CustNew.aspx.cs" Inherits="Cust.Web.CustNew" %>

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
                        type: 2,
                        title: '添加客户',
                        fix: false,
                        maxmin: true,
                        shadeClose: true,
                        shade: 0.8,
                        area: ['600px', '300px'],
                        content: '/addCusto.aspx',
                        end: function () {
                            //location.reload();
                        }
                    });
                });
            });
        })
    </script>
    <script>
        function showup(i) {
            $.getJSON("/Servers/CustomerServer.asmx/ShowUpCusto", { "id": i }, function (data) {
                layui.use('layer', function () {
                    var layer = layui.layer;
                    var index = layer.open({
                        type: 2,
                        title: '编辑客户资料',
                        fix: false,
                        maxmin: true,
                        shadeClose: true,
                        shade: 0.8,
                        area: ['600px', '300px'],
                        content: '/Showupcusto.aspx',
                        success: function (layero, index) {
                            var body = layer.getChildFrame('body', index);
                            //var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
                            //console.log(body.html()) //得到iframe页的body内容
                            body.find('#Name').val(data.Name);
                            body.find('#Note').val(data.Note);
                            body.find('#Id').val(data.Id);
                        }
                    });
                });
            });
        }
        function del(i) {
            $.getJSON("/Servers/CustomerServer.asmx/DelCusto", { "id": i }, function (data) {
                if (data.status == 0) {
                    layer.alert('删除成功', { offset: 't', icon: 6 }, function () {
                        layer.close(layer.index);
                        // window.parent.location.reload();
                    });
                } else {
                    layui.msg("删除失败");
                }
            });
        }
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
              
              , url: '/Servers/CustomerServer.asmx/GetCustomer' //数据接口
                , skin: 'row' //表格风格
              , page: {
                  theme: '#47648E',
                  limits: [3, 6, 10],
                  first: '首页'
                ,last: '尾页'
                ,prev: 'PREV'
                ,next: 'NEXT'
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
                  , { field: 'Name', title: '用户名', sort: true, }
                  , { field: 'Note', title: '备注', sort: true, }
                  , { fixed: 'right', align: 'center', toolbar: '#barDemo' }
                ]],
                done: function (res, curr, count) {
                    $('th').css({ 'background-color': '#47648E', 'color': '#fff' });
                    $("tr").mouseover(function () {
                        $(this).css("background", "#E0ECFF").siblings().css("background", "white");
                    });
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
        <a class="layui-btn layui-btn-xs layui-btn-normal" style="background-color:#47648E;width:80px" lay-event="edit">编辑</a>
        <a class="layui-btn layui-btn-xs layui-btn-normal" style="background-color:#47648E;width:80px" lay-event="del">删除</a>


    </script>

</body>
</html>

<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AddCusto.aspx.cs" Inherits="Cust.Web.AddCusto" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <link href="layui/css/layui.css" rel="stylesheet" />
    <script src="js/jquery-3.3.1.js"></script>
    <script src="layui/layui.js"></script>
</head>
<body>
    <br />
    <form class="layui-form" action="">
        <div class="layui-form-item">
            <label class="layui-form-label">客户名称</label>
            <div class="layui-input-block">
                <input type="text" name="Name" required lay-verify="required" placeholder="请输入客户名称" autocomplete="off" class="layui-input" style="width:400px" >
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">备注</label>
            <div class="layui-input-block">
                <input type="text" name="Note"  lay-verify="required" placeholder="请输入备注" autocomplete="off" class="layui-input" style="width:400px" >
            </div>
        </div>
        
        <div class="layui-form-item">
            <div class="layui-input-block">
                <button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>
                <button type="reset" class="layui-btn layui-btn-primary">重置</button>
            </div>
        </div>
    </form>

    <script>
        //Demo
        layui.use('form', function () {
            var form = layui.form;

            //监听提交
            form.on('submit(formDemo)', function (data) {

               // layer.msg(JSON.stringify(data.field));
                $.ajax({//异步请求返回给后台
                    url: '/Servers/CustomerServer.asmx/AddCusto',
                    type: 'POST',
                    data: data.field,
                    dataType: 'json',
                    success: function (data) {
                        //这里获取到数据执行显示
                        if (data.status==0) {
                            //layer.alert('添加成功', { icon: 1 });
                            //window.parent.location.reload();
                            layer.alert('添加成功', { offset: 't', icon: 6 }, function () {
                                layer.close(layer.index);
                                window.parent.location.reload();
                            });
                        } else {
                            layui.msg("添加失败");
                        }
                    }
                });
                return false;
            });
        });
    </script>
</body>
</html>

<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Showupcusto.aspx.cs" Inherits="Cust.Web.Showupcusto" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link href="layui/css/layui.css" rel="stylesheet" />
    <script src="js/jquery-3.3.1.js"></script>
    <script src="layui/layui.js"></script>

</head>
<body>
    <br />
    <form class="layui-form" action="">
        <div class="layui-form-item">
            <label class="layui-form-label">名称</label>
            <div class="layui-input-block">
                <input id="Name" type="text" name="Name" required lay-verify="required" placeholder="名称" autocomplete="off" class="layui-input" style="width:400px" >
            </div>
        </div>
        <input type="hidden" id="Id" name="id" value=" " />
        <div class="layui-form-item">
            <label class="layui-form-label">备注</label>
            <div class="layui-input-block">
                <input id="Note" type="text" name="Note"  lay-verify="required" placeholder="备注" autocomplete="off" class="layui-input" style="width:400px" >
            </div>
        </div>
        
        <div class="layui-form-item">
            <div class="layui-input-block">
                <button class="layui-btn" lay-submit lay-filter="formDemo">提交</button>
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
                    url: '/Servers/CustomerServer.asmx/UpCusto?id='+$("#Id").val(),
                    type: 'POST',
                    data: data.field,
                    dataType: 'json',
                    success: function (data) {
                        //这里获取到数据执行显示
                        if (data.status==0) {
                            //layer.alert('添加成功', { icon: 1 });
                            //window.parent.location.reload();
                            layer.alert('编辑成功', { offset: 't', icon: 6 }, function () {
                                layer.close(layer.index);
                                window.parent.location.reload();
                            });
                        } else {
                            layui.msg("编辑失败");
                        }
                    }
                });
                return false;
            });
        });
    </script>
</body>
</html>

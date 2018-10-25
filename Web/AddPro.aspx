<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AddPro.aspx.cs" Inherits="Cust.Web.AddPro" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <link href="layui/css/layui.css" rel="stylesheet" />
    <script src="/js/jquery-3.3.1.js"></script>
    <script src="/layui/layui.js"></script>
   
</head>
<body>
    <br />
    <form class="layui-form" action="">
        <div class="layui-form-item">
            <label class="layui-form-label">录入人</label>
            <div class="layui-input-block">
                <input id="Reportor" name="Reportor" lay-verify="title" autocomplete="off" placeholder="录入人" class="layui-input" type="text" style="width: 400px">
            </div>
        </div>

        <div class="layui-form-item">
            <div class="layui-inline">
                <label class="layui-form-label">日期选择</label>
                <div class="layui-input-block">
                    <input  id="RTime" autocomplete="off" class="layui-input" type="text" />
                </div>
            </div>
        </div>
        <script>    
            layui.use('laydate', function () {
                var laydate = layui.laydate;
                //执行一个laydate实例
                laydate.render({
                    elem: '#RTime' //指定元素
                });
            });
        </script>

        <div class="layui-form-item">
            <label class="layui-form-label">电话</label>
            <div class="layui-input-block">
                <input id="Phone" name="Phone" lay-verify="title" autocomplete="off" placeholder="电话" class="layui-input" type="text" style="width: 400px">
            </div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label">客户</label>
            <div class="layui-input-block" style="width: 400px">
                <select name="city" lay-verify="required">
                    <option value=""></option>
                    <option value="0">北京</option>
                    <option value="1">上海</option>
                    <option value="2">广州</option>
                    <option value="3">深圳</option>
                    <option value="4">杭州</option>
                </select>
            </div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label">系统</label>
            <div class="layui-input-block" style="width: 400px">
                <select name="city" lay-verify="required">
                    <option value=""></option>
                    <option value="0">北京</option>
                    <option value="1">上海</option>
                    <option value="2">广州</option>
                    <option value="3">深圳</option>
                    <option value="4">杭州</option>
                </select>
            </div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label">描述</label>
            <div class="layui-input-block">
                <input id="detail" name="detail" lay-verify="title" autocomplete="off" placeholder="描述" class="layui-input" type="text" style="width: 400px">
            </div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label">原因</label>
            <div class="layui-input-block">
                <input id="Reason" name="Reason" lay-verify="title" autocomplete="off" placeholder="原因" class="layui-input" type="text" style="width: 400px">
            </div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label">处理天数</label>
            <div class="layui-input-block">
                <input id="days" name="days" lay-verify="title" autocomplete="off" placeholder="处理天数" class="layui-input" type="text" style="width: 400px">
            </div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label">故障类型</label>
            <div class="layui-input-block" style="width: 400px">
                <select name="city" lay-verify="required">
                    <option value=""></option>
                    <option value="0">北京</option>
                    <option value="1">上海</option>
                    <option value="2">广州</option>
                    <option value="3">深圳</option>
                    <option value="4">杭州</option>
                </select>
            </div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label">是否确认</label>
            <div class="layui-input-block">
                <input name="sex" value="是" title="是" checked="" type="radio">
                <input name="sex" value="否" title="否" type="radio">
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
                    url: '/Servers/ProServer.asmx/AddPro',
                    type: 'POST',
                    data: data.field,
                    dataType: 'json',
                    success: function (data) {
                        //这里获取到数据执行显示
                        if (data.status == 0) {
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

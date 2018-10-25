<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Custmors.aspx.cs" Inherits="Cust.Web.Custmors" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <link href="style/jquery-easyui-v1.5.4/themes/default/easyui.css" rel="stylesheet" />
    <link href="style/jquery-easyui-v1.5.4/themes/icon.css" rel="stylesheet" />
    <link href="style/jquery-easyui-v1.5.4/demo/demo.css" rel="stylesheet" />
    <script src="style/jquery-easyui-v1.5.4/jquery.min.js"></script>
    <script src="style/jquery-easyui-v1.5.4/jquery.easyui.min.js"></script>
    <style>
        #table-7 thead th {
            background-color: rgb(81, 130, 187);
            color: #fff;
            border-bottom-width: 0;
        }

        /* Column Style */
        #table-7 td {
            color: #000;
        }
        /* Heading and Column Style */
        #table-7 tr, #table-7 th {
            border-width: 1px;
            border-style: solid;
            border-color: rgb(81, 130, 187);
        }

        /* Padding and font style */
        #table-7 td, #table-7 th {
            padding: 5px 10px;
            font-size: 12px;
            font-family: Verdana;
            font-weight: bold;
        }
    </style>
    <script>

        function showmodify(i) {
            $.ajaxSettings.async = false;
            $.getJSON("/ashx/GetCust.ashx", { "id": i }, function (data) {

                //alert(data.DATE + "--" + data.Reportor)
          
                $("#custname").textbox('setValue', data.Name);
                $("#h1").val(data.Id);
                $('#divmodify').dialog('open');
            });
            $.ajaxSettings.async = true;
        }
        function del(i) {
            alert(i);
        }
        function submitForm() {
            $('#fnew').form('submit', {
                url: "/ashx/AddCust.ashx",
                success: function (data) {
                    alert(data);
                    location.reload();
                }
            });
        }
        function clearForm() {
            $('#ff').form('clear');
        }
        function modify() {
            $('#fmodify').form('submit', {
                url: "/ashx/UpdateCust.ashx",
                success: function (data) {
                    alert(data);
                    location.reload();
                }
            });
        }
    </script>
</head>
<body>


    <div style="margin: 20px 0;">
        <a href="javascript:void(0)" class="easyui-linkbutton" onclick="$('#dlg').dialog('open')">新增客户</a>
        <a href="javascript:void(0)" class="easyui-linkbutton" onclick="$('#dlg').dialog('close')">关闭</a>
        <a id="toExcel" href="javascript:void(0)" class="easyui-linkbutton">导出excel</a>


    </div>
    <div style="position: absolute; top: 10%; left: 15%">
        <form id="fm">
            <table id="table-7" style="width: 100%">
                <!-- Replace "table-1" with any of the design numbers -->
                <thead>
                    <th>ID</th>
                    <th>客户名称</th>

                    <th>操作</th>
                </thead>
                <tbody>
                    <% for (int i = 0; i < list.Count; i++)
                       {
                    %><tr>
                        <td><%=list[i].Id%></td>
                        <td><%=list[i].Name%></td>

                        <td>
                            <a href="#" onclick="showmodify(<%=list[i].Id%>)">修改</a>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        <a href="#" onclick="del(<%=list[i].Id%>)">删除</a>
                        </td>
                    </tr>
                    <% 
                       } 
                    %>
                </tbody>
            </table>
        </form>
    </div>

         <div id="dlg" class="easyui-dialog" title="新增客户" data-options="closed:'true'" style="width: 50%; padding: 10px">
            <form id="fnew" method="post">
                <div style="margin-bottom: 20px">
                    <input class="easyui-textbox" name="CustName" style="width: 100%" data-options="label:'客户名称:',required:true"/>
                </div>
            </form>
            <div style="text-align: center; padding: 5px 0">
                <a href="javascript:void(0)" class="easyui-linkbutton" onclick="submitForm()" style="width: 80px">提交</a>
                <a href="javascript:void(0)" class="easyui-linkbutton" onclick="clearForm()" style="width: 80px">清空</a>
            </div>
        </div>

    <div id="divmodify" class="easyui-window" title="修改名称" data-options="iconCls:'icon-save',closed:true" style="width: 400px; height: 150px; padding: 10px; border: 0px">

        <form id="fmodify" method="post">
              <input type="hidden" id="h1" name="h1"  />
            <div style="margin-bottom: 20px; margin-top: 20px">
                <input class="easyui-textbox" id="custname" name="custname" style="width: 100%" data-options="label:'名称:',required:true">
            </div>
        </form>
        <div style="text-align: center; padding: 5px 0">
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="modify()" style="width: 80px">保存</a>
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="clearForm()" style="width: 80px">清空</a>
        </div>

    </div>
</body>
</html>


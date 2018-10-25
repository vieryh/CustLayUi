<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SystemInfo.aspx.cs" Inherits="Cust.Web.SystemInfo" %>

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

        function showmodify() {
            $('#w').window('open');     
        }
        function del(i) {
            alert(i);
        }
        function submitForm() {
            $('#ff').form('submit');
        }
        function clearForm() {
            $('#ff').form('clear');
        }
    </script>
</head>
<body>

    <div style="position: absolute; top: 10%; left: 15%">
        软件系统维护
        <form id="fm">
            <table id="table-7" style="width:100%">
                <!-- Replace "table-1" with any of the design numbers -->
                <thead>
                    <th>ID</th>
                    <th>名称</th>
                     <th>故障次数</th>
                    <th>操作</th>
                </thead>
                <tbody>
                    <% for (int i = 0; i < list.Count; i++)
                       {
                    %><tr>
                        <td><%=list[i].Id%></td>
                        <td><%=list[i].Name%></td>
                           <td><%=list[i].Count%></td>
                        <td>
                            <a href="#" onclick="showmodify()">修改</a>
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

    <div id="w" class="easyui-window" title="修改名称"  data-options="iconCls:'icon-save',closed:true" style="width: 400px; height: 150px; padding: 10px; border:0px">
      
		<form id="ff" method="post">
			<div style="margin-bottom:20px;margin-top:20px">
				<input class="easyui-textbox" name="name" style="width:100%" data-options="label:'名称:',required:true">
			</div>
		</form>
		<div style="text-align:center;padding:5px 0">
			<a href="javascript:void(0)" class="easyui-linkbutton" onclick="submitForm()" style="width:80px">保存</a>
			<a href="javascript:void(0)" class="easyui-linkbutton" onclick="clearForm()" style="width:80px">清空</a>
		</div>

    </div>
</body>
</html>

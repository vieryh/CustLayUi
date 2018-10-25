<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="States.aspx.cs" Inherits="Cust.Web.States" %>

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
</head>
<body>
    <form id="fm">
        <table id="table-7" style="width: 100%">
            <!-- Replace "table-1" with any of the design numbers -->
            <thead>
                <%-- <th>ID</th>--%>
                <th>状态时间</th>
                <th>系统</th>
                <th>状态</th>
                <th>客户名称</th>
                <th>故障软件系统</th>
                <th>故障描述</th>
                <th>故障原因</th>
                <th>解决用时(天数)</th>
                <th>是否解决</th>
                <th>客户是否确认</th>
                <th>问题类型</th>
                <th>操作</th>
            </thead>
            <tbody>
                <%--      <% for (int i = 0; i < list.Count; i++)
                       {
                    %><tr>
                   <%--     <td><%=list[i].Id%></td>--%>
                <%--       <td><%=list[i].DATE%></td>
                        <td><%=list[i].Reportor%></td>
                        <td><%=list[i].Phone%></td>
                        <td><%=list[i].Cname%></td>
                        <td><%=list[i].Sname%></td>
                        <td><%=list[i].ProblemDetail%></td>
                        <td><%=list[i].Name%></td>
                        <td><%=list[i].Days%></td>
                        <td><%=list[i].Result%></td>
                        <td><%=list[i].IsConfilmId==1?"已确认":"未确认"%></td>
                        <td><%=list[i].Fname%></td>
                        <td>
                            <a href="#" onclick="showmodify(<%=list[i].Id%>)">修改</a>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        <a href="#" onclick="del(<%=list[i].Id%>)">删除</a>
                        </td>
                    </tr>
                    <% 
                       } 
                    %>--%>--%>
            </tbody>
        </table>
    </form>
</body>
</html>

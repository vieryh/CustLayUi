<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ProblemList.aspx.cs" Inherits="Cust.Web.ProblemList" %>

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
    <script>
        $(function () {

        });
        function submitForm() {
            $('#fm1').form('submit');
        }
        function clearForm() {
            $('#fm1').form('clear');
        }
    </script>
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
        $(function () {
            $("#toExcel").click(function () {
                //$.post("/ashx/ToExcel.ashx", {}, function (data) {
                //    if (data=="ok") {
                //        alert("导出成功");
                //    }
                   
                //});
                window.open("/ashx/ToExcel.ashx");
            });
        });
        function showmodify(i) {
            $.ajaxSettings.async = false;
            $.getJSON("/ashx/GetPro.ashx", { "id": i }, function (data) {

                //alert(data.DATE + "--" + data.Reportor)
                $("#h1").val(data.Id);
                $("#mdate").datetimebox('setValue', parsedate(data.DATE));
                $("#mreportor").textbox('setValue', data.Reportor);
                $("#mphone").textbox("setValue", data.Phone);
                $("#mdesc").textbox("setValue", data.ProblemDetail);
                $("#mreason").textbox("setValue", data.Name);
                $("#mdays").textbox("setValue", data.Days);
                $("#mok").textbox("setValue", data.Result);
                $("#mcname").combobox("setValue", data.CustomerId);
                $("#mmethod").textbox("setValue", data.Methods);
                $("#msname").combobox("setValue", data.SystemId);
                $("#mfname").combobox("setValue", data.CategoryId);
                $("#mresult").combobox("setValue", data.IsConfilmId);
                $('#fmodify').dialog('open');
            });
            $.ajaxSettings.async = true;

        }

        function modify() {
            $('#mm').form('submit', {
                url: "/ashx/UpdateDetail.ashx",
                success: function (data) {
                    alert(data);
                    location.reload();
                }
            });
        }
        function del(i) {
            $.post("/ashx/delPro.ashx", { "id": i }, function (data) {
                if (data == "删除成功") {
                    alert(data);
                    location.reload();
                } else {
                    alert(data);
                }

            })
        }
        function submitForm() {
            //$('#ff').form('submit');
            $('#ff').form('submit', {
                url: "/ashx/AddDetail.ashx",
                success: function (data) {
                    alert(data);
                    location.reload();
                }
            });
        }
        function clearForm() {
            $('#ff').form('clear');
        }
        function parsedate(val) {
            var date = new Date(parseInt(val.replace("/Date(", "").replace(")/", ""), 10));
            var year = date.getFullYear();
            var month = date.getMonth() + 1; //月份+1     
            var day = date.getDate();
            var hour = date.getHours();
            var minutes = date.getMinutes();
            var second = date.getSeconds();
            return day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + second;
        }
    </script>
</head>
<body>
    <div id="div1" style="position: absolute; top: 2%; left: 2%">
        <div style="margin: 20px 0;">
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="$('#dlg').dialog('open')">新增记录</a>
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="$('#dlg').dialog('close')">关闭</a>
            <a id="toExcel" href="javascript:void(0)" class="easyui-linkbutton" >导出excel</a>
          
            <input id="key" class="easyui-textbox" name="key"  style="width:30%"/>
            <a id="find" href="javascript:void(0)" class="easyui-linkbutton" onclick="doSearch()" >搜索</a>
	</div>
	<script>
	    function doSearch() {
	
	        $.post("/ProblemList.aspx", { "keys": $("#key").val() }, function (data) {
	          
	        })
	    }
	</script>
   
        <div id="dlg" class="easyui-dialog" title="问题上报" data-options="closed:'true'" style="width: 50%; padding: 10px">
            <form id="ff" method="post">
                <div style="margin-bottom: 20px">
                    <input class="easyui-datetimebox" name="reportDate" label="上报时间:" labelposition="top" style="width: 100%;">
                </div>

                <div style="margin-bottom: 20px">
                    <input class="easyui-textbox" name="reportor" style="width: 100%" data-options="label:'上报人:',required:true">
                </div>
                <div style="margin-bottom: 20px">
                    <input class="easyui-textbox" name="phone" style="width: 100%" data-options="label:'联系电话:',required:true">
                </div>
                <div style="margin-bottom: 20px">
                    <select class="easyui-combobox" id="cname" name="cname" label="客户名称" style="width: 100%">
                        <%
                            for (int i = 0; i < clist.Count; i++)
                            {
                        %>
                        <option value="<%=clist[i].Id %>"><%=clist[i].Name %></option>
                        <%        
                        }
                        %>
                    </select>
                </div>
                <div style="margin-bottom: 20px">
                    <select class="easyui-combobox" name="sname" label="软件系统" style="width: 100%">
                        <%
                            for (int i = 0; i < xlist.Count; i++)
                            {
                        %>
                        <option value="<%=xlist[i].Id %>"><%=xlist[i].Name %></option>
                        <%        
                        }
                        %>
                    </select>
                </div>
                <div style="margin-bottom: 20px">
                    <input class="easyui-textbox" name="desc" style="width: 100%" data-options="label:'故障描述:',required:true">
                </div>
                <div style="margin-bottom: 20px">
                    <input class="easyui-textbox" name="reason" style="width: 100%" data-options="label:'故障原因:',required:true">
                </div>

                <div style="margin-bottom: 20px">
                    <input class="easyui-textbox" name="days" style="width: 100%" data-options="label:'解决用时:',required:true">
                </div>
                  <div style="margin-bottom: 20px">
                    <input class="easyui-textbox" name="method" style="width: 100%" data-options="label:'解决方案:',required:true">
                </div>

                <div style="margin-bottom: 20px">
                    <input class="easyui-textbox" name="ok" style="width: 100%" data-options="label:'是否解决:',required:true">
                </div>

                <div style="margin-bottom: 20px">
                    <select class="easyui-combobox" name="qid" label="客户是否确认解决结果" style="width: 100%">
                        <option value="1">已确认</option>
                        <option value="2">未确认</option>

                    </select>
                </div>
                <div style="margin-bottom: 20px">
                    <select class="easyui-combobox" name="fname" label="问题类型" style="width: 100%">
                        <%
                            for (int i = 0; i < flist.Count; i++)
                            {
                        %>
                        <option value="<%=flist[i].Id %>"><%=flist[i].Name %></option>
                        <%        
                        }
                        %>
                    </select>
                </div>
            </form>
            <div style="text-align: center; padding: 5px 0">
                <a href="javascript:void(0)" class="easyui-linkbutton" onclick="submitForm()" style="width: 80px">提交</a>
                <a href="javascript:void(0)" class="easyui-linkbutton" onclick="clearForm()" style="width: 80px">清空</a>
            </div>
        </div>
        <form id="fm">
            <table id="table-7" style="width: 100%">
                <!-- Replace "table-1" with any of the design numbers -->
                <thead>
                   <%-- <th>ID</th>--%>
                    <th>记录时间</th>
                    <th>上报人</th>
                    <th>联系电话</th>
                    <th>客户名称</th>
                    <th>故障软件系统</th>
                    <th>故障描述</th>
                    <th>故障原因</th>
                    <th>解决用时(天数)</th>
                    <th>是否解决</th>
                    <th>解决方式</th>
                    <th>客户是否确认</th>
                    <th>问题类型</th>
                    <th>操作</th>
                </thead>
                <tbody>
                    <% for (int i = 0; i < list.Count; i++)
                       {
                    %><tr>
                   <%--     <td><%=list[i].Id%></td>--%>
                        <td><%=list[i].DATE%></td>
                        <td><%=list[i].Reportor%></td>
                        <td><%=list[i].Phone%></td>
                        <td><%=list[i].Cname%></td>
                        <td><%=list[i].Sname%></td>
                        <td><%=list[i].ProblemDetail%></td>
                        <td><%=list[i].Name%></td>
                        <td><%=list[i].Days%></td>
                        <td><%=list[i].Result%></td>
                         <td><%=list[i].Methods%></td>
                        <td><%=list[i].IsConfilmId==1?"已确认":"未确认"%></td>
                        <td><%=list[i].Fname%></td>
                        <td>
                            <%if (name=="hw")
                              {
                            %>      
                             
                            <a href="#" onclick="showmodify(<%=list[i].Id%>)">修改</a>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        <a href="#" onclick="del(<%=list[i].Id%>)">删除</a>
                            <% }
                              else
                              {%>
                                  <span style="color:red">无权限</span>
                             <% } %>
                        </td>
                    </tr>
                    <% 
                       } 
                    %>
                  
                </tbody>
               
            </table>
        </form>
        <br />
        <br />
        <div style="margin-bottom:100px;position:absolute">  <%=navStr %> </div> 
    </div>
    


    <div id="fmodify" class="easyui-dialog" title="问题上报" data-options="closed:'true'" style="width: 50%; padding: 10px">
        <form id="mm" method="post">
            <input type="hidden" id="h1" name="h1"  />
            <div style="margin-bottom: 20px">
                <input class="easyui-datetimebox" id="mdate" name="reportDate" label="上报时间:" labelposition="top" style="width: 100%;">
            </div>

            <div style="margin-bottom: 20px">
                <input class="easyui-textbox" id="mreportor" name="reportor" style="width: 100%" data-options="label:'上报人:',required:true">
            </div>
            <div style="margin-bottom: 20px">
                <input class="easyui-textbox" id="mphone" name="phone" style="width: 100%" data-options="label:'联系电话:',required:true">
            </div>
            <div style="margin-bottom: 20px">
                <select class="easyui-combobox" id="mcname" name="cname" label="客户名称" style="width: 100%">
                    <%
                        for (int i = 0; i < clist.Count; i++)
                        {
                    %>
                    <option value="<%=clist[i].Id %>"><%=clist[i].Name %></option>
                    <%        
                        }
                    %>
                </select>
            </div>
            <div style="margin-bottom: 20px">
                <select class="easyui-combobox" id="msname" name="sname" label="软件系统" style="width: 100%">
                    <%
                        for (int i = 0; i < xlist.Count; i++)
                        {
                    %>
                    <option value="<%=xlist[i].Id %>"><%=xlist[i].Name %></option>
                    <%        
                        }
                    %>
                </select>
            </div>
            <div style="margin-bottom: 20px">
                <input class="easyui-textbox" name="desc" id="mdesc" style="width: 100%" data-options="label:'故障描述:',required:true">
            </div>
            <div style="margin-bottom: 20px">
                <input class="easyui-textbox" name="reason" id="mreason" style="width: 100%" data-options="label:'故障原因:',required:true">
            </div>

            <div style="margin-bottom: 20px">
                <input class="easyui-textbox" name="days" id="mdays" style="width: 100%" data-options="label:'解决用时:',required:true">
            </div>

            <div style="margin-bottom: 20px">
                <input class="easyui-textbox" name="ok" id="mok" style="width: 100%" data-options="label:'是否解决:',required:true">
            </div>

            <div style="margin-bottom: 20px">
                <select class="easyui-combobox" id="mresult" name="qid" label="客户是否确认解决结果" style="width: 100%">
                    <option value="1">已确认</option>
                    <option value="2">未确认</option>

                </select>
            </div>
               <div style="margin-bottom: 20px">
                <input class="easyui-textbox" name="method" id="mmethod" style="width: 100%" data-options="label:'解决方案:',required:true">
            </div>
            <div style="margin-bottom: 20px">
                <select class="easyui-combobox" id="mfname" name="fname" label="问题类型" style="width: 100%">
                    <%
                        for (int i = 0; i < flist.Count; i++)
                        {
                    %>
                    <option value="<%=flist[i].Id %>"><%=flist[i].Name %></option>
                    <%        
                        }
                    %>
                </select>
            </div>
        </form>
        <div style="text-align: center; padding: 5px 0">
            <a id="update" href="javascript:void(0)" class="easyui-linkbutton" onclick="modify()" style="width: 80px">更新</a>
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="clearForm()" style="width: 80px">清空</a>
        </div>

    </div>
    
</body>
</html>



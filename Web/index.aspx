<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="Cust.Web.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>软件售后故障登记处理平台</title>
<link href="Css/default.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="js/themes/default/easyui.css" />
<link rel="stylesheet" type="text/css" href="js/themes/icon.css" />
<script type="text/javascript" src="js/jquery-1.4.4.min.js"></script>

<script src="js/highcharts.js"></script>
<script src="js/exporting.js"></script>
<script type="text/javascript" src="js/jquery.easyui.min.1.2.2.js"></script>
<script type="text/javascript" src='js/outlook2.js'> </script>
<script>
    $(function () {

        $.getJSON("ashx/WeatherHandle.ashx", function (result) {
            var j = JSON.stringify(result);
            $("#weather").text
            (result.data.forecast[0].date + "    " + result.data.forecast[0].high + "    " + result.data.forecast[0].low + "    " + result.data.forecast[0].type + "--" + result.data.city)
        });

    });
</script>
<script type="text/javascript">
    var _menus = {
        "menus": [
             {
                 "menuid": "1", "icon": "icon-sys", "menuname": "维护列表",
                 "menus": [
                            { "menuid": "14", "menuname": "维护列表", "icon": "icon-role", "url": "Problist.aspx" }
                 ]
             }, {
                 "menuid": "28", "icon": "icon-sys", "menuname": "基础设置",
                 "menus": [{ "menuid": "41", "menuname": "操作员", "icon": "icon-nav", "url": "Oper.aspx" },
                         { "menuid": "42", "menuname": "软件系统", "icon": "icon-nav", "url": "SystemInfo.aspx" },
                         { "menuid": "43", "menuname": "故障类型", "icon": "icon-nav", "url": "Types.aspx" },
                          { "menuid": "44", "menuname": "客户设置", "icon": "icon-nav", "url": "CustNew.aspx" }
                 ]
             },
             {
                 "menuid": "28", "icon": "icon-sys", "menuname": "GIS系统",
                 "menus": [{ "menuid": "41", "menuname": "demo", "icon": "icon-nav", "url": "gis.aspx" }
                 ]
             }
        ]
    };
    //设置登录窗口
    function openPwd() {
        $('#w').window({
            title: '修改密码',
            width: 300,
            modal: true,
            shadow: true,
            closed: true,
            height: 160,
            resizable: false
        });
    }
    //关闭登录窗口
    function closePwd() {
        $('#w').window('close');
    }



    //修改密码
    function serverLogin() {
        var $newpass = $('#txtNewPass');
        var $rePass = $('#txtRePass');

        if ($newpass.val() == '') {
            msgShow('系统提示', '请输入密码！', 'warning');
            return false;
        }
        if ($rePass.val() == '') {
            msgShow('系统提示', '请在一次输入密码！', 'warning');
            return false;
        }

        if ($newpass.val() != $rePass.val()) {
            msgShow('系统提示', '两次密码不一至！请重新输入', 'warning');
            return false;
        }

        $.post('/ajax/editpassword.ashx?newpass=' + $newpass.val(), function (msg) {
            msgShow('系统提示', '恭喜，密码修改成功！<br>您的新密码为：' + msg, 'info');
            $newpass.val('');
            $rePass.val('');
            close();
        })

    }

    $(function () {

        openPwd();

        $('#editpass').click(function () {
            $('#w').window('open');
        });

        $('#btnEp').click(function () {
            serverLogin();
        })

        $('#btnCancel').click(function () { closePwd(); })

        $('#loginOut').click(function () {
            $.messager.confirm('系统提示', '您确定要退出本次登录吗?', function (r) {

                if (r) {
                    location.href = '/ashx/Loginout.ashx';
                }
            });
        })
    });



</script>

</head>
<body class="easyui-layout" style="overflow-y: hidden" scroll="no">
    <noscript>
<div style=" position:absolute; z-index:100000; height:2046px;top:0px;left:0px; width:100%; background:white; text-align:center;">
    <img src="images/noscript.gif" alt='抱歉，请开启脚本支持！' />
</div></noscript>
    <div region="north" split="true" border="false" style="overflow: hidden; height: 60px; background: url(images/layout-browser-hd-bg.gif) #7f99be repeat-x center 50%; line-height: 50px; color: #fff; font-family: Verdana, 微软雅黑,黑体">
         <span id="weather" style="float: right; padding-right: 20px;" class="head">天气预报</span>
        <span style="float: right; padding-right: 20px;" class="head">欢迎 <%=name %> <a href="#" id="editpass">修改密码</a> <a href="#" id="loginOut">安全退出</a></span>
        <span style="padding-left: 10px; font-size: 16px;">软件售后故障登记处理平台</span>
    </div>
    <div region="south" split="true" style="height: 30px; background: #D2E0F2;">
        <div class="footer">重庆市伟岸测器制造股份有限公司 ©2018</div>
    </div>
    <div region="west" hide="true" split="true" title="导航菜单" style="width: 180px;" id="west">
        <div id="nav" class="easyui-accordion" fit="true" border="false">
            <!--  导航内容 -->

        </div>

    </div>
    <div id="mainPanle" region="center" style="background: #eee; overflow-y: hidden">
        <div id="tabs" class="easyui-tabs" fit="true" border="false">
            <div title="欢迎使用" style="padding: 20px; overflow: hidden; color: red;">
                <h1 style="font-size: 14px; color: black">欢迎使用软件售后故障登记处理平台</h1>
                <div id="container" style="float: left; min-width: 49%; height: 350px; border: 1px solid #4188eb"></div>
                <div id="container1" style="float: right; min-width: 49%; height: 350px; border: 1px solid #4188eb"></div>
                <div id="num1" style="float: left; min-width: 100%; height: 360px; border: 1px solid #4188eb; margin-top: 30px"></div>
            </div>
        </div>
    </div>


    <!--修改密码窗口-->
    <div id="w" class="easyui-window" title="修改密码" collapsible="false" minimizable="false"
        maximizable="false" icon="icon-save" style="width: 300px; height: 150px; padding: 5px; background: #fafafa;">
        <div class="easyui-layout" fit="true">
            <div region="center" border="false" style="padding: 10px; background: #fff; border: 1px solid #ccc;">
                <table cellpadding="3">
                    <tr>
                        <td>新密码：</td>
                        <td>
                            <input id="txtNewPass" type="Password" class="txt01" /></td>
                    </tr>
                    <tr>
                        <td>确认密码：</td>
                        <td>
                            <input id="txtRePass" type="Password" class="txt01" /></td>
                    </tr>
                </table>
            </div>
            <div region="south" border="false" style="text-align: right; height: 30px; line-height: 30px;">
                <a id="btnEp" class="easyui-linkbutton" icon="icon-ok" href="javascript:void(0)">确定</a> <a id="btnCancel" class="easyui-linkbutton" icon="icon-cancel" href="javascript:void(0)">取消</a>
            </div>
        </div>
    </div>

    <div id="mm" class="easyui-menu" style="width: 150px;">
        <div id="mm-tabupdate">刷新</div>
        <div class="menu-sep"></div>
        <div id="mm-tabclose">关闭</div>
        <div id="mm-tabcloseall">全部关闭</div>
        <div id="mm-tabcloseother">除此之外全部关闭</div>
        <div class="menu-sep"></div>
        <div id="mm-tabcloseright">当前页右侧全部关闭</div>
        <div id="mm-tabcloseleft">当前页左侧全部关闭</div>
        <div class="menu-sep"></div>
        <div id="mm-exit">退出</div>
    </div>
    <script type="text/javascript">

        $.getJSON("/ashx/GetCategoryList.ashx", {}, function (datas) {
            //alert(datas);
            Highcharts.chart('container', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: '软件售后问题类型分布图'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        }
                    }
                },
                series: [{
                    name: '问题类型占比',
                    colorByPoint: true,
                    data: datas
                }]
            });


            Highcharts.chart('num1', {

                title: {
                    text: '问题解决直线图, 2018 01-12'
                },
                credits: {
                    enabled: false
                },
                subtitle: {
                    text: '来源: 伟岸技术中心软件开发部'
                },

                yAxis: {
                    title: {
                        text: '解决问题数量'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },

                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 2018
                    }
                },

                series: [{
                    name: '集成器原因',
                    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                }, {
                    name: '控制阀原因',
                    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                }, {
                    name: '热量计原因',
                    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
                }, {
                    name: '人员安装原因',
                    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
                }, {
                    name: '其他',
                    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
                }],

                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 100
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                }

            });
        });

        $.getJSON("/ashx/GetSystem.ashx", {}, function (datas1) {

            Highcharts.chart('container1', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: '各软件系统问题分布图'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        }
                    }
                },
                series: [{
                    name: '问题类型占比',
                    colorByPoint: true,
                    data: datas1
                }]
            });
        });

    </script>

</body>
</html>

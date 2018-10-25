<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="gis.aspx.cs" Inherits="Cust.Web.gis" %>

<!DOCTYPE html>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <title></title>
    <style type="text/css">
     
        html {
            height: 100%;
        }

        body {
            height: 100%;
            margin: 0px;
            padding: 0px;
        }

        #container {
            height: 100%;
        }
    </style>
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=soDmGDxxx3o4Rmhzp4X0XgEd4x2x9ysn"></script>
</head>
<body>
    <div id="container"></div>
    <script>
        var map = new BMap.Map("container");
        var point = new BMap.Point(106.497367, 29.621959);
        map.centerAndZoom(point, 15);
        map.enableScrollWheelZoom(true);
        var opts = { type: BMAP_NAVIGATION_CONTROL_SMALL }
        map.addControl(new BMap.NavigationControl(opts));//add NavigationControl
        map.addControl(new BMap.ScaleControl());
        map.addControl(new BMap.OverviewMapControl());
        map.addControl(new BMap.MapTypeControl());

        var point = new BMap.Point(106.497367, 29.621959);
        var marker = new BMap.Marker(point);        // 创建标注    
        map.addOverlay(marker);

        //var mapStyle = { style: "bluish" }
        //map.setMapStyle(mapStyle);
        var sContent =
     "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>重庆市伟岸测器股份制造有限公司</h4>" +
     "<img style='float:right;margin:4px' id='imgDemo' src='/company.jpg' width='139' height='104' title='天安门'/>" +
     "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>重庆市伟岸测器制造股份有限公司为工业过程控制、能源计量和智慧城市提供专业的测量与传感器仪表,公司是国家发改委批准的国家创新平台《仪器仪表传感器与测量系统国家...</p>" +
     "</div>";
        var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象   
        marker.addEventListener("click", function () {
            map.openInfoWindow(infoWindow, map.getCenter());
        });



    </script>
</body>
</html>

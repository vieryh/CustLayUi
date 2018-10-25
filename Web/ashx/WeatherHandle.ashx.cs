using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Cust.Model;
using Cust.DBUtility;

namespace Cust.Web.ashx
{
    /// <summary>
    /// WeatherHandle 的摘要说明
    /// </summary>
    public class WeatherHandle : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string html = getHtml("http://wthrcdn.etouch.cn/weather_mini?citykey=101040100");
            context.Response.Write(html);
        }

        private string getHtml(string html)//传入网址
        {
            Cust.DBUtility.GZipWebClient MyWebClient = new Cust.DBUtility.GZipWebClient();
            MyWebClient.Encoding = System.Text.Encoding.UTF8;
            string bytespageData = MyWebClient.DownloadString(html); //从指定网站下载数据
            return bytespageData;
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}
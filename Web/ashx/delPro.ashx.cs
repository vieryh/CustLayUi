using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Cust.Model;
using Cust.BLL;

namespace Cust.Web.ashx
{
    /// <summary>
    /// delPro 的摘要说明
    /// </summary>
    public class delPro : IHttpHandler
    {

        BLL.detailBll bll = new detailBll();
        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            int pid=Convert.ToInt32(context.Request["id"]);
            bool f=bll.Delete(pid);
            if (f)
            {
                context.Response.Write("删除成功");
            }
            else
            {
                context.Response.Write("删除失败");
            }
           
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
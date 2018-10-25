using Cust.BLL;
using Cust.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Cust.Web.ashx
{
    /// <summary>
    /// UpdateCust 的摘要说明
    /// </summary>
    public class UpdateCust : IHttpHandler
    {
        customerBll bll = new customerBll();

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            customer model = new customer();
            model.Id = Convert.ToInt32(context.Request["h1"]);
            model.Name =context.Request["custname"];
          

            bool i = bll.Update(model);
            if (i)
            {
                context.Response.Write("更新成功");
            }
            else
            {
                context.Response.Write("更新失败");
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
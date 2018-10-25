using Cust.BLL;
using Cust.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Cust.Web.ashx
{
    /// <summary>
    /// AddCust 的摘要说明
    /// </summary>
    public class AddCust : IHttpHandler
    {
        customerBll bll = new customerBll();

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            customer model = new customer();
            model.Name = context.Request["CustName"];
           

            int i = bll.Add(model);
            if (i > 0)
            {
                context.Response.Write("添加成功");
            }
            else
            {
                context.Response.Write("添加失败");
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
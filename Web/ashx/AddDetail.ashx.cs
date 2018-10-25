using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Cust.BLL;
using Cust.Model;

namespace Cust.Web.ashx
{
    /// <summary>
    /// AddDetail 的摘要说明
    /// </summary>
    public class AddDetail : IHttpHandler
    {
        detailBll bll = new detailBll();
        public void ProcessRequest(HttpContext context)
        {

            context.Response.ContentType = "text/plain";
            detail model = new detail();
            model.DATE= Convert.ToDateTime(context.Request["reportDate"]);
            model.Reportor = context.Request["reportor"];
            model.Phone = context.Request["phone"];
            model.CustomerId =Convert.ToInt32(context.Request["cname"]);
            model.SystemId = Convert.ToInt32(context.Request["sname"]);
            model.ProblemDetail = context.Request["desc"];
            model.Name = context.Request["reason"];
            model.Days = context.Request["days"];
            model.Methods = context.Request["method"];
            model.Result = context.Request["ok"];
            model.IsConfilmId = Convert.ToInt32(context.Request["qid"]);
            model.CategoryId= Convert.ToInt32(context.Request["fname"]);

            int i=bll.Add(model);
            if (i>0)
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
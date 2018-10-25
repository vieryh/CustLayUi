using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Cust.BLL;
using Cust.Model;
using System.Web.Script.Serialization;

namespace Cust.Web.ashx
{
    /// <summary>
    /// GetPro 的摘要说明
    /// </summary>
    public class GetPro : IHttpHandler
    {
        BLL.detailBll bll = new detailBll();
        public void ProcessRequest(HttpContext context)
        {

            context.Response.ContentType = "application/Json";
            int pid = Convert.ToInt32(context.Request["id"]);
            detail model = bll.GetModel(pid);
            JavaScriptSerializer jss = new JavaScriptSerializer();
            string json = jss.Serialize(model);
            context.Response.Write(json);
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
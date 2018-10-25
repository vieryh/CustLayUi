using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Cust.Web.ashx
{
    /// <summary>
    /// Loginout 的摘要说明
    /// </summary>
    public class Loginout : IHttpHandler,System.Web.SessionState.IRequiresSessionState
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            if (context.Session["UserInfo"]!=null)
            {
                context.Session["UserInfo"] = null;
            }
            context.Response.Redirect("/login.html");
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
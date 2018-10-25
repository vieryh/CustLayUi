using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Cust.Model;
using Cust.DBUtility;

namespace Cust.Web.ashx
{
    /// <summary>
    /// Login 的摘要说明
    /// </summary>
    public class Login : IHttpHandler,System.Web.SessionState.IRequiresSessionState
    {
        BLL.operatorBll obll = new BLL.operatorBll();
        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string userName = context.Request["name"];
            string pwd = context.Request["pwd"];
            pwd = MD5Helper.getHashcode(pwd);
            string strWhere = string.Format("name='{0}' and pwd='{1}'", userName, pwd);
            List<Model.operators> listModel = obll.GetModelList(strWhere);
            if (listModel.Count > 0)
            {
                //string userInfo = userName + context.Session.SessionID;
                context.Session["userInfo"] = listModel[0];
   
                context.Response.Write("ok");
            }
            else
            {
                context.Response.Write("fiald");
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
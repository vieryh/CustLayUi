using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace Cust.Web.ashx
{
    /// <summary>
    /// GetSystem 的摘要说明
    /// </summary>
    public class GetSystem : IHttpHandler
    {

     
        BLL.SystemBll bll = new  BLL.SystemBll();
        public string jsonlist = "";
        public void ProcessRequest(HttpContext context)
        {
            List<Model.System> list = bll.GetModelList("");

            Object[] o = new Object[list.Count];
            for (int i = 0; i < list.Count; i++)
            {

                Showjson s = new Showjson();
                s.name = list[i].Name;
                s.y = (int) list[i].Count;
                o[i] = s;    
            }
            JavaScriptSerializer jsonSerialize = new JavaScriptSerializer();
            jsonlist = jsonSerialize.Serialize(o);
            context.Response.ContentType = "application/json";
            context.Response.Write(jsonlist);
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }

         public class Showjson
        {
            public  string name { get; set; }
            public int y { get; set; }
        }
    }
}
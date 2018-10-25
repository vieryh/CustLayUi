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
    /// GetCategoryList 的摘要说明
    /// </summary>
    public class GetCategoryList : IHttpHandler
    {
        BLL.faultcategoryBll bll = new faultcategoryBll();
        public string jsonlist = "";
        public void ProcessRequest(HttpContext context)
        {
            List<Model.faultcategory> list = bll.GetModelList("");

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
           // context.Response.End(); 
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
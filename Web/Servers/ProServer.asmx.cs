using Cust.BLL;
using Cust.DBUtility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

namespace Cust.Web.Servers
{
    /// <summary>
    /// ProServer 的摘要说明
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // 若要允许使用 ASP.NET AJAX 从脚本中调用此 Web 服务，请取消注释以下行。 
    // [System.Web.Script.Services.ScriptService]
    public class ProServer : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }


        /// <summary>
        /// 获取 Customer
        /// </summary>
        /// <returns></returns>
        [WebMethod(Description = "Get customer")]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public void GetPro()
        {

            object tempJson;
            int c = 0;

            int page = int.Parse(Context.Request["page"]);

            int limit = int.Parse(Context.Request["limit"]);
            try
            {
                Thread.Sleep(200);

                var oneHelper = new detailBll();

                //var tempDt = oneHelper.GetModelList("");

                //分页
                var tempDt = oneHelper.GetListByPage("", "id", (page - 1) * limit + 1, page * limit);

                c = oneHelper.GetRecordCount("");
                tempJson = new { code = 0, count = c, data = tempDt, message = "", };
            }
            catch (Exception ex)
            {
                throw new Exception("data error:" + ex);
            }

            WriteResults(tempJson);
        }

        private void WriteResults(object obj)
        {
            var tempJson = JsonHelper.SerializeByJsonNet(obj);
            Context.Response.Write(tempJson);
            Context.Response.Flush();
            Context.Response.End();
        }


    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Cust.BLL;
using Cust.Model;
using System.Web.Script.Serialization;

namespace Cust.Web
{
    public partial class index : System.Web.UI.Page
    {
        public string name;
        protected void Page_Load(object sender, EventArgs e)
        {

            if (Session["UserInfo"]==null)
            {
                Response.Redirect("/login.html");
            }
            else
            {
                Model.operators model = Session["UserInfo"] as Model.operators;
                name = model.Name;
            }
        }
    }
}
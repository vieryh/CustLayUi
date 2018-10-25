using System;
using System.Collections.Generic;

using System.Net;
using System.Web;

namespace Cust.DBUtility
{
    public class GZipWebClient : WebClient  
    {
         protected override WebRequest GetWebRequest(Uri address)  
          {  
              HttpWebRequest request = (HttpWebRequest)base.GetWebRequest(address);  
              request.AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate;  
              return request;  
          } 
    }
}



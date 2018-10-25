using System;
using System.Collections.Generic;

using System.Security.Cryptography;
using System.Text;


namespace Cust.DBUtility

{
    public static class MD5Helper
    {
        public static string getHashcode(string str) 
        { 
         
            StringBuilder sb = new StringBuilder();
            byte[] tb = System.Text.Encoding.UTF8.GetBytes(str);
            MD5 md5 = new MD5CryptoServiceProvider();
            byte[] newb=md5.ComputeHash(tb);
            for (int i = 0; i < newb.Length; i++)
            {
                sb.Append(newb[i].ToString("x2"));
            }
            return  sb.ToString();
        }
    }
}

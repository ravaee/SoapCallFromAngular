using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Models
{
    [DataContract]
    public class Customer
    {
       [DataMember]
       public int Id { get; set; }
       
       [DataMember]
       public string Name { get; set; }
    }
}
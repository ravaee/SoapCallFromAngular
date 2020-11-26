using System.Runtime.Serialization;

namespace soapServer.models
{
    [DataContract]
    public class Product
    {
        [DataMember]
        public int Id { get; set; }

        [DataMember]
        public string Name { get; set; }
    }
}
import java.net.InetAddress;

public class DemoInetAddress {
    public static void main(String[] args) throws Exception{
        InetAddress obj = InetAddress.getLocalHost();
        System.out.println("Host Name: " + obj.getHostName());
        System.out.println("Host Address: " + obj.getHostAddress());
        System.out.println("Description: " + obj.toString());
        System.out.println("Multicast Address: " + obj.isMulticastAddress());   
    }
}
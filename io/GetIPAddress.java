import java.net.InetAddress;

public class GetIPAddress {
    public static void main(String[] args) {
        try {
            InetAddress[] addresses = InetAddress.getAllByName("www.youtube.com");
            for (InetAddress address : addresses) {
                System.out.println(address.getHostAddress());
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

import java.net.*;

public class UDPClient {
    public static void main(String[] args) throws Exception {
        DatagramSocket ds = new DatagramSocket(8000);
        System.out.println("UDP Client is running...");
        String message = "Hello, UDP Server!";
        byte[] b = message.getBytes();
        InetAddress ip = InetAddress.getLocalHost();
        DatagramPacket dp = new DatagramPacket(b, b.length, ip, 9000);
        ds.send(dp);
        System.out.println("Message sent...");
        ds.close();
    }
}

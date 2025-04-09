import java.net.*;

public class UDPServer {
    public static void main(String[] args) throws Exception{
        DatagramSocket ds = new DatagramSocket(9000);
        byte arr[] = new byte[1024];
        DatagramPacket dp = new DatagramPacket(arr, arr.length);
        System.out.println("Server is running and waiting for a client...");
        ds.receive(dp);
        System.out.println("Client connected!");
        byte[] data = dp.getData();
        String msg = new String(data);
        System.out.println("Message from client: "+ msg);
        ds.close();
    }
}

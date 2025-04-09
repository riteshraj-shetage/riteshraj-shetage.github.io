import java.io.*;
import java.net.*;

public class TCPServer {
    public static void main(String[] args) throws Exception {
        ServerSocket ss = new ServerSocket(1234);
        System.out.println("Server started. Waiting for client connection...");
        Socket s = ss.accept();
        System.out.println("Client connected!");
        InputStream is = s.getInputStream();
        InputStreamReader isr = new InputStreamReader(is);
        BufferedReader br = new BufferedReader(isr);
        String msg = br.readLine();
        System.out.println("Received from client: " + msg);
        br.close();
        s.close();  
        ss.close();
    }
}

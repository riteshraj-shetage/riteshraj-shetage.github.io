import java.net.*;
import java.io.*;

public class TCPClient {
    public static void main(String[] args) throws Exception {
        Socket s = new Socket("localhost", 1234);
        OutputStream os = s.getOutputStream();
        PrintWriter pw = new PrintWriter(os);
        pw.println("Hello Server, this is Client!");
        pw.flush();
        pw.close();
        s.close();
    }
}

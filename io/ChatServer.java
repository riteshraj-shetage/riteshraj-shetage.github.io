import java.net.*;
import java.io.*;

public class ChatServer {
    public static void main(String[] args) throws Exception {
        ServerSocket ss = new ServerSocket(1234);
        Socket s = ss.accept();
        System.out.println("Connection established!");
        BufferedReader br = new BufferedReader(new InputStreamReader(s.getInputStream()));
        BufferedReader kb = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter pw = new PrintWriter(s.getOutputStream(), true); // auto-flush enabled
        while(true) {
            String str1 = br.readLine();
            System.out.println("Client: " + str1);
            if (str1.equals("exit")) {
                break;
            }
            System.out.print("Server: ");
            String str2 = kb.readLine();
            pw.println(str2);
        }
        s.close();
        ss.close();
    }
}

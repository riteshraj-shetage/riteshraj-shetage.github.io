import java.io.*;
import java.net.*;

public class ChatClient {
    public static void main(String[] args) throws Exception{
        Socket s = new Socket("localhost", 1234);
        BufferedReader br = new BufferedReader(new InputStreamReader(s.getInputStream()));
        PrintWriter pw = new PrintWriter(s.getOutputStream(), true); // auto-flush enabled
        BufferedReader kb = new BufferedReader(new InputStreamReader(System.in));
        String str1, str2;
        while(!(str1 = kb.readLine()).equals("exit")){
            pw.println(str1);
            str2 = br.readLine();
            System.out.println("Server Response: "+str2);
        }
        kb.close();
        br.close();
        pw.close();
        s.close();
    }
}

import java.net.*;
import java.util.*;
import java.io.*;

public class DemoURLCon {
    public static void main(String[] args) {
        try {
            URL url = new URL("http://www.google.com:80/index.html");
            URLConnection con = url.openConnection();

            System.out.println("Content Type: " + con.getContentType());
            System.out.println("Content Length: " + con.getContentLength());
            System.out.println("Date: " + new Date(con.getDate()));

            InputStream is = con.getInputStream();
            InputStreamReader isr = new InputStreamReader(is);
            
            BufferedReader br = new BufferedReader(isr);
            PrintWriter pw = new PrintWriter("C:\\Users\\Riteshraj\\Desktop\\Java\\local_sample.txt");

            String data = br.readLine();
            
            while (data != null) {
                pw.println(data);
            }

            br.close();
            pw.close();

        } catch (Exception e) {
            System.out.println(e);;
        }
    }
}
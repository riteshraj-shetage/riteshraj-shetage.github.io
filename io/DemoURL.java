import java.net.URL;

public class DemoURL {
    public static void main(String[] args) {
        try {
            URL url = new URL("https://www.google.com:80/index.html");
            System.out.println("Protocol: " + url.getProtocol());
            System.out.println("Host Name: " + url.getHost());
            System.out.println("Port Number: " + url.getPort());
            System.out.println("File Name: " + url.getFile());
            System.out.println("External Form: " + url.toExternalForm());
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

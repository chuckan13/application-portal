package com.example;

import java.io.IOException;
import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    @RequestMapping(value = "/api/sendemail/{email}")
    public String sendEmail(@PathVariable("email") String emailAddress)
            throws AddressException, MessagingException, IOException {
        sendmail(emailAddress);
        return "Email sent successfully";
    }

    private void sendmail(String emailAddress) throws AddressException, MessagingException, IOException {
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props, new javax.mail.Authenticator() {

            protected PasswordAuthentication getPasswordAuthentication() {
                String emailPassword = System.getenv("GMAIL_PASSWORD");
                return new PasswordAuthentication("eclubwebdevteam@gmail.com", emailPassword);
            }
        });
        Message msg = new MimeMessage(session);
        msg.setFrom(new InternetAddress("eclubwebdevteam@gmail.com", false));

        msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(emailAddress));
        msg.setSubject("E-Club Application Confirmation");
        msg.setContent(
                "Thank you for applying to Princeton's Entrepreneurship Club. We have received your application and will reach out with next steps.",
                "text/html");
        msg.setSentDate(new Date());

        MimeBodyPart messageBodyPart = new MimeBodyPart();
        messageBodyPart.setContent(
                "Thank you for applying to Princeton's Entrepreneurship Club. We have received your application and will reach out with next steps.",
                "text/html");

        Multipart multipart = new MimeMultipart();
        multipart.addBodyPart(messageBodyPart);
        MimeBodyPart attachPart = new MimeBodyPart();

        attachPart.attachFile("src/main/resources/mail-logo.png");
        multipart.addBodyPart(attachPart);
        msg.setContent(multipart);
        Transport.send(msg);
    }
}

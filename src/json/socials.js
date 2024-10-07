import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa6";
const socials = {
  all: [
    { to: "https://github.com/krazykarthik2", icon:FaGithub },
    { to: "https://linkedin.com/in/karthikkrazy", icon:FaLinkedinIn },
    { to: "https://twitter.com/karthikkrazy8/", icon:FaTwitter },
    { to: "https://instagram.com/karthik_goparaju_", icon:FaInstagram },
    { to: "https://t.me/karthikkrazy", icon:FaTelegram },
    {
      to: "mailto:goparajukarthik2@gmail.com?subject=hi%2c%20karthik%20goparaju%2c%20@karthikkrazy.web.app&body=hi%20%2c%20Mr.Karthik%20Goparaju%20%2c%20i%20found%20out%20about%20you%20on%20your%20website.%20i%27d%20like%20to%20contact%20you.%0a%0a",
      icon:FaEnvelope,
    },
  ],
};
export default socials;

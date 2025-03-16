import { motion } from "framer-motion";
import { Github, Instagram, Twitter } from "lucide-react";

const ContactCard = () => {
  const SocialLink = [
    {
      platform: "GitHub",
      link: "https://github.com/AdityaZxxx",
      logo: <Github />,
    },
    {
      platform: "X",
      link: "https://x.com/adxxya30",
      logo: <Twitter />,
    },
    {
      platform: "Instagram",
      link: "https://instagram.com/adxxya30",
      logo: <Instagram />,
    },
  ];
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="neo-brutalist-box-accent2 p-6"
    >
      <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
      <p className="mb-6">
        Have a project in mind or just want to say hello? Feel free to contact
        me through this form or via the contact information provided.
      </p>
      <div className="space-y-4">
        <div>
          <p className="font-bold">Email:</p>
          <p>adityaofficial714@gmail.com</p>
        </div>
        <div>
          <p className="font-bold">Location:</p>
          <p>Kediri, ID</p>
        </div>
        <div className="pt-4">
          <div className="flex space-x-4">
            <h2>Social Links</h2>
            <div className="flex justify-center gap-4 text-sm">
              {SocialLink.map((social) => (
                <a
                  key={social.platform}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-center bg-white dark:bg-black text-black dark:text-white font-bold border-4 border-black dark:border-white transform hover:rotate-3 transition-transform"
                >
                  {social.logo}
                  <span className="hidden md:inline">{social.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;

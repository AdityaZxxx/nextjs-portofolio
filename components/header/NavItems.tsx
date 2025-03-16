import { Code, File, Home, ImageIcon, MessageSquare, User } from "lucide-react";

export const NAV_ITEMS = [
  { name: "home", icon: <Home size={24} /> },
  { name: "about", icon: <User size={24} /> },
  { name: "projects", icon: <Code size={24} /> },
  { name: "blog", icon: <File size={24} /> },
  { name: "gallery", icon: <ImageIcon size={24} /> },
  { name: "contact", icon: <MessageSquare size={24} /> },
];

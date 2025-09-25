import { LucideProps, Settings } from "lucide-react";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import { create } from "zustand";

interface Tab {
  id: string;
  title: string;
  icon: any
}

interface TabState {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export const useTabStore = create<TabState>((set) => ({
  tabs: [
    { id: "chatbot", title: "Bot trả lời tin nhắn", icon: Settings },
    { id: "createvideo", title: "Tạo video" ,icon: Settings},
    { id: "createpostfb", title: "Tạo nội dung post facebook", icon: Settings },
   
  ],
  activeTab: "chatbot", 
  setActiveTab: (id) => set({ activeTab: id }),
}));

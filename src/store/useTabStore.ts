import { create } from "zustand";

interface Tab {
  id: string;
  title: string;
}

interface TabState {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export const useTabStore = create<TabState>((set) => ({
  tabs: [
    { id: "chatbot", title: "Bot trả lời tin nhắn" },
    { id: "createvideo", title: "Tạo video" },
    { id: "createpostfb", title: "Tạo nội dung post facebook" },
   
  ],
  activeTab: "chatbot", 
  setActiveTab: (id) => set({ activeTab: id }),
}));

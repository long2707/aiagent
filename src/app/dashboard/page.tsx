"use client";

import ChatbotTab from "@/components/Tabs/ChatbotTab";
import CreatePostFacebook from "@/components/Tabs/CreatePostFacebook";
import CreateVideo from "@/components/Tabs/CreateVideo";
import { useTabStore } from "@/store/useTabStore";
import React from "react";

const page = () => {
	const { activeTab } = useTabStore();

	if (activeTab == "chatbot") return <ChatbotTab />;
	if (activeTab == "createvideo") return <CreateVideo />;
	if (activeTab == "createpostfb") return <CreatePostFacebook />;
	return <div> page 4</div>;
};

export default page;

"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

interface Message {
	role: "user" | "bot";
	text: string;
}

export default function ChatbotTab() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [input, setInput] = useState("");
	const [isTyping, setIsTyping] = useState(false);
	const chatRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
	}, [messages, isTyping]);

	const sendMessage = async () => {
		if (!input.trim()) return;

		const userMsg: Message = { role: "user", text: input };
		setMessages((prev) => [...prev, userMsg]);
		setInput("");
		setIsTyping(true);

		try {
			const res = await axios.post("/api/chat", {
				input,
				sessionId: "my-user-session-123", // mỗi user 1 session riêng
			});

			const data = await res.data;

			const botMsg: Message = { role: "bot", text: data.reply };
			setMessages((prev) => [...prev, botMsg]);
		} catch (error) {
			setMessages((prev) => [
				...prev,
				{ role: "bot", text: "Lỗi khi gọi chatbot." },
			]);
		} finally {
			setIsTyping(false);
		}
	};
	return (
		<div className="flex-1">
			<div className="flex-1 flex flex-col">
				<div className="h-[calc(100vh-5rem)] flex flex-col">
					{/* Header */}
					<div className="p-4 border-b  font-semibold text-lg">
						Chat AI Assistant
					</div>

					{/* Chat messages */}
					<div
						className="flex-1 min-h-0 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent px-3 py-4"
						ref={chatRef}
					>
						{messages.map((m, i) => (
							<div
								key={i}
								className={`flex items-start gap-2 ${
									m.role === "user"
										? "justify-end"
										: "justify-start"
								}`}
							>
								{m.role === "bot" && (
									<div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
										🤖
									</div>
								)}
								<div
									className={`px-3 py-2 rounded-xl max-w-xl ${
										m.role === "user"
											? "bg-blue-500 text-white rounded-br-none"
											: "bg-white text-gray-800 border rounded-bl-none"
									}`}
								>
									{m.text}
								</div>
								{m.role === "user" && (
									<div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
										🧑
									</div>
								)}
							</div>
						))}

						{isTyping && (
							<div className="flex items-center gap-2">
								<div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
									🤖
								</div>
								<div className="bg-white border px-3 py-2 rounded-xl text-gray-500">
									Bot is typing...
								</div>
							</div>
						)}
					</div>

					{/* Input */}
					<div className="p-4 border-t flex ">
						<input
							type="text"
							placeholder="Nhập tin nhắn..."
							className="flex-1 border rounded-l px-3 py-2 focus:outline-none"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={(e) =>
								e.key === "Enter" && sendMessage()
							}
						/>
						<button
							onClick={sendMessage}
							className="bg-pink-500 text-white px-4 rounded-r"
						>
							➤
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

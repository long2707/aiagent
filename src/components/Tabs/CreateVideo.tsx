"use client";
import { useState } from "react";

export default function CreateVideo() {
	const [productName, setProductName] = useState("");
	const [tenSanPham, setTenSanPham] = useState("");
	const [moTa, setMoTa] = useState("");
	const [fileProduct, setFileProduct] = useState<File | null>(null);
	const [fileAnhMau, setFileAnhMau] = useState<File | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("product name", fileProduct as File);
		formData.append("Tên sản phẩm", tenSanPham);
		formData.append("Mô tả sản phẩm", moTa);
		formData.append("anh_mau", fileAnhMau as File);

		try {
			const res = await fetch(
				"https://ai.cnttnttdvn.com/form-test/6e1666ee-1050-4895-8522-aa1b5e9898fc", // URL form n8n
				{
					method: "POST",
					body: formData,
				}
			);

			if (res.ok) {
				alert("Gửi thành công!");
			} else {
				alert("Có lỗi khi gửi form");
			}
		} catch (err) {
			console.error("Form submit error:", err);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4 p-6 border rounded">
			<div>
				<label className="block">Tên sản phẩm</label>
				<input
					type="text"
					value={tenSanPham}
					onChange={(e) => setTenSanPham(e.target.value)}
					className="border p-2 w-full"
				/>
			</div>

			<div>
				<label className="block">Mô tả</label>
				<textarea
					value={moTa}
					onChange={(e) => setMoTa(e.target.value)}
					className="border p-2 w-full"
				/>
			</div>

			<div>
				<label className="block">Upload product name (file)</label>
				<input
					type="file"
					onChange={(e) =>
						setFileProduct(e.target.files?.[0] || null)
					}
				/>
			</div>

			<div>
				<label className="block">Upload ảnh mẫu</label>
				<input
					type="file"
					onChange={(e) => setFileAnhMau(e.target.files?.[0] || null)}
				/>
			</div>

			<button
				type="submit"
				className="bg-red-500 text-white px-4 py-2 rounded"
			>
				Submit
			</button>
		</form>
	);
}

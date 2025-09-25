"use client";
import React from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
	username: z
		.string()
		.min(2, { message: "Username must be at least 2 charactes" })
		.max(50),
	email: z.string().email({ message: "Invalid email address" }),
	phone: z.string().min(10).max(15),
	location: z.string().min(2),
	role: z.enum(["admin", "editor", "user"]),
});
const EditUser = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
		},
	});

	return (
		<SheetContent>
			<SheetHeader>
				<SheetTitle className="mb-4">Edit User</SheetTitle>
				<SheetDescription asChild>
					<Form {...form}>
						<form className="space-y-8">
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Username</FormLabel>
										<FormControl>
											<Input
												placeholder="shadcn"
												{...field}
											/>
										</FormControl>
										<FormDescription>
											This is your public display name.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit"> Submit</Button>
						</form>
					</Form>
				</SheetDescription>
			</SheetHeader>
		</SheetContent>
	);
};

export default EditUser;

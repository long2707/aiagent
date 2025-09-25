"use client";
import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
const TodoList = () => {
	const [date, setDate] = React.useState<Date | undefined>(new Date());
	const [open, setOpen] = React.useState<boolean>(false);
	return (
		<div className="">
			<h1 className="text-lg font-medium mb-6">Todo List</h1>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button className="w-full">
						<CalendarIcon />
						{date ? (
							format(date, "dd/MM/yyyy")
						) : (
							<span>Pick a date</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="center">
					<Calendar
						mode="single"
						selected={date}
						onSelect={(date) => {
							setDate(date);
							setOpen(false);
						}}
						className="rounded-md border shadow-sm"
						captionLayout="dropdown"
					/>
				</PopoverContent>
			</Popover>
			{/* LIST */}
			<ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
				<div className="flex flex-col gap-4">
					{/* LIST ITEM */}
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label
								htmlFor="item1"
								className="text-sm text-muted-foreground"
							>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit.
							</label>
						</div>
					</Card>
					{/* LIST ITEM */}
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label
								htmlFor="item1"
								className="text-sm text-muted-foreground"
							>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit.
							</label>
						</div>
					</Card>
					{/* LIST ITEM */}
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label
								htmlFor="item1"
								className="text-sm text-muted-foreground"
							>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit.
							</label>
						</div>
					</Card>
					{/* LIST ITEM */}
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label
								htmlFor="item1"
								className="text-sm text-muted-foreground"
							>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit.
							</label>
						</div>
					</Card>
					{/* LIST ITEM */}
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label
								htmlFor="item1"
								className="text-sm text-muted-foreground"
							>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit.
							</label>
						</div>
					</Card>
					{/* LIST ITEM */}
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label
								htmlFor="item1"
								className="text-sm text-muted-foreground"
							>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit.
							</label>
						</div>
					</Card>
					{/* LIST ITEM */}
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label
								htmlFor="item1"
								className="text-sm text-muted-foreground"
							>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit.
							</label>
						</div>
					</Card>
					{/* LIST ITEM */}
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label
								htmlFor="item1"
								className="text-sm text-muted-foreground"
							>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit.
							</label>
						</div>
					</Card>
					{/* LIST ITEM */}
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label
								htmlFor="item1"
								className="text-sm text-muted-foreground"
							>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit.
							</label>
						</div>
					</Card>
					{/* LIST ITEM */}
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" checked />
							<label
								htmlFor="item1"
								className="text-sm text-muted-foreground"
							>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit.
							</label>
						</div>
					</Card>
					{/* LIST ITEM */}
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" checked />
							<label
								htmlFor="item1"
								className="text-sm text-muted-foreground"
							>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit.
							</label>
						</div>
					</Card>
					{/* LIST ITEM */}
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" checked />
							<label
								htmlFor="item1"
								className="text-sm text-muted-foreground"
							>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit.
							</label>
						</div>
					</Card>
					{/* LIST ITEM */}
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" checked />
							<label
								htmlFor="item1"
								className="text-sm text-muted-foreground"
							>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit.
							</label>
						</div>
					</Card>
				</div>
			</ScrollArea>
		</div>
	);
};

export default TodoList;

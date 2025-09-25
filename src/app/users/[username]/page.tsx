import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import React from "react";

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AppLineChart } from "@/components/AppLineChart";

const SingleUserPage = () => {
	return (
		<div>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href="/users">Users</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			{/* CONTAINER */}
			<div className="mt-4 flex flex-col xl:flex-row gap-8">
				{/* LEFT */}
				<div className="w-full xl:w-1/3 space-y-6">
					{/* USER BADGES CONTAINER */}
					<div className="bg-primary-foreground p-4 rounded-lg">
						<h1 className="text-xl font-semibold">User Badges</h1>
						<div className="flex mt-4 gap-2">
							{" "}
							<HoverCard>
								<HoverCardTrigger>
									<BadgeCheck
										size={36}
										className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
									/>
								</HoverCardTrigger>
								<HoverCardContent align="start">
									<h1 className="font-bold mb-2">
										Verified User
									</h1>
									<p className="text-sm text-muted-foreground">
										This user has been verified by the admin
									</p>
								</HoverCardContent>
							</HoverCard>
							<HoverCard>
								<HoverCardTrigger>
									<Candy
										size={36}
										className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
									/>
								</HoverCardTrigger>
								<HoverCardContent align="start">
									<h1 className="font-bold mb-2">
										Verified User
									</h1>
									<p className="text-sm text-muted-foreground">
										This user has been verified by the admin
									</p>
								</HoverCardContent>
							</HoverCard>
							<HoverCard>
								<HoverCardTrigger>
									<Citrus
										size={36}
										className="rounded-full bg-red-500/30 border-1 border-red-500/50 p-2"
									/>
								</HoverCardTrigger>
								<HoverCardContent align="start">
									<h1 className="font-bold mb-2">
										Verified User
									</h1>
									<p className="text-sm text-muted-foreground">
										This user has been verified by the admin
									</p>
								</HoverCardContent>
							</HoverCard>
							<HoverCard>
								<HoverCardTrigger>
									<Shield
										size={36}
										className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
									/>
								</HoverCardTrigger>
								<HoverCardContent align="start">
									<h1 className="font-bold mb-2">
										Verified User
									</h1>
									<p className="text-sm text-muted-foreground">
										This user has been verified by the admin
									</p>
								</HoverCardContent>
							</HoverCard>
						</div>
					</div>
					{/* INFOMARTION CONTAINER */}
					<div className="bg-primary-foreground p-4 rounded-lg">
						<div className="flex justify-between items-center">
							<h1 className="text-xl font-semibold mb-4">
								User Information
							</h1>
							<Sheet>
								<SheetTrigger asChild>
									<Button>Edit User</Button>
								</SheetTrigger>
								<EditUser />
							</Sheet>
						</div>

						<div className="space-y-4 mt-4">
							<div className="flex flex-col gap-2 mb-8">
								<p className="text-sm text-muted-foreground">
									Profile completion
								</p>
								<Progress value={33} />
							</div>
							<div className="flex items-center gap-2">
								<span className="font-bold">Email: </span>
								<span>Joen</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="font-bold">Phone: </span>
								<span>Joen</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="font-bold">Location: </span>
								<span>Joen</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="font-bold">Role: </span>
								<Badge>Joen</Badge>
							</div>
						</div>
						<p className="text-sm text-muted-foreground mt-4">
							Joined on 2025.01.01
						</p>
					</div>
					{/* CARD LIST CONTAINER */}
					<div className="bg-primary-foreground p-4 rounded-lg">
						<CardList title="Latest Transactions" />
					</div>
				</div>
				{/* RIGHT */}
				<div className="w-full xl:w-2/3 space-y-6">
					{/* USER CARD CONTAINER */}
					<div className="bg-primary-foreground p-4 rounded-lg space-y-2">
						<div className="flex items-center gap-2">
							<Avatar>
								<AvatarImage src="" />
								<AvatarFallback>20</AvatarFallback>
							</Avatar>
							<h1 className="text-xl">John Doe</h1>
						</div>
						<p className="mt-4 text-sm text-muted-foreground">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Tempore commodi dolores voluptas, deserunt sed
							animi quos facere quia nam maiores cupiditate
							excepturi dignissimos exercitationem similique
							culpa, consequatur esse tenetur nihil?
						</p>
					</div>
					{/* CHART CONTAINER */}
					<div className="bg-primary-foreground p-4 rounded-lg">
						<AppLineChart />
					</div>
					{/* ACTIVITY LOG CONTAINER */}
					<div className="bg-primary-foreground p-4 rounded-lg"></div>
				</div>
			</div>
		</div>
	);
};

export default SingleUserPage;

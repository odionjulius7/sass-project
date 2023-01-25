import React from "react";
import {
	Typography,
	Box,
	Divider,
	CardContent,
	Card,
	Grid,
	Chip,
} from "@mui/material";

const MessageArea = (): JSX.Element => {
	let Receipients: Array<string> = [
		"Mohammed Ismail",
		"Suhail Salaman",
		"Hohammed almaki hussain",
		"Hohammed Salaman",
		"Almaki hussain",
	];
	let handleDelete = (): void => console.log("Delete");
	return (
		<Card
			sx={{
				borderRadius: 3,
				border: "1px solid #000",
				p: 2,
				mt: 5,
				backgroundColor: "#EFFBFF",
			}}>
			<CardContent>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<Typography
						gutterBottom
						sx={{ mb: 2, fontSize: 20 }}
						component="div"
						variant="h2">
						To
					</Typography>
					<Grid sx={{ flex: 1, mt: 1 }} container spacing={0.5}>
						{Receipients.map((receipient: string, index: number) =>
							index < 3 ? (
								<Grid item key={index}>
									<Chip
										sx={{ backgroundColor: "#fff" }}
										label={receipient}
										onDelete={handleDelete}
									/>
								</Grid>
							) : (
								""
							)
						)}
						{Receipients.length > 3 ? (
							<Grid item>
								<Chip
									sx={{ backgroundColor: "#000", color: "#fff" }}
									label={`+ 156 more`}
									variant="outlined"
								/>
							</Grid>
						) : (
							""
						)}
					</Grid>
					<Divider light={true} sx={{ color: "#fff", my: 3 }} />
					<Typography sx={{ fontSize: 20 }} component="div" variant="h2">
						Subject
					</Typography>
					<Typography gutterBottom sx={{ fontSize: 15, mb: 4, mt: 1 }}>
						Your Application status
					</Typography>
					<Typography sx={{ fontSize: 16 }}>Hi {"{first name}"},</Typography>
					<Typography sx={{ fontSize: 16, mt: 3 }}>
						Thank you for your interest on our programme, Unfortunately , we
						will not be selecting your application to move forward.
					</Typography>
					<Typography sx={{ fontSize: 16, mt: 3 }}>Regards,</Typography>
					<Typography sx={{ fontSize: 16 }}>Nan</Typography>
					<Typography variant="caption" sx={{ fontSize: 12, mt: 4 }}>
						{`By: Kit `}| {` On 2023.01.15`}
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};

export default MessageArea;

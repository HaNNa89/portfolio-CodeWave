import { Box, Typography } from "@mui/material";

function ProfileCard() {
	return (
		<>
			<Box sx={profilecontainer}>
				<Box sx={cardcontainer}>
					<Box sx={cardprofile}>
						<img
							src="public/pictures/girl.jpg"
							alt="girl"
							width="150"
							height="180"
							style={{ borderRadius: "20px" }}
						/>

						<Typography sx={cardtitle}>Felicia Willnäs</Typography>
						<Typography sx={cardtext}>Frontend developer</Typography>
					</Box>
					<Box sx={cardprofile}>
						<img
							src="public/pictures/girl.jpg"
							alt="girl"
							width="150"
							height="180"
							style={{ borderRadius: "20px" }}
						/>

						<Typography sx={cardtitle}>Hanna Petersson</Typography>
						<Typography sx={cardtext}>Frontend developer</Typography>
					</Box>
					<Box sx={cardprofile}>
						<img
							src="public/pictures/girl.jpg"
							alt="girl"
							width="150"
							height="180"
							style={{ borderRadius: "20px" }}
						/>

						<Typography sx={cardtitle}>Mergim Shala</Typography>
						<Typography sx={cardtext}>Frontend developer</Typography>
					</Box>
					<Box sx={cardprofile}>
						<img
							src="public/pictures/girl.jpg"
							alt="girl"
							width="150"
							height="180"
							style={{ borderRadius: "20px" }}
						/>
						<Typography sx={cardtitle}>Madeleine Gustafsson</Typography>
						<Typography sx={cardtext}>Frontend developer</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
}

const profilecontainer = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
};

const cardcontainer = {
	display: "flex",
	flexDirection: "row",
};

const cardprofile = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "10px",
};

const cardtitle = {
	fontFamily: "Lexend giga",
	fontSize: 12,
};

const cardtext = {
	fontFamily: "Lexend giga",
	fontSize: 10,
};

export default ProfileCard;

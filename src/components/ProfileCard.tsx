import { Box, Grid, Typography } from "@mui/material";

function ProfileCard() {
	return (
		<>
			<Typography ml={8} mt={10} variant="h4">
				OUR TEAM
			</Typography>
			<Box sx={profilecontainer}>
				<Grid container spacing={1}>
					<Grid item xs={12} sm={6} md={3}>
						<Box mb={10} mt={10} sx={cardprofile}>
							<img
								src="public/pictures/girl.jpg"
								alt="girl"
								style={{
									borderRadius: "20px",
									maxWidth: "12rem",
									height: "auto",
								}}
							/>
							<Typography mt={1} sx={cardtitle}>
								Felicia Willnäs
							</Typography>
							<Typography sx={cardtext}>
								Web Development Enthusiast with a Focus on Responsive Design
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Box mb={10} mt={10} sx={cardprofile}>
							<img
								src="public/pictures/girl.jpg"
								alt="girl"
								style={{
									borderRadius: "20px",
									maxWidth: "12rem",
									height: "auto",
								}}
							/>
							<Typography mt={1} sx={cardtitle}>
								Hanna Petersson
							</Typography>
							<Typography sx={cardtext}>
								Front-End Guru Specializing in React.js
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Box mb={10} mt={10} sx={cardprofile}>
							<img
								src="public/pictures/girl.jpg"
								alt="girl"
								style={{
									borderRadius: "20px",
									maxWidth: "12rem",
									height: "auto",
								}}
							/>
							<Typography mt={1} sx={cardtitle}>
								Mergim Shala
							</Typography>
							<Typography sx={cardtext}>
								UX-Focused Front-End Designer
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Box mb={10} mt={10} sx={cardprofile}>
							<img
								src="public/pictures/girl.jpg"
								alt="girl"
								style={{
									borderRadius: "20px",
									maxWidth: "12rem",
									height: "auto",
								}}
							/>
							<Typography mt={1} sx={cardtitle}>
								Madeleine Gustafsson
							</Typography>
							<Typography sx={cardtext}>
								Front-End Developer with E-commerce Experience
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}

const profilecontainer = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
};

const cardprofile = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "10px",
};

const cardtitle = {
	fontFamily: "monsterrat",
	fontSize: 18,
};

const cardtext = {
	fontFamily: "monsterrat",
	fontSize: 14,
	textAlign: "center",
};

export default ProfileCard;

import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@mui/material";
import {
	FormElementsContainer,
	ProfissionaisContainer,
	ProfissionaisPaper,
} from "ui/styles/pages/index.style";

const Home: NextPage = () => {
	return (
		<div>
			<SafeEnvironment />
			<PageTitle
				title={"Conheça os profissionais"}
				subtitle={
					"Preencha seu endereço e veja todos os profissionais da sua localidade"
				}
			/>
			<Container>
				<FormElementsContainer>
					<TextFieldMask
						mask={"99.999-999"}
						label={"Digite seu CEP"}
						fullWidth
						variant={"outlined"}
					/>

					<Typography color={"error"}>CEP inválido</Typography>
					<Button
						variant={"contained"}
						color={"secondary"}
						sx={{ width: "220px" }}
					>
						Buscar
					</Button>
				</FormElementsContainer>
				<ProfissionaisPaper>
					<ProfissionaisContainer>
						<UserInformation
							name={"Haniel Lourenço"}
							picture={"https://github.com/haniellourenco.png"}
							rating={4}
							description={"Joinville"}
						/>
						<UserInformation
							name={"Eduarda Rech"}
							picture={""}
							rating={5}
							description={"Joinville"}
						/>
						<UserInformation
							name={"Haniel Lourenço"}
							picture={"https://github.com/haniellourenco.png"}
							rating={4}
							description={"Joinville"}
						/>
						<UserInformation
							name={"Eduarda Rech"}
							picture={""}
							rating={5}
							description={"Joinville"}
						/>
						<UserInformation
							name={"Haniel Lourenço"}
							picture={"https://github.com/haniellourenco.png"}
							rating={4}
							description={"Joinville"}
						/>
						<UserInformation
							name={"Eduarda Rech"}
							picture={""}
							rating={5}
							description={"Joinville"}
						/>
					</ProfissionaisContainer>
				</ProfissionaisPaper>
			</Container>
		</div>
	);
};

export default Home;

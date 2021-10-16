import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

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
		</div>
	);
};

export default Home;

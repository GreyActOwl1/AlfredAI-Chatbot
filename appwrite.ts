import { Client, Account, OAuthProvider, AppwriteException } from "appwrite";

const client = new Client();

client
// TODO:FIXME
	.setEndpoint(process.env.APPWRITE_API_ENDPONT!)
	.setProject(process.env.APPWRITE_PROJECT_ID!);

export const account = new Account(client);
export { AppwriteException, OAuthProvider };

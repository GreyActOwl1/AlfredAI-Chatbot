"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button, Spacer } from "@nextui-org/react";
import { account, AppwriteException, OAuthProvider } from "../../../appwrite";

interface LoginFormData {
	email: string;
	password: string;
}

export default function Login() {
	const [formData, setFormData] = useState<LoginFormData>({
		email: "",
		password: "",
	});
	const [error, setError] = useState<string>("");
	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		try {
			await account.createEmailPasswordSession(formData.email, formData.password);
			router.push("/welcome"); 
		} catch (err) {
			if (err instanceof AppwriteException) {
				if (err.code === 401) {
					setError("Incorrect email or password. Please try again.");
				} else {
					setError(err.message);
				}
			} else {
				setError("An unknown error occurred.");
			}
		}
	};

	const handleGoogleLogin = async () => {
		try {
			await account.createOAuth2Session(
				OAuthProvider.Google)
		} catch (err) {
			if (err instanceof AppwriteException) {
				setError(err.message);
			} else {
				setError("An error occurred during login with google.");
			}
		}
	};

	return (
		<div style={{ maxWidth: "400px", margin: "40px auto" }}>
			<h2 style={{ textAlign: "center" }}>Login</h2>
			<form onSubmit={handleLogin}>
				<Input
					isClearable
					fullWidth
					type="email"
					placeholder="Email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
					autoComplete="username"
				/>
				<Spacer y={1.5} />
				<Input
					isClearable
					fullWidth
					type="password"
					placeholder="Password"
					autoComplete="current-password"
					name="password"
					value={formData.password}
					onChange={handleChange}
					required
				/>
				<Spacer y={1.5} />
				<Button type="submit" color="primary">
					Login
				</Button>
			</form>
			<Spacer y={1} />
			<Button onClick={handleGoogleLogin} color="secondary" >
				Login with Google
			</Button>
			{error && (
				<p style={{ color: "red", marginTop: "20px", textAlign: "center" }}>
					{error}
				</p>
			)}
		</div>
	);
}

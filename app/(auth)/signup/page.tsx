"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button, Spacer } from "@nextui-org/react";
import { account } from "../../../appwrite"; 

interface SignUpFormData {
	name: string;
	email: string;
	password: string;
}

export default function SignUp() {
	const [formData, setFormData] = useState<SignUpFormData>({
		name: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState<string>("");
	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSignUp = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			await account.create(
				"unique()",
				formData.email,
				formData.password,
				formData.name
			);
			router.push("/welcome"); 
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError("An unknown error occurred.");
			}
		}
	};

	return (
		<div style={{ maxWidth: "400px", margin: "40px auto" }}>
			<h2 style={{ textAlign: "center" }}>Sign Up</h2>
			<form onSubmit={handleSignUp}>
				<Input
					isClearable
					// underlined
					fullWidth
					placeholder="Name"
					autoComplete="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
				<Spacer y={1.5} />
				<Input
					isClearable
					// underlined
					fullWidth
					type="email"
					placeholder="Email"
					name="email"
					autoComplete="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<Spacer y={1.5} />
				<Input
					isClearable
					// underlined
					fullWidth
					type="password"
					placeholder="Password"
					name="password"
					autoComplete="new-password"
					value={formData.password}
					onChange={handleChange}
					required
				/>
				<Spacer y={1.5} />
				<Button type="submit" color="primary" >
					Sign Up
				</Button>
				{error && (
					<p style={{ color: "red", marginTop: "20px", textAlign: "center" }}>
						{error}
					</p>
				)}
			</form>
		</div>
	);
}
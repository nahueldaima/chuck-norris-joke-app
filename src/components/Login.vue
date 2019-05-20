<template>
	<v-layout row justify-center>
		<v-dialog persistent v-model="display" max-width="600">
			<v-card>
				<v-container>
					<v-img class="loginImage" :src="imageUrl" max-width="250px"></v-img>
					<h1 red class="text-xs-center">The Chuck Norris Jokes App</h1>
				</v-container>
				<v-container class="loginContainer">
					<h2 class="text-xs-center">Login</h2>
					<p
						class="text-xs-center"
					>Use any valid email address as default username. The password is any that match the assignment criteria.</p>
					<v-card-text>
						<v-text-field
							v-model="email"
							:error-messages="emailErrors"
							label="E-mail"
							required
							@input="$v.email.$touch()"
							@blur="$v.email.$touch()"
						></v-text-field>
						<v-spacer></v-spacer>
						<v-text-field
							v-model="password"
							:error-messages="passwordError"
							:append-icon="show ? 'visibility' : 'visibility_off'"
							:type="show ? 'text' : 'password'"
							label="Password"
							@input="$v.password.$touch()"
							@blur="$v.password.$touch()"
							@click:append="show = !show"
						></v-text-field>
					</v-card-text>

					<v-card-actions>
						<v-layout align-center justify-end>
							<v-btn :disabled="$v.$invalid" @click="submit">Log In</v-btn>
						</v-layout>
					</v-card-actions>
				</v-container>
			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, maxLength, alpha } from "vuelidate/lib/validators";

export default {
	props: {
		display: {
			type: Boolean,
			required
		}
	},
	data() {
		return {
			email: "",
			show: false,
			password: "",
			imageUrl: require("@/assets/chuck-norris-app.png")
		};
	},
	mixins: [validationMixin],
	validations: {
		email: { required, email },
		password: {
			required,
			maxLength: maxLength(32),
			alpha,
			lowerCase: value => /^[a-z]*$/.test(value),
			specialCharacters: value => {
				if (/(O|l|i)/g.test(value)) return false;
				else return true;
			},
			overlapping: s => {
				if (typeof s === "string") {
					let subString = value => value.replace(/(.)\1{1,}/g, "");
					if (subString(s).length > 1) return true;
					else return false;
				}
			},
			hasIncreasingLetters: s => {
				if (typeof s === "string") {
					for (var i in s) {
						if (
							String.fromCharCode(s.charCodeAt(i) + 1) == s[+i + 1] &&
							String.fromCharCode(s.charCodeAt(i) + 2) == s[+i + 2]
						)
							return true;
					}
					return false;
				}
			}
		}
	},
	computed: {
		emailErrors() {
			const errors = [];
			if (!this.$v.email.$dirty) return errors;
			!this.$v.email.email && errors.push("Must be valid e-mail");
			!this.$v.email.required && errors.push("E-mail is required");
			return errors;
		},
		passwordError() {
			const errors = [];
			if (!this.$v.password.$dirty) return errors;
			!this.$v.password.required && errors.push("Password is required");
			!this.$v.password.maxLength &&
				errors.push("Password max length is 32 chars");
			!this.$v.password.alpha &&
				errors.push("Password must only contains letters");
			!this.$v.password.lowerCase &&
				errors.push("Password must only contains lowercase letters");
			!this.$v.password.specialCharacters &&
				errors.push("Password must not contain l, i or O letters");
			!this.$v.password.overlapping &&
				errors.push(
					"Password must contain at least two non overlapping pairs of letters"
				);
			!this.$v.password.hasIncreasingLetters &&
				errors.push(
					"Password must contain one increasing straight of at least three letters"
				);
			return errors;
		}
	},
	methods: {
		submit() {
			if (!this.$v.email.$invalid && !this.$v.password.$invalid) {
				this.$store.commit("LOG_IN");
				this.clear();
			}
		},
		clear() {
			this.$v.$reset();
			this.email = "";
		}
	}
};
</script>

<style>
.v-overlay--active:before {
	opacity: 0.95;
}

.loginContainer {
	background-color: #f7f7f7;
}

.loginImage {
	max-width: 300px;
	height: auto;
	margin-left: auto;
	margin-right: auto;
}
</style>

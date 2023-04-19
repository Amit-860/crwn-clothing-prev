import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
	onAuthStateChangedListner,
	createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import Home from "./routes/home/home.component.jsx";
import Navigation from "./components/navigation/navigation.component.jsx";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./routes/auth/auth.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import Checkout from "./routes/checkout/checkout.component.jsx";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListner((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			// console.log(setCurrentUser(user));
			dispatch(setCurrentUser(user));
		});
		return unsubscribe;
	}, [dispatch]); //we don't need to pass dispatch as a dep-array because dispatch will never change

	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="/shop/*" element={<Shop />} />
				<Route path="/auth" element={<AuthForm />} />
				<Route path="/checkout" element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;

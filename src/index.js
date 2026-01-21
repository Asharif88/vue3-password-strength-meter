import Password from './components/PasswordStrengthMeter.vue'

const plugin = {
	install(app) {
		app.component('Password', Password);
	},
};

export default plugin;
if (typeof window !== 'undefined' && window.Vue) {
	window.VuePasswordStrengthMeter = plugin;
}
import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

function registerServiceWorker() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/JuleBanko/sw.js').then((registration) => {
			// If there's an updated SW waiting, notify the page
			if (registration.waiting) {
				window.dispatchEvent(new CustomEvent('swWaiting', { detail: { registration } }));
			}

			registration.addEventListener('updatefound', () => {
				const newWorker = registration.installing;
				if (newWorker) {
					newWorker.addEventListener('statechange', () => {
						if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
							// New update available
							window.dispatchEvent(new CustomEvent('swWaiting', { detail: { registration } }));
						}
					});
				}
			});
		}).catch((err) => console.warn('SW registration failed:', err));

		// When the new SW activates, reload to use the new content
		let refreshing = false;
		navigator.serviceWorker.addEventListener('controllerchange', () => {
			if (refreshing) return;
			refreshing = true;
			window.location.reload();
		});
	}
}

registerServiceWorker();

createApp(App).mount('#app')

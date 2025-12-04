import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

function registerServiceWorker() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/JuleBanko/sw.js').then((registration) => {
			console.log('[SW] Service worker registered');
			
			// If there's an updated SW waiting, notify the page
			if (registration.waiting) {
				console.log('[SW] Update available on page load');
				window.dispatchEvent(new CustomEvent('swWaiting', { detail: { registration } }));
			}

			registration.addEventListener('updatefound', () => {
				console.log('[SW] Update found, installing new service worker');
				const newWorker = registration.installing;
				if (newWorker) {
					newWorker.addEventListener('statechange', () => {
						console.log('[SW] New worker state:', newWorker.state);
						if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
							// New update available
							console.log('[SW] New service worker installed and waiting');
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
			console.log('[SW] Controller changed, reloading page');
			refreshing = true;
			window.location.reload();
		});
	}
}

registerServiceWorker();

createApp(App).mount('#app')

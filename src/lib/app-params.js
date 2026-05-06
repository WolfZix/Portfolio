// Simple app parameters - removed Base44 specific logic
const getAppParams = () => {
	return {
		appId: import.meta.env.VITE_APP_ID || 'default',
		token: null, // No authentication needed
	}
}

export const appParams = {
	...getAppParams()
}

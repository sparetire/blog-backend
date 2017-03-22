module.exports = process.env.NODE_ENV === 'dev' ? {
	port: 3000
} : {
	port: 80
};
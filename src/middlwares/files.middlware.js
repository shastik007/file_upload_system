const fileMiddlware = (req, res, next) => {
	let file = Buffer.from('');
	req.on('data', chank  => {
		file = Buffer.concat([file, chank]);
	});
	req.on('end', () => {
		req.file = {data: file, mimetype: req.headers['content-type'], size: req.headers['content-length']};
		next();
	});
};

export default fileMiddlware
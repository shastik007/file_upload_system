const fileMiddlware = (req, res, next) => {
	let file = Buffer.from('');
	req.on('data', chank  => {
		file = Buffer.concat([file, chank]);
	});
	req.on('end', () => {
		console.log(req.headers);
		req.file = {data: file, mimetype: req.headers['content-type'], size: req.headers['content-length'],filename:req.headers['content-dispostion']};
		next();
	});
};

export default fileMiddlware
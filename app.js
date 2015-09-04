var cp = require('child_process');

var load = function () {
	var worker = cp.fork('./worker');
	setTimeout(function () {
		worker.kill('SIGINT');
		var worker2 = cp.fork('./worker2');
		setTimeout(function () {
			worker2.kill('SIGINT');
			var worker3 = cp.fork('./worker3');
			setTimeout(function () {
				worker3.kill('SIGINT');
				load();
			}, 10000);
		}, 10000);
	}, 10000);
};

load();
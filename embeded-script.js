"use strict";

(function() {
	var photos = $(".media-thumbnail img");
	$.each(photos, function(i, photo) {
		$(photo).click(photo, function(obj) {
			location.href = obj.data.src + ":orig";
		});
	});
})();

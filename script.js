room.onLoad = function () {
	room.createObject('Text', {
		js_id : 'text_text',
		text : 'Hit X on your keyboard to change the website.',
		pos : Vector(0, 1, 3),
		fwd : scalarMultiply(player.view_dir, -1)
	});
}
room.onKeyDown = function (event) {
    
    if (event.keyCode == "x" || event.keyCode == "X") {
        // testing to see if we can manipulate the AssetWebSurface object
        room.objects["487"].websurface_id = "google";
    }
    
}

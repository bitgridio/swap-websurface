room.onKeyDown = function (event) {
    if (event.keyCode == "x" || event.keyCode == "X") {
        // testing to see if we can manipulate the AssetWebSurface object
        room.objects["487"].websurface_id = "google";
    }
}

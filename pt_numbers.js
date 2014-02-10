
//TODO refactor with a function to be able to add the story number
// to any given story, such that we can call it when a new story is added
// todo put it inside the story
function loadStoryNumbers(){
	console.log("running loadStoryNumbers");
	var preview_headers = $('div.items div.item header.preview');
	preview_headers.each(function(index){
		var parent_elm = preview_headers[index].parentNode;
		var id = parent_elm.className.split(/ +/)[0].split(/_/)[1];
		if (id != null){
			displayStoryNumberInHeader(id, preview_headers[index])
		}
	});
}

function displayStoryNumberInHeader(story_number, header_element){
	$("<div class='story_number preview'>" + story_number + "</div>").insertBefore(header_element.firstChild);
}

setTimeout(loadStoryNumbers, 2000);



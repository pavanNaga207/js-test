
var names= ["jhon", "Pavan", "Jayanth", "Vijay", "naraesh", "Japan", "trishal", "venkatesh"]

for (var i=0; i < names.length; i++){
	if(names[i].charAt(0) == 'j' || names[i].charAt(0) == 'J') {
		byeSpeaker.func(names[i]);
	}
	else {
		hellospeaker.func(names[i]);
	}
}
